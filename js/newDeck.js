var modal = document.getElementById("myModal");
var btn = document.getElementById("new-deck-btn");
var span = document.getElementsByClassName("close")[0];

// Open the modal
btn.onclick = function() {
  modal.style.display = "block";
  document.getElementById("new-deck-name").focus();
}

// Close the modal X
span.onclick = function() {
  modal.style.display = "none";
}

// Click off modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.getElementById("new-deck-submit-btn").addEventListener("click", addNewDeck);

function addNewDeck() {
   // Create new deck button
    deck_list_div = document.getElementById("deck-list");

    new_deck = document.createElement("a");
    new_deck.classList.add("btn");
    new_deck.classList.add("deck-btn");

    new_deck_name = document.getElementById("new-deck-name");
    new_deck.innerText = new_deck_name.value;
    new_deck.href = "pages/deckView.html?deck-name=" + new_deck_name.value;

    const fs = require("fs");
    fs.writeFileSync('../decks/' + new_deck_name.value + '.json', 'the text to write in the file', 'utf-8');
    // try { fs.writeFileSync('../decks/' + new_deck_name.value + '.json', 'the text to write in the file', 'utf-8'); }
    // catch(e) { alert('Failed to save the file !'); }

    deck_list_div.appendChild(new_deck);
    new_deck_name.value = "";
    modal.style.display = "none";


}