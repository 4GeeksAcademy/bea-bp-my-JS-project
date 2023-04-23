/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console! ");
};

let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["horse", "cat", "racoon", "bad person", "alien"];
  let action = [
    "eat my",
    "stole my",
    "threw my",
    "destroy my",
    "ruin",
    "wreck my"
  ];
  let possetion = ["homework", "toe", "project", "assignment"];
  let where = ["in my garden", "in my driveway", "in my house", "on space"];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subjIndx = Math.floor(Math.random() * subject.length);
  let actIndx = Math.floor(Math.random() * action.length);
  let possetionIndx = Math.floor(Math.random() * possetion.length);
  let whereIndx = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndx] +
    " " +
    subject[subjIndx] +
    " " +
    action[actIndx] +
    " " +
    possetion[possetionIndx] +
    " " +
    where[whereIndx]
  );
};
