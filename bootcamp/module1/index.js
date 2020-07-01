// console.log('caralho');
// document.querySelectorAll(".fodase").innerHTML = "Hello World!";
// var divs = document.getElementsByClassName('fodase');
// var divs = document.querySelectorAll("div");
// [].forEach.call(divs, function (div) {
//     div.innerHTML = 'fodase';
// });

// const numbers = [1,2,3,4,5];
// const doubled = numbers.map(n => n * 2);
// console.log(doubled);

function BellBoy(name, age, hasWorkPermit, languages){
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    moveSuitcase: function() {
        alert('May I take your suitcase?');
        pickUpSuitcase();
        moveBy();
    }
}

var bellBoy = new BellBoy('Gui', 29, true, ['French', 'English']);

document.querySelectorAll('div').forEach(i => i.innerHTML = 'fodase2');


