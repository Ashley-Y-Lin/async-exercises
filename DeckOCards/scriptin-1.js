"use strict";

const NUM_CARDS = 1;
const BASE_URL = "https://deckofcardsapi.com";

const $cardArea = $("#cardsArea");

/** get one card and display its suit and value */
async function getAndDisplayOneCard() {
  const cardInfo = await getOneCard();
  console.log("cardInfo", cardInfo)

  const $cardParagraph = $("<p>").text(`The value of the card is ${cardInfo[0].value} and the suit is ${cardInfo[0].suit}.`);
  $cardArea.append($cardParagraph);
}

/** get a random card */
async function getOneCard() {
  const cardInfo = await axios.get(
    `${BASE_URL}/api/deck/new/draw/?count=${NUM_CARDS}`,
  );

  return [cardInfo.data.cards[0]];
}

getAndDisplayOneCard();