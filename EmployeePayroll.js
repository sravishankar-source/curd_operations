class EmployeePayrollData {
    //getter and setter method
    get id() {return this._id; }
    set id(id) {...
    }
    get name() { return this._name; }
    set name(name) {...
    }
    get profilePic() { return this._profilePic; }
    set profilePic(profilePic) {...
    }
    get gender() { return this._gender; }
    set gender(gender) {...
    } 
    get department() { return this._department; }
    set salary(salary) {...
    }
    get salary() { return this._salary; }
    set salary(salary) {...
    }
    get note() { return this._note; }
    set note(note) {...
    }
    get startDate() { return this._startDate; }
    set startDate(startDate) {
        let now = new Date();
        if (startDate > now) throw 'Start Date is a Future Date';
        var diff = Math.abs(now.getTime() - startDate.getTime());
        if ( diff / (1000 * 60 * 24) >30)
        throw 'Start Date is beyond 30 Days!';
        this._startdate = startDate;
    }
    //method
    toString() {..
    }
    window.addEventListener('DOMContentLoaded',(Event) => {
        const name = document.querySelector('#name');
        name.addEventListener('input', function() {
            if(name.nodeValue.lengthn == 0) {
                setTextvalue('.text-error',"");
                return;
            }
            try {
                (new EmployeePayrollData()).name = name.nodeValue;
                setTextvalue('.text-error',"");
            } catch (e) {
                setTextvalue('.text-error',e);

            }
            });
            const date = document.querySelector('#date');
            date.addEventListener('input',function() {
                const startDate = new Date(Date.parse(getInputvalueById('#day')+"")+
                getInputvalueById('#month')+""+
                getInputvalueById('#year')));
                try {
                    (new EmployeePayrollData()).startdate = startdate;
                    setTextvalue('.date-error',"");
                } catch (e) {
                    setTextvalue ('.date-error',e);
                }
            
            });
            const salary = document.querySelector('#salary');
            setTextvalue('.salary-output',salary.value);
            checkForUpdate();
        });
        const save = (Event) => {
            Event.preventdefault();
            event.stopPropogation();
            try {
                setEmployeepayrollObject();
                createAndUpdateStorage();
resetForm();
window.location.replace(site_properties.home_page)
                    } catch (e) {
                        return;
                    }            }
        }
        const setEmployeepayrollObject => {
            EmployeePayrollobj._name = getInputvalueById('#name');
            EmployeePayrollobj._profilePic = getInputvalues('#[name=profile]').pop;
            
            EmployeePayrollobj._gender = getInputvalues('#[name=gender]').pop;
            
            EmployeePayrollobj._department = getInputvalues('#[name=department]').;
            
            EmployeePayrollobj._salary= getInputvalueById('#[salary]');
            
            EmployeePayrollobj._note = getInputvalueById('#notes]');
            let date = getInputvalueById('#day')+" "+getInputvalueById('#month')+""+
            getInputvalueById('#year') ;
            EmployeePayrollobj._startDate = date

        }


}
