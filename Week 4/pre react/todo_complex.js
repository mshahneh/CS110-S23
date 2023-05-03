// function add_task() {
//     var task = document.getElementById("task").value;
//     if (task == "") {
//         return;
//     }
//     var list = document.getElementById("list");
//     //  add checkbox
//     var checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     var li = document.createElement("li");
//     var text = document.createTextNode(task);
//     li.addEventListener("click", function () {
//         if (checkbox.checked) {
//             checkbox.checked = false;
//         } else {
//             checkbox.checked = true;
//         }
//         {this.classList.toggle("done")}
//     });
//     li.appendChild(checkbox);
//     li.appendChild(text);
//     list.appendChild(li);
//     document.getElementById("task").value = "";
// }


function generateListItem(task) {
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    var li = document.createElement("li");
    var taskText = document.createElement("div");
    taskText.addEventListener("click", function () {
        if (checkbox.checked) {
            checkbox.checked = false;
        } else {
            checkbox.checked = true;
        }
        this.classList.toggle("done")
    });
    taskText.innerHTML = task;
    var addSubTask = document.createElement("button");
    addSubTask.innerHTML = "+";
    addSubTask.addEventListener("click", function () {
        var subTask = prompt("Enter subtask");
        li.appendChild(generateListItem(subTask))
        });
    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(addSubTask);
    return li;
}

function add_task() {
    var task = document.getElementById("task").value;
    if (task == "") {
        return;
    }
    var list = document.getElementById("list");
    var li = generateListItem(task);
    list.appendChild(li);
    document.getElementById("task").value = "";
}