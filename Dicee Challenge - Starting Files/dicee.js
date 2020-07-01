// window.onload = function () {
//     refresh();
// }

document.querySelector("#btn-play").addEventListener("click", function () {
    refresh();
});

function refresh() {
    var p1 = playDice();
    var p2 = playDice();
    document.querySelector(".img1").setAttribute("src", "images/dice" + p1 + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + p2 + ".png");
    if (p1 > p2) {
        document.querySelector("h1").textContent = "⛳Player 1 wins";
    } else if (p1 < p2) {
        document.querySelector("h1").textContent = "Player 2 wins⛳";
    } else {
        document.querySelector("h1").textContent = "👀Draw";
    }
}

function playDice() {
    return (Math.floor(Math.random() * 6) + 1);
}