const songs = document.querySelectorAll('.song');
const audioPlayer = document.getElementById('audio-player');
const currentSong = document.querySelector('.current-song');

songs.forEach(song => {
    song.addEventListener('click', () => {
        const src = song.getAttribute('data-src');
        const title = song.querySelector('.title').innerText;
        const artist = song.querySelector('.artist').innerText;

        // If the new song is different from the currently playing one
        if (audioPlayer.src !== location.origin + '/' + src) {
            // Update the audio player's source
            audioPlayer.src = src;

            // Play the new song
            audioPlayer.play()
                .then(() => {
                    console.log(`Playing: ${title} - ${artist}`);
                })
                .catch(error => {
                    console.error('Error playing audio:', error);
                });

            // Update the current song display
            currentSong.innerText = `${title} - ${artist}`;
        }
    });
});


