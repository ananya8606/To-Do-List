const taskvalue = document.querySelector(".taskvalue input");
const alltasks = document.querySelector(".Alltasks");
function addTasks() {
  const inputbyuser = taskvalue.value;
  let storedata = localStorage.getItem("New Task");
  if (storedata == null) {
    arr = [];
  } else {
    arr = JSON.parse(storedata);
  }
  arr.push(inputbyuser);
  localStorage.setItem("New Task", JSON.stringify(arr));
  listtasks();
}
function listtasks() {
  let storedata = localStorage.getItem("New Task");
  if (storedata == null) {
    arr = [];
  } else {
    arr = JSON.parse(storedata);
  }
  const tasksnumber = document.querySelector(".tasksnumber");
  tasksnumber.textContent = arr.length;
  let newTask = "";
  arr.forEach((element, i) => {
    newTask += `<li>${element}<span class="delete" onclick="deleteTask(${i})"><i class="fa fa-trash"></i></span></li>`;
  });
  alltasks.innerHTML = newTask;
  taskvalue.innerHTML = "";
}
function deleteTask(i) {
  let storedata = localStorage.getItem("New Task");
  arr = JSON.parse(storedata);
  arr.splice(i, 1);
  localStorage.setItem("New Task", JSON.stringify(arr));
  listtasks();
}
function deleteAllTasks() {
  arr = [];
  localStorage.setItem("New Task", JSON.stringify(arr));
  listtasks();
}
