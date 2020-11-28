// kinda junk but it works lmao
const debug = true;


const musicElement = $('#music');
const songNameElement = $('#rainbow');
const songNumber = Math.floor(Math.random() * 6);
const songs = [
    {"name": "glaive - astrid"},
    {"name": "brakence - gotchu"},
    {"name": "aries - fool's gold"},
    {"name": "kurtains - upside down"},
    {"name": "osquinn - oblivion"},
    {"name": "brakence - loveslong//slacker"}
    {"name": "glaive - trouble in paradise"}
]

songNameElement.text(songs[songNumber].name);
musicElement.html(`<audio loop id="audio"><source src="assets/music/${songNumber}.mp3" type="audio/mpeg"></audio>`);



let pauseState = true;

$(".playback").click((e) => {
    const song = $("#audio");
    const control = $(".playback");

    if (pauseState) {
        song.trigger('play');
        control.text("(pause)");
        pauseState = false;
    } else {
        song.trigger('pause');
        control.text("(play)");    
        pauseState = true;
    }
});




// disable inspect element, hahahahah deprecated shit woo
// ignore the fact im using jquery above and then vanilla here :D


if(!debug) {
    document.onkeydown = (e) => {
        if(e.keyCode == 123) return false;
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false;
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) return false;
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) return false;
        if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false;
    } 
}


document.addEventListener("visibilitychange", () => {
    if (document.visibilityState !== "visible") {
        document.title = "come back :("
    } else {
        document.title = "brycen.xyz"
    }
})
