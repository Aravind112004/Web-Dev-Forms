// 💌 Form Validation Logic
document.getElementById("contactForm").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !email) {
        alert("Please fill in both your name and email.");
        event.preventDefault();
    } else if (!email.includes("@")) {
        alert("Oops! That doesn't look like a valid email address.");
        event.preventDefault();
    } else {
        alert("Thank you! We'll get back to you soon.");
    }
});

// ✅ To-Do List Logic
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    li.addEventListener("click", function () {
        this.remove(); // Click to remove
    });

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}
