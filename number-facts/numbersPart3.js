"use strict";

const FAV_NUMBER = 2;
const BASE_URL = "http://numbersapi.com";

const $factArea = $("#factArea");

async function getAndDisplayFourFacts() {
  const allFacts = await getFourFacts();

  console.log(allFacts)

  for (let fact of allFacts) {
    const $factParagraph = $("<p>").text(fact.value.data.text);
    $factArea.append($factParagraph);
  }
}

async function getFourFacts() {

  const fact1 = axios.get(
    `${BASE_URL}/${FAV_NUMBER}?json`,
  );
  const fact2 = axios.get(
    `${BASE_URL}/${FAV_NUMBER}?json`,
  );
  const fact3 = axios.get(
    `${BASE_URL}/${FAV_NUMBER}?json`,
  );
  const fact4 = axios.get(
    `${BASE_URL}/${FAV_NUMBER}?json`,
  );

  return await Promise.allSettled([fact1, fact2, fact3, fact4]);

}

getAndDisplayFourFacts();