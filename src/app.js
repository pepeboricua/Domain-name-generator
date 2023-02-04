/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronouns = ["the", "our", "their"];
  let adjs = ["great", "big", "small"];
  let nouns = ["jogger", "racoon", "pilot"];
  let tlds = [".com", ".net", ".gov", ".us", ".app"];
  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let tld of tlds) {
          console.log(`${pronoun}${adj}${noun}${tld}`);
        }
      }
    }
  }
};
