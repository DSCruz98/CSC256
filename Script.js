let slideIndex = 0;
const slides = document.getElementsByClassName("slides");

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

function addItem() {
  const input = document.getElementById("itemInput");
  const list = document.getElementById("itemList");
  const value = input.value.trim();

  if (value !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = value;
    list.appendChild(listItem);
    input.value = ""; // Clear input field
  }
}

function clearList() {
  const list = document.getElementById("itemList");
  list.innerHTML = ""; // Remove all items
}

function removeLastItem() {
  const list = document.getElementById("itemList");
  if (list.lastChild) {
    list.removeChild(list.lastChild); // Remove last <li>
  }
}
