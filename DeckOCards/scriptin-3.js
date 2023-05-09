"use strict";

const NUM_CARDS = 1;
const BASE_URL = "https://deckofcardsapi.com";

const $cardArea = $("#cardsArea");
const $getCardButton = $("#getCardButton");
let DECK_ID;

/** get one card and display its suit and value */
async function begin() {
  DECK_ID = await shuffleCards();
  console.log("deck", DECK_ID);
}

/** get a random card */
async function getOneCardAndDisplay() {
  // evt.preventDefault();
  const card = await getOneCard(DECK_ID);
  displayCard(card);
}

async function getOneCard(id) {
  const cardInfo = await axios.get(
    `${BASE_URL}/api/deck/${id}/draw/?count=${NUM_CARDS}`
  );
  console.log("card retrieved =", cardInfo.data.cards[0]);

  return [cardInfo.data.cards[0]];
}

// function displayCard(card) {
//   const $cardParagraph = $("<p>").text(`The value of the card is ${cardInfo[0].value} and the suit is ${cardInfo[0].suit}.`);
//   $cardArea.append($cardParagraph);
// }

/** shuffle a deck of cards and return the deck_id (string) */
async function shuffleCards() {
  const shuffled = await axios.get(
    `${BASE_URL}/api/deck/new/shuffle/?deck_count=1`,
  );
  return shuffled.data.deck_id;
}

$getCardButton.on("submit", getOneCardAndDisplay());

begin();