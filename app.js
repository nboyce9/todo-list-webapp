function deleteTask(){
    alert("deleted");
    // document.getElementById("task").remove;
    // document.getElementById("task-list").removeChild(task);
       

}
function addTask() {
    var task = document.getElementById("task").value;
    if (task) {
        const li = document.createElement("li");
        li.innerHTML = `
            <label>
                <input type="checkbox">
                <span>${task}</span>
            </label>
            <span class="edit-btn">Edit</span>
            <button class="delete-btn" type="submit" onclick="deleteTask()">Delete</button>
            `;
        document.getElementById("task-list").appendChild(li);
        document.getElementById("task").value = "";

        const checkbox = li.querySelector("input");
        const editBtn = li.querySelector(".edit-btn");
        const taskSpan = li.querySelector("span");
        const deleteBtn = li.querySelector(".delete-btn");
    
        editBtn.innerHTML =`
            <label>
                <button id="edit-btn" type="submit" onclick="editTask()">Edit</button>
            </label>`;
        
        //deleteBtn.innerHTML =`<button id="delete-btn" type="submit" onclick="deleteTask()">Delete</button>`;
    }
  
}


function editTask(){
    alert("edited");
}