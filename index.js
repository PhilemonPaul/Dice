var rand1 = Math.floor(Math.random() * 6) + 1;
var rand2 = Math.floor(Math.random() * 6) + 1;
var imageurl = [
  "/images/dice1.png",
  "/images/dice2.png",
  "/images/dice3.png",
  "/images/dice4.png",
  "/images/dice5.png",
  "/images/dice6.png",
];
console.log(rand1);
console.log(rand2);

document.querySelector(".img1").setAttribute("src", imageurl[rand1 - 1]);
document.querySelector(".img2").setAttribute("src", imageurl[rand2 - 1]);

if (rand1 > rand2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (rand1 < rand2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
