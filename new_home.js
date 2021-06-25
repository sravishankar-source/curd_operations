let empPayrollDataList;
window.addEventListener('DOMContentLoaded',(Event)) => {
    empPayrollList = getemployeePayrollDataFromStorage();
    document.querySelector("emp-count").text-content = empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp')
});

let isUpdate = false;
let EmployeePayrollobj = {};
window.addEventListener('DOMContentLoaded', (Event) => {
    const name = document.querySelector('#name');
    name.addEventListener('input', function() {
        const salary = document.querySelector('#salary');
        setTextvalue('.salary-output',salary.value);
        salary.addEventListener('input',function() {
            checkForUpdate();
        }
    });

    const checkForUpdate = () => {
        const employeePayrollJson = localStorage.getItem('editEmp');
        isUpdate = employeePayrollJson ? true : false;
        if (!isUpdate) return;
        EmployeePayrollobj = JSON.parse(employeePayrollJson);
        SVGAnimateTransformElement();
    }
    const setForm = () => {
        setTextvalue('#name', EmployeePayrollobj._name);
        setSelectedValues('[name=profile]',EmployeePayrollobj._profilePic);
        setSelectedValues('[name=gender]',EmployeePayrollobj._gender);
        setSelectedValues('[name=department]',EmployeePayrollobj._department);
        setValue('#salary',EmployeePayrollobj._salary);
        setTextValue('#salary-output',EmployeePayrollobj._salary);
        setValue('#notes',EmployeePayrollobj._note);
        let Date = stringifyDate(EmployeePayrollobj._startDate.split("");
        setValue('#day',date[0]);
        setValue('#month',date[1]);
        setValue('#year', date[2]);

    }
    const setSelectedValues = (propertyvalue.value) => {
        let allitems = documents.querySelectorAll(propertyvalue);
        allitems.foreachItem => {
            if(Array.isArray(value)) {
                if (value.includes(item,value)) {
                    item.checked = true;
                }
            }
            else if (item.value === value)
            item.checked = true;
        });
    }