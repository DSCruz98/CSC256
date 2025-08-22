// Drake Cruz 8/14/2025
// Jump Game and Checkers were having bad interactions, jumpScript has been moved

// slideshow stuff
let slideIndex = 0;
const slides = document.getElementsByClassName("slides");

// adjusts class lists to set active image
function showSlide(index) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");
}

function changeSlide(n) {
  slideIndex = (slideIndex + n + slides.length) % slides.length;
  showSlide(slideIndex);
}

// Band List stuff
function addItem() {
  const input = document.getElementById("itemInput");
  const list = document.getElementById("itemList");
  const value = input.value.trim();

  // Clear input field
  if (value !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = value;
    list.appendChild(listItem);
    input.value = "";
  }
}

// Remove all items
function clearList() {
  const list = document.getElementById("itemList");
  list.innerHTML = "";
}

// Remove last item
function removeLastItem() {
  const list = document.getElementById("itemList");
  if (list.lastChild) {
    list.removeChild(list.lastChild);
  }
}

// Checkers stuff
let divCheckerBoard = document.getElementById("divCheckerBoard");

// create array to mimic Board and set starting piece positions
let arrPieces = [
  [null, "A", null, "A", null, "A", null, "A"],
  ["A", null, "A", null, "A", null, "A", null],
  [null, "A", null, "A", null, "A", null, "A"],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ["B", null, "B", null, "B", null, "B", null],
  [null, "B", null, "B", null, "B", null, "B"],
  ["B", null, "B", null, "B", null, "B", null],
];

// loop through 8 rows
for (let i = 0; i < 8; i++) {
  // loop through 8 columns
  for (let j = 0; j < 8; j++) {
    // create new div for squares
    let divCheckerSquare = document.createElement("div");

    // assign class to divSquare
    divCheckerSquare.classList.add("checkerSquare");

    // add id to the div to help track piece movement
    divCheckerSquare.setAttribute("id", "div" + i + j);

    // check row+column to see if even and make them another color
    if ((i + j) % 2 == 1) {
      divCheckerSquare.classList.add("checkerSquareAlt");

      // add event handler to piece
      divCheckerSquare.addEventListener("click", movePiece);
    }
    // add the square to board
    divCheckerBoard.appendChild(divCheckerSquare);

    // check array to see if a peice needs to be on this square
    // if array position is not null this will be true
    if (arrPieces[i][j]) {
      // call create piece function
      createPiece(
        "piece" + i + j,
        "checkerPlayer-" + arrPieces[i][j],
        divCheckerSquare
      );
    }
  }
}

// create piece
function createPiece(pieceId, pieceClass, divSquare) {
  // create a new div
  let divPiece = document.createElement("div");

  // set the id of the piece
  divPiece.setAttribute("id", pieceId);

  // add class to make circle
  divPiece.classList.add("checkerPiece");

  // add class to specify color
  divPiece.classList.add(pieceClass);

  //   add click event handler to store piece id
  divPiece.addEventListener("click", storePieceId);

  // add piece to square
  divSquare.appendChild(divPiece);
}

// create function to move pieces
function movePiece(event) {
  // shortcut to secret span
  let spanSecret = document.getElementById("spanSecret");

  console.log("movePiece function was called");

  // get id of piece that was clicked
  let newSquareId = event.target.id;

  console.log("newSquareId=" + newSquareId);

  //   remove both piece and div from square id to get only number
  newSquareId = newSquareId.replace("div", "").replace("piece", "");

  console.log("newSquareId=" + newSquareId);

  // get the value of selected piece from span
  let selPieceId = spanSecret.dataset.value;

  console.log("movePiece selPieceId" + selPieceId);

  //   ensure new square is valid
  if (typeof selPieceId != "undefined" && newSquareId != selPieceId) {
    console.log("move piece");

    // shortcut to source div
    let sourceDiv = document.getElementById("div" + selPieceId);

    // shortcut to selected piece original position
    let selPieceDiv = document.getElementById("piece" + selPieceId);

    // grap color class for piece
    let selPieceColorClass = selPieceDiv.classList[1];

    // remove piece from orignal position
    sourceDiv.removeChild(selPieceDiv);

    // create shortcut at target location
    let targetDiv = document.getElementById("div" + newSquareId);

    // call create piece function in new square
    createPiece("piece" + newSquareId, selPieceColorClass, targetDiv);

    // erase id from span
    spanSecret.dataset.value = "";
  }
}

// function to store selected piece id
function storePieceId(event) {
  // shartcut to secret span
  let spanSecret = document.getElementById("spanSecret");

  // get div id that was clicked
  let selPieceId = event.target.id;

  //   remove piece from square id to get only number
  selPieceId = selPieceId.replace("piece", "");

  console.log("storePieceId selPieceId" + selPieceId);

  // store Id in span
  spanSecret.dataset.value = selPieceId;
}
