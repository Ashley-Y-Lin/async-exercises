"use strict";

const NUMBER = 1;
const DRAW_CARD_URL = "https://deckofcardsapi.com/api/deck/new/draw";

const $cardArea = $("#cardsArea");

/** display the one fact */
async function getAndDisplayOneCard() {
  const card = await getOneCard();

  const $factParagraph = $("<p>").text(fact);
  $factArea.append($factParagraph);
}

/** get one fact */
async function getOneCard() {
  const card = await axios.get(
    `${DRAW_CARD_URL}/${FAV_NUMBER}?json`,
  );
  console.log("testing", fact1.data.text);
  return fact1.data.text;
}

getAndDisplayOneCard();