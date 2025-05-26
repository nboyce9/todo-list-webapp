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
            updateCounters(taskId);
          });

          editBtn.addEventListener("click", function () {
            const update = prompt("Edit task:", taskSpan.textContent);
            if (update !== null) {
              taskSpan.textContent = update;
              li.classList.remove("completed");
              //add the code below
              checkbox.checked = false;
              updateCounters(taskId);
            }
          });
    
        deleteBtn.addEventListener("click", function () {
            if (confirm("Are you sure you want to delete this task?")) {
              li.remove();
              updateCounters(taskId);
            }
          });

    }else{
        alert("Please enter a task");
        return;
    }
 
}

function updateCounters(taskId) {
  const taskContainer = document.getElementById(`tasks-${taskId}`);
  const tasks = taskContainer.querySelectorAll("li");
  const completed = taskContainer.querySelectorAll(".completed").length;
  const uncompleted = tasks.length - completed;
  document.getElementById(`cat-${taskId}`).textContent = completed + "/" + (completed + uncompleted);
  progress(completed, uncompleted);
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

  function toggleTaskDiv(taskSection) {
    document.querySelectorAll(".task-container").forEach(sec => {
      sec.style.display = "none";
    });
  
    // toggle current one
    if (taskSection.style.display === "none" || taskSection.style.display === "") {
      taskSection.style.display = "block";
    } else {
      taskSection.style.display = "none";
    }
  }
  

function addCategory(){
  const taskId =  "cat-" + Date.now();
  var category = document.getElementById("category").value;
  if (category) {
    const li = document.createElement("li");
    li.innerHTML = `
        <label>
            <div class="category-item">${category}</div>
        </label>
        <span class="cat-progress" id="cat-${taskId}"></span>
        <button class="edit-btn"> + </button>
        <button class="delete-btn">Delete</button>
        `;

        const taskSection = document.createElement("div");
        taskSection.className = "task-container";
        taskSection.id = taskId;
    document.getElementById("category-list").appendChild(li);
    document.getElementById("category").value = "";
    
    

    
    document.getElementById("cat-sections").appendChild(taskSection);
    

    const addBtn = li.querySelector(".edit-btn");
    const deleteBtn = li.querySelector(".delete-btn");
    const openBtn = li.querySelector(".category-item");
    


  deleteBtn.addEventListener("click", function () {
      if (confirm("Are you sure you want to delete this category?")) {
        li.remove();
        taskSection.remove();
      }
    });
  addBtn.addEventListener("click", function(){
    
    taskSection.innerHTML = `
    <input class="task-input" id="task-${taskId}" placeholder="New task" />
    <button id="add-task-btn" type="submit" onclick="addTask('${taskId}'), updateCounters('${taskId}')">Add Task</button>
    <ul id="tasks-${taskId}"><ul>
  `;
  toggleTaskDiv(taskSection);
    // console.log(taskId);
    
  })

  openBtn.addEventListener("click", function(){
    //open the category to be able to add tasks.
    toggleTaskDiv(taskSection);
    updateCounters(taskId);
  }); 
  }
}
