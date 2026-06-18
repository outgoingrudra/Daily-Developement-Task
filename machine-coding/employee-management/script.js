let employees = []
let selectedEmployee = null
async function render(){
    const data = await fetch("./data.json")
    const res = await data.json()
    employees = res
    selectedEmployee = employees[0].id
    populateList()
    showEmployeeInfo(selectedEmployee)
    showMainEmployee()

}
render()


function populateList(){
    let list = document.getElementById("list")
    list.innerHTML = ""
    let i = 1
    for(let x of employees){
        list.innerHTML += `<li  class="list-item"><span class="item-name" onclick="showEmployeeInfo(${x.id})">${i++} . ${x.firstName} ${x.lastName}</span><span class="delete" onclick="deleteItem(${x.id})">❌</span></li>`
    }
}

function deleteItem(id){
    employees = employees.filter(emp => emp.id != id)
    populateList()
}

function showEmployeeInfo(id){
    emp =employees.find(emp => emp.id==id)
    selectedEmployee = emp
    showMainEmployee()
    
}

function showMainEmployee(){
    let details = document.getElementById("details")
    details.innerHTML = ` <div>
                <center><h3>${selectedEmployee.firstName} ${selectedEmployee.lastName}</h3></center>
                <p>Email : ${selectedEmployee.email}</p>
                <p>Age : ${selectedEmployee.age}</p>
                <p>DOB : ${selectedEmployee.dob}</p>
                <p>Salary : ${selectedEmployee.salary}</p>
                <p>Address : ${selectedEmployee.address}</p>
              </div>`
}