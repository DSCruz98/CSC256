function currentCharacter() {
  // get character's info
  let characterName = document.getElementById("characterName");
  let characterClass = document.getElementById("characterClass");
  let characterHealth = document.getElementById("characterHealth");
  let characterMana = document.getElementById("characterMana");

  let divOutput = document.getElementById("divOutput");

  let divCharacterInfo = document.getElementById("divCharacterInfo");

  divCharacterInfo.innerHTML =
    "Name: " +
    characterName.value +
    "<br>" +
    "Class: " +
    characterClass.value +
    "<br>" +
    "Health" +
    characterHealth.value +
    "<br>" +
    "Mana: " +
    characterMana.value;

  // displays blank values when nothing is entered
  characterName.value = "";
  characterClass.value = "";
  characterHealth.value = "";
  characterMana.value = "";

  divOutput.style.display = "block";

  // stops form from actually refreshing the page
  return false;
}
