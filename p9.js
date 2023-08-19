const songs = ['aradhya', 'hukum', 'Na roja nuvve']

songs.forEach(song =>{
    const btn = document.createElement('button')
    btn.classList.add("btn")
    

    btn.innerText = song
    btn.addEventListener('click', ()=>{
        stopSong()

        document.getElementById(song).play()
        // document.getElementById(song).pause()

    })
    

    document.getElementById('buttons').appendChild(btn)
})

function stopSong(){
    songs.forEach(song =>{
        const sound = document.getElementById(song)

        sound.pause()
        sound.currentTime = 0;
    })
}

