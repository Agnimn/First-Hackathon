const songs = document.querySelectorAll('.song');
const audioPlayer =document.getElementById('audio-player');
const currentSong = document.querySelector('.current-song');

songs.forEach(song =>{
    song.addEventListener('click', () => {
        const src = song.getAttribute('data-src');
        const title = song.querySelector('.title').innerText;
        const artist = song.querySelector('.artist').innerText;

        if (audioPlayer.src !== location.origin + '/' + src){
            audioPlayer.src = src;

            audioPlayer.play()
                .then(() => {
                    console.log(`Playing: ${title} - ${artist}`);
                })
                .catch(error => {
                    console.error('Error playing audio:',error);
                });

                currentSong.innerText = `${title} - ${artist}`;
        }
    });
});