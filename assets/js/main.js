// kinda junk but it works lmao

const musicElement = document.getElementById('music');
const songNumber = Math.floor(Math.random() * 6);

musicElement.innerHTML = `<audio autoplay loop><source src="assets/music/${songNumber}.mp3" type="audio/mpeg"></audio>`;


// disable inspect element, hahahahah deprecated shit woo
document.onkeydown = (e) => {
    if(e.keyCode == 123) return false;
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false;
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) return false;
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) return false;
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false;
} 

document.addEventListener("visibilitychange", () => {
    if (document.visibilityState !== "visible") {
        document.title = "come back :("
    } else {
        document.title = "brycen.xyz"
    }
})