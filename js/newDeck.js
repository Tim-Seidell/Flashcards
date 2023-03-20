document.getElementById("new-deck-btn").addEventListener("click", addNewDeck);

function addNewDeck() {
    deck_list_div = document.getElementById("deck-list");

    new_deck = document.createElement("button");
    new_deck.classList.add("btn");
    new_deck.innerText = "Test";

    deck_list_div.appendChild(new_deck);
}