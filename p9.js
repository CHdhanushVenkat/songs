const songs = ['aradhya', 'hukum', 'Na roja nuvve']

songs.forEach(song =>{
    const btn = document.createElement('button')
    btn.classList.add("btn")
    

    btn.innerText = song;
    isClicked = false;
    btn.addEventListener('click', ()=>{
        
        
        // document.getElementById(song).pause()
        if(isClicked){
            stopSong();
            document.getElementById(song).pause();
            isClicked = false;
        }
        else{
            document.getElementById(song).play();
            isClicked = true;
        }
    })
    

    document.getElementById('buttons').appendChild(btn)
})

function stopSong(){
    songs.forEach(song =>{
        const sound = document.getElementById(song)

        sound.pause()
    })
}

