const remove = (Node) => {
    let empPayrollData = empPayrollDataList.find(empPayrollData => empPayrollData.id == Node.id);
    if (!empPayrollData) return;
    const index = empPayrollDataList
                 .map(empData => empData._id)
                .indexOf(empPayrollData._id);
                empPayrollDataList.splice(index, 1);
   localStorage.setItem("EmployeePayrollList", JSON.stringify(empPayrollDataList));
   document.querySelector(".emp-count").textContent = empPayrollDataList.length;
   createInnerHtml();        
}