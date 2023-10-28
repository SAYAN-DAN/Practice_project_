const item = document.querySelector("#item");
const todo = document.querySelector("#massage");

const saveNotes = function () {
  const mynote = document.querySelectorAll(".listitem div");
  const data = [];
  mynote.forEach(function (listitem) {
    data.push(listitem.textContent);
  });
  if (data.length === 0) {
    localStorage.removeItem("mynote");
  } else {
    localStorage.setItem("mynote", JSON.stringify(data));
  }
};

item.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    addToDo(this.value);
    this.value = "";
  }
});

const addToDo = (item = "") => {
  const listitem = document.createElement("li");
  listitem.classList.add("listitem");
  listitem.innerHTML = `
    <div>${item}</div>
    <i class="fas fa-times"></i>`;
  listitem.addEventListener("click", function () {
    this.classList.toggle("done");
  });

  listitem.querySelector("i").addEventListener("click", function () {
    listitem.remove();
    saveNotes();
  });

  listitem.querySelector("div").addEventListener("focusout", function () {
    saveNotes();
  });

  massage.appendChild(listitem);
  saveNotes();
};

(function () {
  const storagenotes = JSON.parse(localStorage.getItem("mynote"));
  if (storagenotes === null) {
    addToDo();
  } else {
    storagenotes.forEach(function (storagenote) {
      addToDo(storagenote);
    });
  }
})();

// ************************************************************************************************************************************************************************************************

// const item = document.querySelector("#item");
// const todo = document.querySelector("#massage");

// const saveNotes = function () {
//   const mynote = document.querySelectorAll(".listitem div");
//   const data = [];
//   mynote.forEach(function (listitem) {
//     data.push(listitem.textContent);
//   });
//   if (data.length === 0) {
//     localStorage.removeItem("mynote");
//   } else {
//     localStorage.setItem("mynote", JSON.stringify(data));
//   }
// };

// item.addEventListener("keyup", function (event) {
//   if (event.key == "Enter") {
//     // console.log(this.value);
//     addToDo(this.value);
//     this.value = "";
//   }
// });

// const addToDo = (item = "") => {
//   const listitem = document.createElement("li");
//   listitem.classList.add("listitem");
//   listitem.innerHTML = `
//   <div>${item}</div>
//                     <i class="fas fa-times"></i>`;
//   listitem.addEventListener("click", function () {
//     this.classList.toggle("done");
//   });

//   listitem.querySelector("i").addEventListener("click", function () {
//     listitem.remove();
//     saveNotes();
//   });

//   listitem.querySelector("div").addEventListener("focusout", function () {
//     saveNotes();
//   });

//   massage.appendChild(listitem);
//   saveNotes();
// };

// (function () {
//   const storagenotes = JSON.parse(localStorage.getItem("mynote"));
//   if (storagenotes === null) {
//     addToDo();
//   } else {
//     storagenotes.forEach(function (storagenotes) {
//       addToDo(storagenotes);
//     });
//   }
// })()(function () {
//   const storagenotes = JSON.parse(localStorage.getItem("mynote"));
//   storagenotes.forEach(function (storagenotes) {
//     addToDo(storagenotes);
//   });
// });
