function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
  
var randomNr = getRandomInt(6);

document.querySelectorAll(".profile").forEach(value => {
    value.style.borderRadius = "50%";
})