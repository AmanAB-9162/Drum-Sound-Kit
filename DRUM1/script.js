var numberOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makesound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });
}
document.addEventListener("keypress", function (event) {
    makesound(event.key);
    buttonAnimation(event.key);
});

function makesound(key) {
    switch (key) {
        case "a":
            var tom1 = new Audio("sound4/tom-1.mp3");
            tom1.play();
            break;

        case "b":
            var tom2 = new Audio("sound4/tom-2.mp3");
            tom2.play();
            break;

        case "c":
            var tom3 = new Audio("sound4/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sound4/tom-4.mp3");
            tom4.play();
            break;

        case "e":
            var snare = new Audio("sound4/snare.mp3");
            snare.play();
            break;

        case "f":
            var crash = new Audio("sound4/crash.mp3");
            crash.play();
            break;

        case "g":
            var kick = new Audio("sound4/kick-bass.mp3");
            kick.play();
            break;

            case "A":
            var tom1 = new Audio("sound4/tom-1.mp3");
            tom1.play();
            break;

        case "B":
            var tom2 = new Audio("sound4/tom-2.mp3");
            tom2.play();
            break;

        case "C":
            var tom3 = new Audio("sound4/tom-3.mp3");
            tom3.play();
            break;

        case "D":
            var tom4 = new Audio("sound4/tom-4.mp3");
            tom4.play();
            break;

        case "E":
            var snare = new Audio("sound4/snare.mp3");
            snare.play();
            break;

        case "F":
            var crash = new Audio("sound4/crash.mp3");
            crash.play();
            break;

        case "G":
            var kick = new Audio("sound4/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);

}
