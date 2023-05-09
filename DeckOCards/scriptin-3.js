"use strict";

const NUM_CARDS = 1;
const BASE_URL = "https://deckofcardsapi.com";

const $cardArea = $("#cardsArea");
const $getCardButton = $("#getCardButton");
let DECK_ID;

/** returns id of a new shuffled deck of cards, called when page loads */
async function begin() {
  DECK_ID = await shuffleCards();
}

/** get and display a random card, called when the $getCardButton is clicked */
async function getOneCardAndDisplay() {
  console.log("deck", DECK_ID);
  const card = await getOneCard(DECK_ID);
  displayCard(card);
}

/** gets one card, returns array with object of card info */
async function getOneCard(id) {
  const cardInfo = await axios.get(
    `${BASE_URL}/api/deck/${id}/draw/?count=${NUM_CARDS}`
  );

  return [cardInfo.data.cards[0]];
}

/** takes as input array of card info, displays the card image in the $cardArea */
function displayCard(card) {
  $cardArea.empty();

  const cardImgURL = card[0].image;

  const $cardImage = $("<img>").attr({
    "src": cardImgURL,
    "alt": "Image for newly drawn card"
  });
  $cardArea.append($cardImage);
}

/** shuffle a deck of cards and return the deck_id (string) */
async function shuffleCards() {
  const shuffled = await axios.get(
    `${BASE_URL}/api/deck/new/shuffle/?deck_count=1`,
  );
  return shuffled.data.deck_id;
}

$getCardButton.on("click", getOneCardAndDisplay);

begin();