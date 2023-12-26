
let gameover = document.querySelector("gameover.mp3")
let music = document.querySelector("music.mp3")
// let ting = document.querySelector("ting.mp3")
let Audioturn = new Audio("ting.mp3")

let turn = "x"

//to Change the turn
const changeTurn = function () {
    return turn ===  "x"?"0" :"x"
}