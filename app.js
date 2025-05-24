function addTask(taskId) {
  console.log(taskId);
    var task = document.getElementById(`task-${taskId}`).value;
    console.log(task);
    if (task) {   
        const li = document.createElement("li");
        li.innerHTML = `
            <label>
                <input type="checkbox">
                
                <span>${task}</span>
            </label>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
            `;
        document.getElementById(`tasks-${taskId}`).appendChild(li);
        document.getElementById(`task-${taskId}`).value = "";

        const checkbox = li.querySelector("input");
        const editBtn = li.querySelector(".edit-btn");
        const taskSpan = li.querySelector("span");
        const deleteBtn = li.querySelector(".delete-btn");

        checkbox.addEventListener("click", function () {
            li.classList.toggle("completed", checkbox.checked);
            updateCounters();
          });

          editBtn.addEventListener("click", function () {
            const update = prompt("Edit task:", taskSpan.textContent);
            if (update !== null) {
              taskSpan.textContent = update;
              li.classList.remove("completed");
              //add the code below
              checkbox.checked = false;
              updateCounters();
            }
          });
    
        deleteBtn.addEventListener("click", function () {
            if (confirm("Are you sure you want to delete this task?")) {
              li.remove();
              updateCounters();
            }
          });

    }else{
        alert("Please enter a task");
        return;
    }
 
}

const completedCounter = document.getElementById("completed-counter");
const uncompletedCounter = document.getElementById("uncompleted-counter");
const totalCounter = document.getElementById("total-counter");


function updateCounters() {
  const completedTasks = document.querySelectorAll(".completed").length;
  const uncompletedTasks =
    document.querySelectorAll("li:not(.completed)").length;
  progress(completedTasks, uncompletedTasks);

}

function progress(completedTasks, uncompletedTasks) {
    const totalTasks = completedTasks + uncompletedTasks;
    const progress = Math.round((completedTasks / totalTasks) * 100);
    document.getElementById("progress").style.width = progress + "%";
    document.getElementById("progress").textContent = progress + "%";
    if(progress === 100){
        document.getElementById("motivation").textContent = "Well done! You have completed all your tasks!";
        document.getElementById("motivation").style.color = "green";
    }else if(progress >= 50){
        document.getElementById("motivation").textContent = "Keep going! You are doing great Sweetie!";
        document.getElementById("motivation").style.color = "blue";
    }
    else if(progress >= 25){
        document.getElementById("motivation").textContent = "More Passion, More Energy, More Footwork!";
        document.getElementById("motivation").style.color = "yellow";

    }
    else{
        document.getElementById("motivation").textContent = "You! Gotta get on your zoom!";
        document.getElementById("motivation").style.color = "red";
    }
  }

  function hideTaskDiv() {
    var x = document.querySelector(".task-container");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function addCategory(){
  const taskId =  "cat-" + Date.now();
  var category = document.getElementById("category").value;
  if (category) {
    const li = document.createElement("li");
    li.innerHTML = `
        <label>
            <span class="category-item">${category}</span>
        </label>
        <button class="edit-btn"> + </button>
        <button class="delete-btn">Delete</button>
        `;
    document.getElementById("category-list").appendChild(li);
    document.getElementById("category").value = "";
    
    const taskSection = document.createElement("div");
    taskSection.className = "task-container";
    taskSection.id = taskId;
    taskSection.innerHTML = `
    <input id="task-${taskId}" placeholder="New task" />
    <button type="submit" onclick="addTask('${taskId}')">Add Task</button>
    <ul id ="tasks-${taskId}"><ul>
  `;
    document.getElementById("cat-sections").appendChild(taskSection);
    

    const addBtn = li.querySelector(".edit-btn");
    const deleteBtn = li.querySelector(".delete-btn");
    const openBtn = li.querySelector(".category-item");
    


  deleteBtn.addEventListener("click", function () {
      if (confirm("Are you sure you want to delete this category?")) {
        li.remove();
      }
    });
  addBtn.addEventListener("click", function(){

    console.log(taskId);
    
  })

  openBtn.addEventListener("click", function(){
    //open the category to be able to add tasks.
    hideTaskDiv();
  }); 
  }
}
