"use strict";

const NUM_CARDS = 1;
const BASE_URL = "https://deckofcardsapi.com";

const $cardArea = $("#cardsArea");

/** shuffle a deck, get two cards, and display its suit and value */
async function shuffleDeckAndGetTwoCards() {
  const deckId = await shuffleCards();

  const twoCards = await getTwoCardsFromDeck(deckId);

  for (let card of twoCards) {
    const cardValue = card.value.data.cards[0].value;
    const cardSuit = card.value.data.cards[0].suit;
    const $cardParagraph = $("<p>").text(`The value of the card is ${cardValue} and the suit is ${cardSuit}.`);
    $cardArea.append($cardParagraph);
  }
}

/** shuffle a deck of cards and return the deck_id (string) */
async function shuffleCards() {
  const shuffled = await axios.get(
    `${BASE_URL}/api/deck/new/shuffle/?deck_count=1`,
  );

  return shuffled.data.deck_id;
}

/** get two cards from specified deck id*/
async function getTwoCardsFromDeck(deck_id) {
  const card1 = axios.get(
    `${BASE_URL}/api/deck/${deck_id}/draw/?count=${NUM_CARDS}`,
  );

  const card2 = axios.get(
    `${BASE_URL}/api/deck/${deck_id}/draw/?count=${NUM_CARDS}`,
  );

  return await Promise.allSettled([card1, card2]);
}

shuffleDeckAndGetTwoCards();