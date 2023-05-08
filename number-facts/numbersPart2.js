"use strict";

const MIN_NUM = 1;
const MAX_NUM = 10;

const BASE_URL = "http://numbersapi.com";

const $factArea = $("#factArea");

/** display the gotten facts */
async function getAndDisplaySomeFacts() {
  const allFacts = await getSomeFacts();

  for (let key in allFacts) {
    const $factParagraph = $("<p>").text(allFacts[key]);
    $factArea.append($factParagraph);
  }
}

/** get SOME facts */
async function getSomeFacts() {

  const allFacts = await axios.get(
    `${BASE_URL}/${MIN_NUM}..${MAX_NUM}?json`,
  );
  return await allFacts.data;
}

getAndDisplaySomeFacts();