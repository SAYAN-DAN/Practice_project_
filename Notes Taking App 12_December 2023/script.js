


const addButton = document.querySelector("button");
const noteContainer = document.querySelector(".Notebox"); // Change main to noteContainer

addButton.addEventListener("click", function () {
    addNote();
});

const addNote = function () {
    const noteBox = document.createElement("div");
    noteBox.classList.add("box"); // Use classList.add to add a class
    noteBox.innerHTML = `
        <div class="box-top">
            <i class="fa-solid fa-floppy-disk"></i>
            <i class="fa-solid fa-trash"></i>
        </div>
        <textarea name="" id=""></textarea>
    `;
    noteContainer.appendChild(noteBox); // Append to the existing noteContainer
};


