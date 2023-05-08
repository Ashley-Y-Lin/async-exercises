"use strict";

const FAV_NUMBER = 2;
const BASE_URL = "http://numbersapi.com";

const $factArea = $("#factArea");

/** display the one fact */
async function getAndDisplayOneFacts() {
  const fact = await getOneFact();

  const $factParagraph = $("<p>").text(fact);
  $factArea.append($factParagraph);
}

/** get one fact */
async function getOneFact() {
  const fact1 = await axios.get(
    `${BASE_URL}/${FAV_NUMBER}?json`,
  );
  console.log("testing", fact1.data.text);
  return fact1.data.text;
}

getAndDisplayOneFacts();