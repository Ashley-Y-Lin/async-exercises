"use strict";

const FAV_NUMBER = 2;
const BASE_URL = "http://numbersapi.com";

const $factArea = $("#factArea");

//TODO: use Promise.all or Promise.allSettled

async function getAndDisplayFourFacts() {
  const allFacts = await getFourFacts();

  console.log(allFacts)

  for (let fact of allFacts) {
    const $factParagraph = $("<p>").text(fact);
    $factArea.append($factParagraph);
  }
}

async function getFourFacts() {

  const fact1 = await axios.get(
    `${BASE_URL}/${FAV_NUMBER}?json`,
  );
  const fact2 = await axios.get(
    `${BASE_URL}/${FAV_NUMBER}?json`,
  );
  const fact3 = await axios.get(
    `${BASE_URL}/${FAV_NUMBER}?json`,
  );
  const fact4 = await axios.get(
    `${BASE_URL}/${FAV_NUMBER}?json`,
  );

  return await Promise.all([fact1.data.text, fact2.data.text, fact3.data.text, fact4.data.text]);

}

getAndDisplayFourFacts();