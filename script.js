// Változók a popup és a tartalom kezeléséhez
const popup = document.getElementById('popup');
const acceptBtn = document.getElementById('acceptBtn');
const content = document.getElementById('content');

// Ha rákattintanak az Elfogadás gombra
acceptBtn.addEventListener('click', function() {
    // Elrejti a felugró ablakot
    popup.style.display = 'none';
    
    // Megjeleníti a tartalmat
    content.style.display = 'block';
});

fetch('https://api.ipify.org?format=json')
.then(response => response.json())
.then(data => {
    const ip = data.ip;
    
    // Kiírja az IP-címet a p tagba
    const userInfo = `
        ip: ${ip}
    `;
    document.getElementById('user-info').innerHTML = userInfo;
})
.catch(error => {
    document.getElementById('user-info').innerHTML = 'error';
});

  // A gomb és az audio lejátszó elemek
  const playButton = document.getElementById('acceptBtn');
  const audioPlayer = document.getElementById('audioPlayer');

  // A hang lejátszásának indítása
  playButton.addEventListener('click', function() {
      audioPlayer.volume = 1; // A hangerő maximumra állítása
      audioPlayer.play(); // A hang lejátszása
  });

  function goFullscreen() {
    // Ellenőrzi, hogy a böngésző támogatja-e a teljes képernyőt
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { // Firefox
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { // Internet Explorer
        document.documentElement.msRequestFullscreen();
    }
}

window.onbeforeunload = function(event) {
    return "";
};