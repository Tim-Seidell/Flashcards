const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const deck_name = urlParams.get('deck-name')
document.getElementById("deck-title").innerText = deck_name;