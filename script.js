let numberOfbuttons = document.querySelectorAll(".drum").length;
for(let i=0; i<numberOfbuttons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        //play sound
        let buttonInnerHtml = this.innerHTML;

        playsound(buttonInnerHtml);
        //button animation

        buttonAnimation(buttonInnerHtml);
    });
}

document.addEventListener("keypress",function(event){
    //play sound
    playsound(event.key);

    //button animation
    buttonAnimation(event.key);
});

function playsound(key){
    switch (key){
        case "w": //audio play
            let tom1 = new Audio("../drum-set-123-123/audio/Assets_sounds_tom-1.mp3");
            tom1.play();
            break;
        case "a": //audio play
            let tom2 = new Audio("../drum-set-123/audio/Assets_sounds_tom-2.mp3");
            tom2.play();
            break;
        case "s": //audio play
            let tom3 = new Audio("../drum-set-123/audio/Assets_sounds_tom-3.mp3");
            tom3.play();
            break;
        case "d": //audio play
            let tom4 = new Audio("../drum-set-123/audio/Assets_sounds_tom-4.mp3");
            tom4.play();
            break;
        case "j": //audio play
            let snare = new Audio("../drum-set-123/audio/Assets_sounds_snare.mp3");
            snare.play();
            break;
        case "k": //audio play
            let crash = new Audio("../drum-set-123/audio/Assets_sounds_crash.mp3");
            crash.play();
            break;
        case "l": //audio play
            let kick = new Audio("../drum-set-123/audio/Assets_sounds_kick-bass.mp3");
            kick.play();
            break;
            default:
      console.log(key);
    }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}