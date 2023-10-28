const addbutton = document.querySelector(".addbutton");
const main = document.querySelector("#main");

const saveNotes = function () {
  const mynote = document.querySelectorAll(".note textarea");
  const data = [];
  mynote.forEach(function (note) {
    data.push(note.value);
  });
  if (data.length === 0) {
    localStorage.removeItem("mynote");
  } else {
    localStorage.setItem("mynote", JSON.stringify(data));
  }
};

addbutton.addEventListener("click", function () {
  addNote();
});

/* <div id="main">
 <div class="note">
  <div class="tool">
    <i class="fa-solid fa-floppy-disk fa-shake"></i>
    <i class="fa-solid fa-trash fa-beat"></i>
  </div>
  <textarea></textarea>
</div> 
</div> */

const addNote = function (text = "") {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
  <div class="tool">
    <i class=" save fa-solid fa-floppy-disk fa-shake"></i>
    <i class=" trash fa-solid fa-trash fa-beat"></i>
  </div>
  <textarea>${text}</textarea> 
    `;
  note.querySelector(".trash").addEventListener("click", function () {
    note.remove();
    saveNotes();
  });
  note.querySelector(".save").addEventListener("click", function () {
    saveNotes();
  });
  note.querySelector("textarea").addEventListener("focusout", function () {
    saveNotes();
  });
  main.appendChild(note);
  saveNotes();
};

(function () {
  const storagenotes = JSON.parse(localStorage.getItem("mynote"));
  if (storagenotes === null) {
    addNote();
  } else {
    storagenotes.forEach(function (storagenotes) {
      addNote(storagenotes);
    });
  }
})();
