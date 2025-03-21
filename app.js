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
            <span class="delete-btn">Delete</span>
            `;
        document.getElementById("task-list").appendChild(li);
        document.getElementById("task").value = "";

        const checkbox = li.querySelector("input");
        const editBtn = li.querySelector(".edit-btn");
        const taskSpan = li.querySelector("span");
        const deleteBtn = li.querySelector(".delete-btn");
    }
}