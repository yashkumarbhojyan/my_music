const music =document.querySelector('audio');
const play = document.getElementById("play");

 let isPlaying =false;

const playMusic =()=>{
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");

   
};

const pauseMusic =()=>{
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");

   
};

play.addEventListener("click",()=>{
    if(isPlaying){
        pauseMusic();
    }
else{
    playMusic();
}
    

});







const title =document.getElementById("title");
const artist =document.getElementById("artist");
const prev =document.getElementById("prev");
const next =document.getElementById("next");
const progress =document.getElementById("progress");
let total_duration =document.getElementById("duration");
let total_currentTime =document.getElementById("current_time");
let progress_div=document.getElementById("progress_div");

const songs = [
    {
        name: "01 - Duniya Di-tha Tha Tha - Arun Bakshi & Chorus @ Fmw11.com.mp3",
        title:"lotus lane",
        artist:"the loyalist",
    },
    {
        name: "01 Dekho Zara Dekho.mp3",
        title:"dilbar",
        artist:"aurora",

    },
    {
        name: "Dil tute gaya.mp3",
        title:"walking",
        artist:"gorkhali",

    },
    {
        name: "10 On 10 - Pyaar Impossible 128 Kbps.mp3",
        title:"lotus lane",
        artist:"unknown",
    },
    {
        name: "90-10 - Mani Longia.mp3",
        title:"dilbar",
        artist:"auror",

    },
    {
        name: "Brown-Munde(PaglaSongs).mp3",
        title:"Brown-Munde",
        artist:"AP-DHILLON",

    },
    {
        name: "Babam Bam - Paradox.mp3",
        title:"Babam bam",
        artist:"paradox",

    },
];
const loadsong = (songs) => {
    title.textContent =songs.title;
    artist.textContent =songs.artist;
    music.src = songs.name;

};
//loadsong(songs[2]);


songindex =0;

const nextsong =()=>{
    songindex =(songindex + 1) % songs.length;
    loadsong(songs[songindex]);
}

next.addEventListener("click",()=>{
nextsong();
if(isPlaying){
music.play();
}
else{
    music.pause();
}
})

const prevsong =()=>{
    songindex =(songindex - 1 + songs.length) % songs.length;
    loadsong(songs[songindex]);
}


prev.addEventListener("click",()=>{
    prevsong();
    if(isPlaying){
        music.play();
        }
        else{
            music.pause();
        }
})

music.addEventListener("timeupdate", (event)=>{
  const { currentTime, duration } = event.srcElement;

  let progress_time = (currentTime / duration) * 100;

  progress.style.width =progress_time +"%" ;
  
  // music duration update

let min_duration =Math.floor(duration / 60);
let sec_duration =Math.floor(duration % 60);
let tot_duration = min_duration + ":" + sec_duration;
if(duration){
total_duration.textContent = tot_duration;
}

// current duration time
let minn_currentTime=Math.floor(currentTime / 60);
let secc_currentTime=Math.floor(currentTime % 60);
let tot_currentTime=minn_currentTime+":" + secc_currentTime;

total_currentTime.textContent = tot_currentTime;
});


//progress onclick functionally
progress_div.addEventListener("click",(event)=>{
    const{duration} =music;

    let move_progress =(event.offsetX /event.srcElement.clientWidth)*duration;

    music.currentTime = move_progress;
});


// if song end then play next song automatically
music.addEventListener("ended",()=>{
    nextsong();
    

    music.play();
   

   
});




