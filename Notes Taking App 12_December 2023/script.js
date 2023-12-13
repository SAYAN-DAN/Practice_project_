const addButton = document.querySelector("button");
const noteContainer = document.querySelector(".Notebox"); // Change main to noteContainer


// ************************************************************************

addButton.addEventListener("click", function () {
  addNote();
});

// **************************************************************************
const addNote = function (text = "") {
  const noteBox = document.createElement("div");
  noteBox.classList.add("box"); // Use classList.add to add a class
  noteBox.innerHTML = `
        <div class="box-top">
            <i class=" save fa-solid fa-floppy-disk"></i>
            <i class=" trash fa-solid fa-trash"></i>
        </div>
        <textarea name="" id="">${text}</textarea>
    `;

  noteBox.querySelector(".trash").addEventListener("click", function () {
    noteBox.remove();
    saveNotes();
  });

  noteBox.querySelector(".save").addEventListener("click", function () {
    saveNotes();
  });

  noteBox.querySelector("textarea").addEventListener("focusout", function () {
    saveNotes();
  });

  noteContainer.appendChild(noteBox); // Append to the existing noteContainer
  saveNotes();
};

// ***********************************************************************
const saveNotes = function () {
    const storeNote = document.querySelectorAll(".box textarea");
    const data = [];
    storeNote.forEach((noteBox) => {
      data.push(noteBox.value);
    });
    //    console.log(data);
    if (data.length === 0) {
      localStorage.removeItem("storeNote");
    } else {
      localStorage.setItem("storeNote", JSON.stringify(data));
    }
  };
  
// **********************************************************************

(function () {
  const savestoreNote = JSON.parse(localStorage.getItem("storeNote"));
  if (savestoreNote === null) {
    addNote();
  } else {
    savestoreNote.forEach((lsNote) => {
      addNote(lsNote);
    });
  }
})();

// *********************************************************************
// (
//     function () {
//         const savestoreNote = JSON.parse(localStorage.getItem("storeNote")) || [];
//         savestoreNote.forEach(
//             (lsNote) => {
//                 addNote(lsNote)
//             }
//         );
//     }
// )();
