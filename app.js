function addTask() {
    var task = document.getElementById("task").value;
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
        document.getElementById("task-list").appendChild(li);
        document.getElementById("task").value = "";

        const checkbox = li.querySelector("input");
        const editBtn = li.querySelector(".edit-btn");
        const taskSpan = li.querySelector("span");
        const deleteBtn = li.querySelector(".delete-btn");

        checkbox.addEventListener("click", function () {
            li.classList.toggle("completed", checkbox.checked);
          });

        editBtn.addEventListener("click", function () {
            const update = prompt("Edit task:", taskSpan.textContent);
            if (update !== null) {
              taskSpan.textContent = update;
              li.classList.remove("completed");
            }
          });
    
        deleteBtn.addEventListener("click", function () {
            if (confirm("Are you sure you want to delete this task?")) {
              li.remove();
            
            }
          });
    }
  
}
