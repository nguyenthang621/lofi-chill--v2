const $=document.querySelector.bind(document)
const $$=document.querySelectorAll.bind(document)

const btnPlay=$(".btn__play")
const btnPause=$(".btn__pause")
const audioMain=$("#audio-main")
const btnPre=$(".btn__pre")
const btnNext=$(".btn__next")
const html=$("html")
const btnScreen=$(".navbar__control__btnScreen")
const elementHide=$$(".choiceHide")
const btnTurnOn=$(".navbar__control__btnLight")
const bi=$(".bi")
const boxItemEffect=$(".effect__noises__container")
const btnMixMore=$(".btn__mix__more")
const mixContainer=$(".effect__noises__container")
const mixPanel=$(".mix__panel")
const items = $$(".item")   
const btnModes=$$(".btnBox")
const imgTop=$(".img-top")
const imgBottom=$(".img-bottom")
const iconModes=$$(".fa-solid")
const boxPlayList=$(".box__playlist")
const boxChangeSet=$(".box__change__set")
const boxFocusMode=$(".box__focus__mode")
const notActives=$$(".not-active")
const allBox=$$(".box")
const btnRain=$(".btn__rain")
const modePomodoro=$(".mode__pomodoro")
const containerPomodoro=$(".container__pomodoro")
const boxSettingTime=$(".setting__time")
const boxPomodoro=$(".pomodoro")
const btnStop=$("#stop")
const btnContinue=$("#continue")
const btnDone=$("#btnDone")
const btnAutoStartPomodoro=$(".btn__autoStartPomodoro")
const btnAutoStartBreaks=$(".btn__autoStartBreaks")
const btnPlayAlarm=$(".btn__play__alarm")
const btnPlayAlarmSpecial=$(".btn__play__alarm__special")
const Break=$(".break")
const btnNextTimer=$(".next__timer")
const audioAlarm=$("#audio__alarm")
const containerAlert=$(".container__alert__change__set")
const navChild=$$(".nav__child")
const navbarPaint=$(".navbar")
const boxNote=$(".box__note")

var currentTime=0;
var myTime;
// console.log(btnModes);
import toast from './Notification/handleToast.js'
import dragElement from './boxNote/dragElement.js'

const main={
    currentIndex:0,
    isPlayed:false,
    isNight:false,
    isRain:false,
    isOpening:false,
    isChill:false,
    isSleepy:false,
    isJazzy:false,   
    isSad:false,                                              
    isOpeningMixPanel:false,
    isOpeningBoxPlayList:false,
    isOpeningBoxEffectLove:false,
    isOpeningBoxChangeSet:false,
    isOpeningBoxFocusMode:false,

    isScreenPaint:false,
// config set:
    isNormal:true,
    isChillHome:false,
    isDesk:false,
    isCoffee1:false,
    isCoffee2:false,
    isChristmas:false,
    isCoding:false,
    isShop:false,
    isCoffee:false,
    isWorkNight:false,
    isBookOnBed:false,
    isBookOnChair:false,
    isBookCoffee1:false,
    isBookCoffee2:false,
// config timer:
    isRunning:true,
    isRunTimer:true,
    isRunBreak:false,
    isAutoStartPomodoro:true,
    isAutoStartBreak:true,
    isPlayAlarm:true,
    isPlayAlarmSpecial:false,
//songs:
    songs:[
        {
            
            id:"0",
            name:"chill1",
            type:"chill",
            path:"./assets/mainMusic/chill/chill1.mp3"
        },
        {
            id:"1",
            name:"chill3",
            type:"chill",
            path:"./assets/mainMusic/chill/chill3.mp3"
        },
        {
            id:"2",
            name:"chill4",
            type:"chill",
            path:"./assets/mainMusic/chill/chill4.mp3"
        },
        {
            id:"3",
            name:"chill5",
            type:"chill",
            path:"./assets/mainMusic/chill/chill5.mp3"
        },
        {
            id:"4",
            name:"chill6",
            type:"chill",
            path:"./assets/mainMusic/chill/chill6.mp3"
        },
        {
            id:"5",
            name:"chill7",
            type:"chill",
            path:"./assets/mainMusic/chill/chill7.mp3"
        },
        {
            id:"6",
            name:"jazz1",
            type:"jazzy",
            path:"./assets/mainMusic/jazz/jazz1.mp3"
        },
        {
            id:"7",
            name:"jazz2",
            type:"jazzy",
            path:"./assets/mainMusic/jazz/jazz2.mp3"
        },
        {
            id:"8",
            name:"jazz3",
            type:"jazzy",
            path:"./assets/mainMusic/jazz/jazz3.mp3"
        },
        {
            id:"9",
            name:"jazz4",
            type:"jazzy",
            path:"./assets/mainMusic/jazz/jazz4.mp3"
        },
        {
            id:"10",
            name:"sleepy1",
            type:"sleepy",
            path:"./assets/mainMusic/sleepy/sleepy1.mp3"
        },
        {
            id:"11",
            name:"sleepy2",
            type:"sleepy",
            path:"./assets/mainMusic/sleepy/sleepy2.mp3"
        },
        {
            id:"12",
            name:"sleepy3",
            type:"sleepy",
            path:"./assets/mainMusic/sleepy/sleepy3.mp3"
        },
        {
            id:"13",
            name:"sleepy4",
            type:"sleepy",
            path:"./assets/mainMusic/sleepy/sleepy4.mp3"
        },
        {
            id:"14",
            name:"sleepy5",
            type:"sleepy",
            path:"./assets/mainMusic/sleepy/sleepy5.mp3"
        },
        {
            id:"15",
            name:"talkingSad",
            type:"sadSong",
            path:"./assets/mainMusic/song sad/talkingSad1.mp3"
        },
        {
            id:"16",
            name:"talkingSad",
            type:"sadSong",
            path:"./assets/mainMusic/song sad/talkingSad2.mp3"
        },
        {
            
            id:"17",
            name:"talkingSad",
            type:"sadSong",
            path:"./assets/mainMusic/song sad/talkingSad3.mp3"
        },
        {
            
            id:"18",
            name:"song1",
            type:"sadSong",
            path:"./assets/mainMusic/song sad/song1.mp3"
        },
        {
            
            id:"19", 
            name:"song2",
            type:"sadSong",
            path:"./assets/mainMusic/song sad/song2.mp3"
        },
        {
            
            id:"20", 
            name:"song3",
            type:"sadSong",
            path:"./assets/mainMusic/song sad/song3.mp3"
        },
        {
            
            id:"21",
            name:"song4",
            type:"sadSong",
            path:"./assets/mainMusic/song sad/song4.mp3"
        },
        {
            
            id:"22",
            name:"lastSong",
            type:"sadSong",
            path:"./assets/mainMusic/song sad/lastSong.mp3"
        },

        

    ],
// effectSongs:
    effectSongs:[
        {
            id:1,
            name:"Rain",
            path:"./assets/effect/rain_forest.mp3",
            iconThumb:"./assets/iconThumb/rain.svg"
        },
        {
            id:2,
            name:"City traffic",
            path:"./assets/effect/city_traffic.mp3",
            iconThumb:"./assets/iconThumb/traffic.svg"
        },
        {
            id:3,
            name:"Camp Fire",
            path:"./assets/effect/campfire.mp3",
            iconThumb:"./assets/iconThumb/fire1.svg"

        },
        {
            id:4,
            name:"Forest night",
            path:"./assets/effect/forest_night.mp3",
            iconThumb:"./assets/iconThumb/fan.svg"

        },

        {
            id:5,
            name:"Thunder",
            path:"./assets/effect/rain-and-thunder-storm.mp3",
            iconThumb:"./assets/iconThumb/fan.svg"

        },
        {
            id:6,
            name:"Ocean",
            path:"./assets/effect/Ocean.mp3",
            iconThumb:"./assets/iconThumb/fan.svg"

        },
        {
            id:7,
            name:"Birds",
            path:"./assets/effect/birds.mp3",
            iconThumb:"./assets/iconThumb/fire1.svg"

        },
  
        {
            id:8,
            name:"People talk",
            path:"./assets/effect/people_talk_inside.mp3",
            iconThumb:"./assets/iconThumb/fan.svg"

        },
        {
            id:9,
            name:"Keyboard",
            path:"./assets/effect/keyboard.mp3",
            iconThumb:"./assets/iconThumb/fan.svg"

        },
        {
            id:10,
            name:"Car traffic",
            path:"./assets/effect/car-traffic.mp3",
            iconThumb:"./assets/iconThumb/fan.svg"

        },
        {
            id:11,
            name:"Passing car",
            path:"./assets/effect/passing car.mp3",
            iconThumb:"./assets/iconThumb/fan.svg"

        },
        {
            id:12,
            name:"Rain on umbrella",
            path:"./assets/effect/rain on umbrella.mp3",
            iconThumb:"./assets/iconThumb/fan.svg"

        },
        {
            id:13,
            name:"River",
            path:"./assets/effect/river.mp3",
            iconThumb:"./assets/iconThumb/fan.svg"

        },
        {
            id:14,
            name:"Snow",
            path:"./assets/effect/snow.mp3",
            iconThumb:"./assets/iconThumb/fan.svg"

        },


    ],
//img set:
    imgSets:[
        {
            effects:4,
            name:"normal",
            type:"normal",
            path:"./assets/backgroundMain/imgSet/normal.PNG",
        },
        {
            effects:4,
            name:"bookCoffee1",
            type:"bookCoffee1",
            path:"./assets/backgroundMain/imgSet/bookCoffee1.PNG",
        },
        {
            effects:4,
            name:"bookCoffee2",
            type:"bookCoffee2",
            path:"./assets/backgroundMain/imgSet/bookCoffee2.PNG",
        },
        {
            effects:4,
            name:"chillHome",
            type:"chillHome",
            path:"./assets/backgroundMain/imgSet/chillHome.PNG",
        },
        {
            effects:4,
            name:"christmas",
            type:"christmas",
            path:"./assets/backgroundMain/imgSet/Christmas.PNG",
        },
        {
            effects:4,
            name:"coffee1",
            type:"coffee1",
            path:"./assets/backgroundMain/imgSet/coffee1.PNG",
        },
        {
            effects:4,
            name:"coffee2",
            type:"coffee2",
            path:"./assets/backgroundMain/imgSet/coffee2.PNG",
        },
        {
            effects:3,
            name:"desk",
            type:"desk",
            path:"./assets/backgroundMain/imgSet/desk.PNG",
        },
        {
            effects:2,
            name:"coding",
            type:"coding",
            path:"./assets/backgroundMain/imgSet/coding.PNG",
        },
        {
            effects:2,
            name:"shop",
            type:"shop",
            path:"./assets/backgroundMain/imgSet/shop.PNG",
        },
        {
            effects:2,
            name:"coffee",
            type:"coffee",
            path:"./assets/backgroundMain/imgSet/coffee.PNG",
        },
        {
            effects:1,
            name:"workNight",
            type:"workNight",
            path:"./assets/backgroundMain/imgSet/workNight.PNG",
        },
        {
            effects:1,
            name:"bookOnBed",
            type:"bookOnBed",
            path:"./assets/backgroundMain/imgSet/bookOnBed.PNG",
        },
        {
            effects:1,
            name:"bookOnChair",
            type:"bookOnChair",
            path:"./assets/backgroundMain/imgSet/bookOnChair.PNG",
        },
  
    ],
// video background:
    normal:[
        {
            name:"day",
            id:"day-video",
            path:"./assets/backgroundMain/normal/day.mp4",
        },
        {
            name:"night",
            id:"night-video",
            path:"./assets/backgroundMain/normal/night.mp4",
        },
        {
            name:"dayRain",
            id:"day-rain-video",
            path:"./assets/backgroundMain/normal/dayRain.mp4",
        },
        {
            name:"nightRain",
            id:"night-rain-video",
            path:"./assets/backgroundMain/normal/nightRain.mp4",
        }
    ],
// chill home:
    chillHome:[
        {
            name:"day",
            id:"day-video",
            path:"./assets/backgroundMain/chillHome/chill-2-day.mp4",
        },
        {
            name:"night",
            id:"night-video",
            path:"./assets/backgroundMain/chillHome/chill-2-night.mp4",
        },
        {
            name:"dayRain",
            id:"day-rain-video",
            path:"./assets/backgroundMain/chillHome/chill-2-rainy-day.mp4",
        },
        {
            name:"nightRain",
            id:"night-rain-video",
            path:"./assets/backgroundMain/chillHome/chill-2-rainy-night.mp4",
        }
    ],
// christmas
    christmas:[
        {
            name:"day",
            id:"day-video",
            path:"./assets/backgroundMain/christmas/day.mp4",
        },
        {
            name:"night",
            id:"night-video",
            path:"./assets/backgroundMain/christmas/night.mp4",
        },
        {
            name:"dayRain",
            id:"day-rain-video",
            path:"./assets/backgroundMain/christmas/dayRain.mp4",
        },
        {
            name:"nightRain",
            id:"night-rain-video",
            path:"./assets/backgroundMain/christmas/nightRain.mp4",
        }
    ],

//coding: 
    coding:[
        {
            name:"day",
            id:"day-video",
            path:"./assets/backgroundMain/coding/day.mp4",
        },
        {
            name:"night",
            id:"night-rain-video",
            path:"./assets/backgroundMain/coding/night.mp4",
        }
        
    ],


// shop: 
    shop:[
        {
            name:"night",
            id:"night-video",
            path:"./assets/backgroundMain/shop/shop no rain 31s.mp4",
        },
        {
            name:"nightRain",
            id:"night-rain-video",
            path:"./assets/backgroundMain/shop/shop rain 31s.mp4",
        }
    ],
// coffee: 
    coffee:[
        {
            name:"night",
            id:"night-video",
            path:"./assets/backgroundMain/coffee/coffee.mp4",
        },
        {
            name:"nightRain",
            id:"night-rain-video",
            path:"./assets/backgroundMain/coffee/coffee rain.mp4",
        } 
    ],

// work night:
    workNight:[
        {
            name:"workNight",
            id:"night-video",
            path:"./assets/backgroundMain/work night/work night.mp4",
        } ,
        {
            name:"workNight",
            id:"night-rain-video",
            path:"./assets/backgroundMain/work night/work night.mp4",
        } ,
    ],
// bookOnBed night:
    bookOnBed:[
        {
            name:"bookOnBed",
            id:"night-video",
            path:"./assets/backgroundMain/bookOnBed/bookOnBed.mp4",
        } ,
        {
            name:"bookOnBed",
            id:"night-rain-video",
            path:"./assets/backgroundMain/bookOnBed/bookOnBed.mp4",
        } ,
    ],
// bookOnChair night:
    bookOnChair:[
        {
            name:"bookOnChair",
            id:"night-video",
            path:"./assets/backgroundMain/bookOnChair/bookOnChair.mp4",
        } ,
        {
            name:"bookOnChair",
            id:"night-rain-video",
            path:"./assets/backgroundMain/bookOnChair/bookOnChair.mp4",
        } ,
    ],
// coffee1:
    coffee1:[
    {
        name:"day",
        id:"day-video",
        path:"./assets/backgroundMain/coffee1/cafe-1-day.mp4",
    },
    {
        name:"night",
        id:"night-video",
        path:"./assets/backgroundMain/coffee1/cafe-1-night.mp4",
    },
    {
        name:"dayRain",
        id:"day-rain-video",
        path:"./assets/backgroundMain/coffee1/cafe-1-rainy-day.mp4",
    },
    {
        name:"nightRain",
        id:"night-rain-video",
        path:"./assets/backgroundMain/coffee1/cafe-1-rainy-night.mp4",
    }
],
    coffee2:[
    {
        name:"day",
        id:"day-video",
        path:"./assets/backgroundMain/coffee2/cafe-2-day.mp4",
    },
    {
        name:"night",
        id:"night-video",
        path:"./assets/backgroundMain/coffee2/cafe-2-night.mp4",
    },
    {
        name:"dayRain",
        id:"day-rain-video",
        path:"./assets/backgroundMain/coffee2/cafe-2-rainy-day.mp4",
    },
    {
        name:"nightRain",
        id:"night-rain-video",
        path:"./assets/backgroundMain/coffee2/cafe-2-rainy-night.mp4",
    }
],
    bookCoffee1:[
    {
        name:"day",
        id:"day-video",
        path:"./assets/backgroundMain/bookCoffee1/bookCoffee1-sunny.mp4",
    },
    {
        name:"night",
        id:"night-video",
        path:"./assets/backgroundMain/bookCoffee1/bookCoffee1-night.mp4",
    },
    {
        name:"dayRain",
        id:"day-rain-video",
        path:"./assets/backgroundMain/bookCoffee1/bookCoffee1-rainy-day.mp4",
    },
    {
        name:"nightRain",
        id:"night-rain-video",
        path:"./assets/backgroundMain/bookCoffee1/bookCoffee1-rainy-night.mp4",
    }
],
    bookCoffee2:[
    {
        name:"day",
        id:"day-video",
        path:"./assets/backgroundMain/bookCoffee2/bookCoffee2-sunny.mp4",
    },
    {
        name:"night",
        id:"night-video",
        path:"./assets/backgroundMain/bookCoffee2/bookCoffee2-night.mp4",
    },
    {
        name:"dayRain",
        id:"day-rain-video",
        path:"./assets/backgroundMain/bookCoffee2/bookCoffee2-rainy-day.mp4",
    },
    {
        name:"nightRain",
        id:"night-rain-video",
        path:"./assets/backgroundMain/bookCoffee2/bookCoffee2-rainy-night.mp4",
    }
],
//desk:
    desk:[
    {
        name:"day",
        id:"day-video",
        path:"./assets/backgroundMain/desk/desk-3.mp4",
    },
    {
        name:"night",
        id:"night-video",
        path:"./assets/backgroundMain/desk/desk-2.mp4",
    },
    {
        name:"dayRain",
        id:"day-rain-video",
        path:"./assets/backgroundMain/desk/desk-1.mp4",
    },
    {
        name:"nightRain",
        id:"night-rain-video",
        path:"./assets/backgroundMain/desk/desk-1.mp4",
    }
],


// xu ly cac tuong tac :

    handleEvents: function(){
        main.getUrlMusic()
// click play:


        btnPlay.onclick=function(){
            main.isPlayed=true
            
            audioMain.play()
            main.playActive()
            console.log(main.isPlayed);
        }   

// click pause:
        btnPause.onclick=function(){
            main.isPlayed=false
            audioMain.pause()
            main.playActive()
    }

// click pre:
        btnPre.onclick=function(){
            main.isPlayed=true
            main.currentIndex--;
            if (main.currentIndex<0){
                main.currentIndex=main.songs.length-1
            }
            main.getUrlMusic()
            audioMain.play()
            btnPlay.click()
        }

// click next:
        btnNext.onclick=function(){
            main.isPlayed=true
            main.currentIndex++;
            if (main.currentIndex>main.songs.length-1){
                main.currentIndex=0
            }
            main.getUrlMusic()
            audioMain.play()
            btnPlay.click()
        }

// click screen:
        btnScreen.onclick=function(){
            var isFullScreen = document.fullscreenElement
            if (isFullScreen===null){
                html.requestFullscreen()
                elementHide.forEach(function(e){e.style.display="none"})
                $(".navbar__title").style.display="none"
            }
            else{
                document.exitFullscreen();
                $(".navbar__title").style.display="flex"
            }
        }


// click btn night/day:
        btnTurnOn.onclick=function(){
            main.isNight=!main.isNight
            if (main.isNight==false){
                bi.classList.toggle("slideBi")
                btnTurnOn.style.backgroundColor=`#eea650`
                main.isRain ? main.turnOnRainDay() : main.turnOnDay()   
            }
            if (main.isNight!==false){
                bi.classList.toggle("slideBi")
                btnTurnOn.style.backgroundColor=`rgba(107, 107, 107, 0.2)`
                main.isRain ? main.turnOnRainNight() : main.turnOnNight()   
            }
        }

//=======================
// btn rain :

btnRain.onclick=function(){
    var valueRain= $("[data='0']")
    var audioRain= $("[data-index-number='0']")
    if (!main.isRain){
        main.isRain = !main.isRain
        btnRain.style.borderColor="#eea650"
        $(".icon__rain").style.opacity="1"
        main.turnOnRainDay();
        valueRain.style.background = 'linear-gradient(to right, #f3a952  40%, transparent 40% 100%)'
        audioRain.play()
        audioRain.volume=0.4
        valueRain.value=audioRain.volume*100
        main.isNight ? main.turnOnRainNight() : main.turnOnRainDay();
    }
    else{
        main.isRain = !main.isRain
        audioRain.volume=0
        audioRain.pause()
        valueRain.value=0
        valueRain.style.background = 'linear-gradient(to right, #f3a952  0%, transparent 0% 100%)'
        btnRain.style.borderColor="#fff"
        $(".icon__rain").style.opacity="0"
        main.isNight ? main.turnOnNight() : main.turnOnDay()
    }
}

// change volume bar:
        $$(".volume").forEach(function(e,index){
            e.addEventListener("input",function() {
                var elementAudioActive=e.nextElementSibling;
                    if (e.className=="volume volume__video__main"){
                        audioMain.volume=e.value/100
                    }
                    this.style.background = 'linear-gradient(to right, #f3a952 ' + this.value + '%, transparent ' + this.value + '% 100%)'
                    if (elementAudioActive.className=="effect-audio"){
                        elementAudioActive.volume=e.value/100
                        if (elementAudioActive.volume>0){
                            elementAudioActive.play() 
                        }   
                        if (elementAudioActive.volume==0){
                            elementAudioActive.pause()
                        }
// check night/day to active turn on rain and thumb: (effect rain)
                        if (elementAudioActive.dataset.indexNumber==0 || elementAudioActive.dataset.indexNumber==4){
                            if (elementAudioActive.volume>0 && main.isNight){
                                if(!main.isWorkNight){
                                    main.isRain=true;
                                    main.turnOnRainNight();
                                    elementAudioActive.play()
                                }
                            }
                            if (elementAudioActive.volume>0 && !main.isNight){
                                if(!main.isWorkNight){
                                    main.isRain=true;
                                    main.turnOnRainDay();
                                    elementAudioActive.play()
                                }
                            }
                            if (elementAudioActive.volume==0 && !main.isNight){
                                main.isRain=false;
                                main.turnOnDay()
                                elementAudioActive.pause()
                            }
                            if (elementAudioActive.volume==0 && main.isNight){
                                main.isRain=false;
                                main.turnOnNight()
                                elementAudioActive.pause()
                            }

                        }
// check night/day to active turn on rain: (effect rain)
                        if (elementAudioActive.dataset.indexNumber==3){
                            if (elementAudioActive.volume>0 && !main.isNight){
                                btnTurnOn.click()
                                elementAudioActive.play()
                            }
                            if (elementAudioActive.volume==0 && !main.isNight || elementAudioActive.volume==0 && main.isNight ){
                                 btnTurnOn.click()
                                 elementAudioActive.pause()
                            }
                        }
                    }
         

            })
        })
//==================

// click btn mix more:

        btnMixMore.onclick=function(){
            if (mixContainer.clientHeight>185){
                mixContainer.classList.remove("mixEffectActive")
                mixPanel.style.top="120px"
                btnMixMore.innerHTML="<h3>Mix Mode</h3>"

            }
            else {
                    mixContainer.classList.add("mixEffectActive")
                    mixPanel.style.top="85px"
                btnMixMore.innerHTML="<h3>Normal Mode</h3>"


            }
        }


// click btn mode Active (sleepy, jazz, chill):

        items.forEach(function(item,index){
            item.onclick=function(){
                main.inactive()
                item.querySelector(".item > .fa-solid").classList.add("itemActive")
//btn mode sleepy:
                if (index == 0 && !main.isSleepy) {
                    if (!main.isPlayed){
                        main.isPlayed=!main.isPlayed
                    }
                    main.resetConfigMode()
                    main.isSleepy=true
                    var listSongSleepy=main.songs.filter(function(song){
                        if (song.type=="sleepy"){
                            return song
                        }})
                    var listIndexSleepy=listSongSleepy.map((song)=>{return song.id})
                    main.currentIndex=listIndexSleepy[0]
                    audioMain.src=main.songs[main.currentIndex].path
                    audioMain.play()
                    main.playActive()
                    main.isPlayed=true
                }
//btn mode jazzy:
                if (index == 1 && !main.isJazzy) {
                    if (!main.isPlayed){
                        main.isPlayed=!main.isPlayed
                    }
                    main.resetConfigMode()
                    main.isJazzy=true
                    var listSongJazzy=main.songs.filter(function(song){
                        if (song.type=="jazzy"){
                            return song
                        }})
                        var listIndexJazzy=listSongJazzy.map((song)=>{return song.id})
                        main.currentIndex=listIndexJazzy[0]
                        audioMain.src=main.songs[main.currentIndex].path
                        audioMain.play()
                        main.playActive()
                        main.isPlayed=true
                }
//btn mode chill:
                if (index == 2 && !main.isChill) {
                    main.resetConfigMode()
                    main.isChill=true
                    var listSongChill=main.songs.filter(function(song){
                        if (song.type=="chill"){
                            return song
                        }})
                        var listIndexChill=listSongChill.map((song)=>{return song.id})
                        main.currentIndex=listIndexChill[0]
                        audioMain.src=main.songs[main.currentIndex].path
                        audioMain.play()
                        main.playActive()
                        main.isPlayed=true
                        btnPlay.click()
                }
//btn mode sad:
                if (index == 3 && !main.isSad) {
                    main.resetConfigMode()
                    main.isSad=true
                    var listSongSad=main.songs.filter(function(song){

                        if (song.type=="sadSong"){
                            return song
                        }})
                        var listIndexSad=listSongSad.map((song)=>{return song.id})
                        main.currentIndex=listIndexSad[0]
                        audioMain.src=main.songs[main.currentIndex].path
                        audioMain.play()
                        main.playActive()
                        main.isPlayed=true
                        btnPlay.click()
                }
            }
        })

// click box mode Active :
        var countBoxMore=0;
        btnModes.forEach((btn,index)=>{
            btn.onclick=function(){
                var width = $(".menu").clientWidth
                
                main.inactiveAllBtn()
                const icon=btn.querySelector(".box__child").querySelector("i");
                icon.classList.add("color-icon") 
        // show mix panel
                
                if (index ===0){
                    if(main.isOpeningMixPanel){
                        main.hideAllBox()
                        main.inactiveAllBtn()
                    }
                    else{
                        main.hideAllBox()
                        main.clickMixPanel()
                        imgTop.classList.remove("hide")
                        width===70  ? imgTop.classList.remove("hide") : main.btnModeMobile()
                    }
                }
        // show play list
                if (index === 1){
                    if(main.isOpeningBoxPlayList){
                        main.hideAllBox()
                        main.inactiveAllBtn()
                    }
                    else{
                        width===70  ? btn.style.backgroundColor="#070707" : main.btnModeMobile()
                        main.hideAllBox()
                        main.clickBoxPlayList()
                    }
                }
        //show focus mode
                if (index ===2){
                    if(main.isOpeningBoxFocusMode){
                        main.hideAllBox()
                        main.inactiveAllBtn()
                    }
                    else{
                        width===70  ? btn.style.backgroundColor="#070707" : main.btnModeMobile()
                        main.hideAllBox()
                        main.clickBoxFocusMode()
                    }
                }
        // show change set
                if (index ===3){
                    countBoxMore++
                    if (countBoxMore===1){
                        setTimeout(function(){containerAlert.classList.remove("fade")},500)
                    }
                    if(main.isOpeningBoxChangeSet){
                        main.hideAllBox()
                        main.inactiveAllBtn()
                    }
                    else{
                        main.hideAllBox()
                        main.clickBoxChangeSet()
                        width===70  ? imgBottom.classList.remove("hide") : main.btnModeMobile()
                    }
                }
            }
        })

// click turn off box mode:
        const mainVideos=$$(".main__video")
        mainVideos.forEach((e)=>{
            e.onclick=function(){
                main.hideAllBox()
                main.inactiveAllBtn()
            }

        })


// click img set:
    const imgSet = document.querySelectorAll(".imgSet")  
    imgSet.forEach((img,index)=>{
        img.onclick=function(){
            main.settingAgain()
            if (img.getAttribute('data')==="normal"){
                main.isNormal=true
                main.renderBackgroundNormal()
            }
            if (img.getAttribute('data')==="chillHome"){
                main.isChillHome=true
                main.renderBackgroundChillHome()
            }
            if (img.getAttribute('data')==="desk"){
                main.isDesk=true
                main.renderBackgroundDesk()
            }
            if (img.getAttribute('data')==="coffee1"){
                main.isCoffee1=true
                main.renderBackgroundCoffee1()
            }
            if (img.getAttribute('data')==="bookCoffee1"){
                main.isBookCoffee1=true
                main.renderBackgroundBookCoffee1()
            }
            if (img.getAttribute('data')==="bookCoffee2"){
                main.isBookCoffee2=true
                main.renderBackgroundBookCoffee2()
            }
            if (img.getAttribute('data')==="coffee2"){
                main.isCoffee2=true
                main.renderBackgroundCoffee2()
            }
            if (img.getAttribute('data')==="christmas"){
                main.isChristmas=true
                main.renderBackgroundChristmas()
            }
            if (img.getAttribute('data')==="coding"){
                main.isCoding=true
                main.renderBackgroundCoding()
            }
            if (img.getAttribute('data')==="northern"){
                main.isNorthern=true
                main.renderBackgroundNorthern()
            }
            if(img.getAttribute('data')==="shop"){
                main.isShop=true
                main.renderBackgroundShop()
            }
            if(img.getAttribute('data')==="coffee"){
                main.isCoffee=true
                main.renderBackgroundCoffee()
            }
            if(img.getAttribute('data')==="workNight"){
                main.isWorkNight=true
                main.renderBackgroundWorkNight()
            }
            if(img.getAttribute('data')==="bookOnBed"){
                main.isBookOnBed=true
                main.renderBackgroundBookOnBed()
            }
            if(img.getAttribute('data')==="bookOnChair"){
                main.isBookOnChair=true
                main.renderBackgroundBookOnChair()
            }
            
            
        }
    })   


// show pomodoro  :

    modePomodoro.onclick=()=>{
        containerPomodoro.classList.remove("hide")

    }
// show box paint:
    $(".mode__notes").onclick=()=>{
        boxNote.classList.remove("hide")
    }
//convert between setting and pomodoro :

    $(".btn__time__setting").onclick=()=>{
        boxPomodoro.classList.add("hide")
        boxSettingTime.classList.remove("hide")
    }
    $(".btn__back").onclick=()=>{
        boxPomodoro.classList.remove("hide")
        boxSettingTime.classList.add("hide")
    }

// hide pomodoro :
    $$(".btn__close").forEach((close)=>{
        close.onclick=()=>{
            containerPomodoro.classList.add("hide")
        }
    })

// set time pomodoro:
    const timer=$(".minutes")
    var minutes =parseInt(timer.textContent);
//btn down pomodoro:
    $(".downPomodoro").onclick=()=>{
        if (minutes >1){
            minutes--
            timer.innerHTML=minutes
        }
    }
//btn up pomodoro:
    $(".upPomodoro").onclick=()=>{
        minutes++
        timer.innerHTML=minutes
    }
// set time break:
    const Break=$(".break")
    var breaks =parseInt(Break.textContent);
// btn down break
    $(".downBreak").onclick=()=>{
        if(breaks>0){
            breaks--
            Break.innerHTML=breaks

        }
    }
//btn up Break
    $(".upBreak").onclick=()=>{
        breaks++
        Break.innerHTML=breaks
    }

// control time :
// click button continue:
    btnContinue.onclick=()=>{
        if(!main.isRunning){
            if (main.isRunTimer || main.isRunBreak){
                main.setTime(currentTime)
            }
        }
}
// click  button done
    btnDone.onclick=()=>{
        main.isRunning=true
        main.isRunTimer=true
        main.isRunBreak=false
        var totalSeconds=minutes*60
        main.setTime(totalSeconds)
        $(".title__time").innerHTML="Focus Session"
        $(".btn__back").click()
}
// click button stop:
    btnStop.onclick=()=>{
        main.isRunning=false
        clearTimeout(myTime)
}
// button next turn timer:
    btnNextTimer.onclick=()=>{

        if (main.isRunTimer){
            main.startBreak()
            // audioAlarm.pause()
        }
        else if(main.isRunBreak){
            btnDone.click()
        }
    }
// button auto Auto start pomodoro?
    btnAutoStartPomodoro.onclick=()=>{
        if (main.isAutoStartPomodoro){
            main.isAutoStartPomodoro=false;
            btnAutoStartPomodoro.classList.remove("btnTurnOn")
            $(".bi__autoStartPomodoro").classList.toggle("slideBi")
        }
        else{
            main.isAutoStartPomodoro=true
            btnAutoStartPomodoro.classList.add("btnTurnOn")
            $(".bi__autoStartPomodoro").classList.toggle("slideBi")
        }
    }
// button auto Auto start break?
    btnAutoStartBreaks.onclick=()=>{
        if(main.isAutoStartBreak){
            main.isAutoStartBreak=false
            btnAutoStartBreaks.classList.remove("btnTurnOn")
            $(".bi__autoStartBreaks").classList.toggle("slideBi")
        }
        else{
            main.isAutoStartBreak=true
            btnAutoStartBreaks.classList.add("btnTurnOn")
            $(".bi__autoStartBreaks").classList.toggle("slideBi")
        }
    }
// button auto start alarm?
        btnPlayAlarm.onclick=()=>{
        if(main.isPlayAlarm){
            main.isPlayAlarm=false
            btnPlayAlarm.classList.remove("btnTurnOn")
            $(".bi__play__alarm").classList.add("slideBi")
        }
        else{
            main.isPlayAlarm=true
            btnPlayAlarm.classList.add("btnTurnOn")
            $(".bi__play__alarm").classList.remove("slideBi")
        }
    }
// button alarm special?
    btnPlayAlarmSpecial.onclick=()=>{
        if(main.isPlayAlarmSpecial){
            main.isPlayAlarmSpecial=false
            main.isPlayAlarm=true
            btnPlayAlarmSpecial.classList.remove("btnTurnOn")
            $(".bi__play__alarm__special").classList.toggle("slideBi")
        }
        else{
            main.isPlayAlarmSpecial=true
            main.isPlayAlarm=false
            btnPlayAlarmSpecial.classList.add("btnTurnOn")
            $(".bi__play__alarm__special").classList.toggle("slideBi")
        }
    }

// close box alert:
    $$(".close__alert").forEach((e)=>{
        e.onclick=()=>{
            containerAlert.classList.add("fade")
        }
    })

// btn close box in iphone:
    $$(".btn__down").forEach((e)=>{
        e.onclick=()=>{
            main.hideAllBox()
        }
    })



// test hide screen:
// outside:
   var timeHideScreen;
    document.onmouseleave=function(){
        timeHideScreen=setTimeout(()=>{
            main.fadeScreen()
        },4500)
    }
//inside:
    document.onmouseenter=function(){
        clearTimeout(timeHideScreen)
        main.showScreen()
    }

// move box paint:

    navbarPaint.addEventListener("mousedown",(e)=>{
        if (e.target.className==='navbar'){    
            dragElement(boxNote)
        }
    })



// btn close close paint:
    $(".btn__close__paint").onclick=()=>{
        boxNote.classList.add("hide")
    }

// nhung chuc nang chua lam:

        notActives.forEach((notActive)=>{
            notActive.onclick=function(e){
                    toast({
                        type:"warning",
                        title:"Chưa cập nhật chức năng này",
                        message:"Chưa sử dụng được chức năng này",
                        duration:3000
                    })
            }

        })

// screen paint:

    $(".btn__screen__paint").onclick=function(){
        main.isScreenPaint=!main.isScreenPaint;
        if (!main.isScreenPaint){
            boxNote.style.width="100%";
            boxNote.style.height="100%";
        }
        else{
            boxNote.style.width="1000px";
            boxNote.style.height="600px";
        }

    }

// scroll to left , right :
        $(".scroll__right").onclick=()=>{
            $(".mix__panel__item").scrollLeft+=300;
            $(".scroll__right").classList.add("fade")
            $(".scroll__left").classList.remove("fade")
        }
        $(".scroll__left").onclick=()=>{
            $(".mix__panel__item").scrollLeft-=300;
            $(".scroll__right").classList.remove("fade")
            $(".scroll__left").classList.add("fade")
        }

        navChild.forEach((nav,index)=>{
            nav.onclick=function(){
                if (index!==0){
                    toast({
                        type:"warning",
                        title:"Chưa cập nhật chức năng này",
                        message:"Chưa sử dụng được chức năng này",
                        duration:3000
                    })
                }
            }
        })


    },

//---------end handle event---------- 

//******************************************************


    // functions:


// render effectSongs:
    renderEffectSongs: function() {
        var htmls=this.effectSongs.map((item,index)=>{
            return ` 
            <div class="itemEffect">
            <div class="title__effect">${item.name}</div>
            <input class="volume" data="${index}"" type="range" value="0" step="1" min="0" max="100">
            <audio class="effect-audio" preload="auto" data-index-number="${index}" index="${index}" src="${item.path}" loop></audio>
            </div>
            `
        })
        boxItemEffect.innerHTML = htmls.join('')

    },

// render image set:
    renderImgSet: function(){
    var htmls =this.imgSets.map((item,index)=>{
        return `<div  class="set set__${item.name}"><div class="effects">${item.effects} <i class="fa-solid fa-cloud-moon-rain"></i></div><img data=${item.type} class="imgSet" src="${item.path}" alt=""></div>`
    })
    const setContainer = $(".set__container")
    setContainer.innerHTML = htmls.join('')
    },

// render background christmas:
    renderBackgroundChristmas: function(){
        var htmls=this.christmas.map((item,index)=>{
            return `
                <video class="main__video ${item.name} fade" id='${item.id}' src='${item.path}' 
                muted autoplay preload="auto" playsinline webkit-playsinline x5-playsinline loop > 
                </video> `
        })
        const backgroundContainer=$(".container__main__video")
        backgroundContainer.innerHTML = htmls.join('')
        main.setupFirstBackground()


    },

// render background normal:
    renderBackgroundNormal: function(){
        var htmls=this.normal.map((item,index)=>{
            return `
                <video class="main__video ${item.name} fade" id='${item.id}' src='${item.path}' 
                muted autoplay preload="auto" playsinline webkit-playsinline x5-playsinline loop > 
                </video> `
        })
        const backgroundContainer=$(".container__main__video")
        backgroundContainer.innerHTML = htmls.join('')
        main.setupFirstBackground()


    },
// render background chill home:
    renderBackgroundChillHome: function(){
        var htmls=this.chillHome.map((item,index)=>{
            return `
                <video class="main__video ${item.name} fade" id='${item.id}' src='${item.path}' 
                muted autoplay preload="auto" playsinline webkit-playsinline x5-playsinline loop > 
                </video> `
        })
        const backgroundContainer=$(".container__main__video")
        backgroundContainer.innerHTML = htmls.join('')
        main.setupFirstBackground()


    },
// render background chill home:
    renderBackgroundDesk: function(){
        var htmls=this.desk.map((item,index)=>{
            return `
                <video class="main__video ${item.name} fade" id='${item.id}' src='${item.path}' 
                muted autoplay preload="auto" playsinline webkit-playsinline x5-playsinline loop > 
                </video> `
        })
        const backgroundContainer=$(".container__main__video")
        backgroundContainer.innerHTML = htmls.join('')
        main.setupFirstBackground()


    },
//  render background coding:
    renderBackgroundCoding: function(){
        var htmls=this.coding.map((item,index)=>{
            return `
                <video class="main__video ${item.name} fade" id='${item.id}' src='${item.path}' 
                muted autoplay preload="auto" playsinline webkit-playsinline x5-playsinline loop > 
                </video> `
        })
        const backgroundContainer=$(".container__main__video")
        backgroundContainer.innerHTML = htmls.join('')
        main.setupFirstBackground()

    },

    
    //  render first background coding:
        renderFirstBackgroundCoding: function(){
            const backgroundContainer=$(".container__main__video")
            backgroundContainer.innerHTML =
                 `
                    <video class="main__video "  src='./assets/backgroundMain/coding/hello world 7s.mp4' 
                    muted autoplay preload="auto" playsinline webkit-playsinline x5-playsinline > 
                    </video> `
            
            // main.setupFirstBackground()
        },


//  render background shop:
    renderBackgroundShop: function(){
        var htmls=this.shop.map((item,index)=>{
            return `
                <video class="main__video ${item.name} fade" id='${item.id}' src='${item.path}' 
                muted autoplay preload="auto" playsinline webkit-playsinline x5-playsinline loop > 
                </video> `
        })
        const backgroundContainer=$(".container__main__video")
        backgroundContainer.innerHTML = htmls.join('')
        main.setupFirstBackground()

    },

//  render background coffee:
    renderBackgroundCoffee: function(){
        var htmls=this.coffee.map((item,index)=>{
            return `
                <video class="main__video ${item.name} fade" id='${item.id}' src='${item.path}' 
                muted autoplay preload="auto" playsinline webkit-playsinline x5-playsinline loop > 
                </video> `
        })
        const backgroundContainer=$(".container__main__video")
        backgroundContainer.innerHTML = htmls.join('')
        main.setupFirstBackground()

    },
//  render background work night:
    renderBackgroundWorkNight: function(){
        var htmls=this.workNight.map((item,index)=>{
            return `
                <video class="main__video ${item.name}" id='${item.id}' src='${item.path}' 
                muted autoplay preload="auto" playsinline webkit-playsinline x5-playsinline loop > 
                </video> `
        })
        const backgroundContainer=$(".container__main__video")
        backgroundContainer.innerHTML = htmls.join('')
    },
//  render background book On Bed:
    renderBackgroundBookOnBed: function(){
        var htmls=this.bookOnBed.map((item,index)=>{
            return `
                <video class="main__video ${item.name}" id='${item.id}' src='${item.path}' 
                muted autoplay preload="auto" playsinline webkit-playsinline x5-playsinline loop > 
                </video> `
        })
        const backgroundContainer=$(".container__main__video")
        backgroundContainer.innerHTML = htmls.join('')
    },
//  render background book On Chair:
    renderBackgroundBookOnChair: function(){
        var htmls=this.bookOnChair.map((item,index)=>{
            return `
                <video class="main__video ${item.name}" id='${item.id}' src='${item.path}' 
                muted autoplay preload="auto" playsinline webkit-playsinline x5-playsinline loop > 
                </video> `
        })
        const backgroundContainer=$(".container__main__video")
        backgroundContainer.innerHTML = htmls.join('')
    },
//  render background coffee1:
    renderBackgroundCoffee1: function(){
        var htmls=this.coffee1.map((item,index)=>{
            return `
                <video class="main__video ${item.name} fade" id='${item.id}' src='${item.path}' 
                muted autoplay preload="auto" playsinline webkit-playsinline x5-playsinline loop > 
                </video> `
        })
        const backgroundContainer=$(".container__main__video")
        backgroundContainer.innerHTML = htmls.join('')
        main.setupFirstBackground()

    },
//  render background coffee2:
    renderBackgroundCoffee2: function(){
        var htmls=this.coffee2.map((item,index)=>{
            return `
                <video class="main__video ${item.name} fade" id='${item.id}' src='${item.path}' 
                muted autoplay preload="auto" playsinline webkit-playsinline x5-playsinline loop > 
                </video> `
        })
        const backgroundContainer=$(".container__main__video")
        backgroundContainer.innerHTML = htmls.join('')
        main.setupFirstBackground()

    },
//  render background  book coffee1:
    renderBackgroundBookCoffee1: function(){
        var htmls=this.bookCoffee1.map((item,index)=>{
            return `
                <video class="main__video ${item.name} fade" id='${item.id}' src='${item.path}' 
                muted autoplay preload="auto" playsinline webkit-playsinline x5-playsinline loop > 
                </video> `
        })
        const backgroundContainer=$(".container__main__video")
        backgroundContainer.innerHTML = htmls.join('')
        main.setupFirstBackground()

    },
//  render background  book coffee2:
    renderBackgroundBookCoffee2: function(){
        var htmls=this.bookCoffee2.map((item,index)=>{
            return `
                <video class="main__video ${item.name} fade" id='${item.id}' src='${item.path}' 
                muted autoplay preload="auto" playsinline webkit-playsinline x5-playsinline loop > 
                </video> `
        })
        const backgroundContainer=$(".container__main__video")
        backgroundContainer.innerHTML = htmls.join('')
        main.setupFirstBackground()

    },

//=====================

// setting again is background:

    settingAgain: function(){
        main.isChristmas=false
        main.isNormal=false
        main.isChillHome=false
        main.isCoding=false
        main.isShop=false
        main.isCoffee=false
        main.isCoffee1=false
        main.isCoffee2=false
        main.isWorkNight=false
        main.isBookOnBed=false
        main.isBookOnChair=false
        main.isDesk=false
        main.isBookCoffee1=false
        main.isBookCoffee2=false
    },


// hide all box:
    hideAllBox:function(){
        main.isOpeningMixPanel=false;
        main.isOpeningBoxPlayList=false;
        main.isOpeningBoxFocusMode=false;
        main.isOpeningBoxChangeSet=false;
        allBox.forEach((box)=>{
            box.classList.add("hideMode")
        })
    },

//check click mix panel:

        clickMixPanel:function(){
            main.isOpeningMixPanel=true
                if (main.isOpeningMixPanel){
                        mixPanel.classList.remove("hideMode")
                        imgTop.classList.remove("hide")
                    }
                 else{
                     mixPanel.classList.add("hideMode")
                     imgTop.classList.add("hide")
                     main.inactiveAllBtn()
                 }
        },


// check click box play list :

        clickBoxPlayList:function(){
            main.isOpeningBoxPlayList=true
            if (main.isOpeningBoxPlayList){
                boxPlayList.classList.remove("hideMode")
            }
            else{
                boxPlayList.classList.add("hideMode")
                main.inactiveAllBtn()
            }
        },

// check click box change set :

        clickBoxChangeSet:function(){
            main.isOpeningBoxChangeSet=true
            if (main.isOpeningBoxChangeSet){
                boxChangeSet.classList.remove("hideMode")
            }
            else{
                boxChangeSet.classList.add("hideMode")
                main.inactiveAllBtn()
            }
        },

// check click box change set :

            clickBoxFocusMode:function(){
            main.isOpeningBoxFocusMode=true
            if (main.isOpeningBoxFocusMode){
                boxFocusMode.classList.remove("hideMode")
            }
            else{
                boxFocusMode.classList.add("hideMode")
                main.inactiveAllBtn()
            }
        },

// setup first background:
        setupFirstBackground:function(){
            const firstVideos =$("#day-video") ?? $("#night-video")
            firstVideos.classList.remove("fade")
        },

// playActive:
    playActive:function(){
        if(!main.isPlayed){
            btnPlay.classList.remove("hide")
            btnPause.classList.add("hide")
        } 
        if(main.isPlayed){
            btnPlay.classList.add("hide")
            btnPause.classList.remove("hide")
        }
    },
// reset config mode (isSleepy; isChill; isJazzy)

    resetConfigMode:function(){
        main.isChill=false;
        main.isSleepy=false;
        main.isJazzy=false;
        main.isSad=false;
    },


//inactive all box mode effect:
    inactiveAllBtn:function(){
        iconModes.forEach((icon)=>{
            icon.classList.remove("color-icon")
        })
        btnModes.forEach((mode)=>{
                mode.style.backgroundColor="transparent";
                imgTop.classList.add("hide")
                imgBottom.classList.add("hide")
        })
    },
// reponsive mode button:
    btnModeMobile:function(){
        btnModes.forEach((mode)=>{
            mode.style.backgroundColor="transparent";
            imgTop.classList.add("hide")
            imgBottom.classList.add("hide")
    })
    },

//inactive all item  
    inactive:function(){
        items.forEach(function(item){
            item.querySelector(".item > .fa-solid").classList.remove("itemActive")
        })
    },

//fade all video main:
    fadeAllVideo: function(){
        const mainVideos=$$(".main__video")
        mainVideos.forEach(function(video){
            video.classList.add("fade");
        })
    },

// turn on video audio rain day:

    turnOnRainDay: function(){
        this.fadeAllVideo();
        const dayRainVideo=$("#day-rain-video") ?? $("#night-rain-video") ?? $("night-video") ?? $("#day-video")
        dayRainVideo.classList.remove("fade")
    },

// turn on video audio rain night:
    turnOnRainNight: function(){
        this.fadeAllVideo();
        const nightRainVideo=$("#night-rain-video")  ?? $("#night-rain-video") ?? $("night-video") 
        nightRainVideo.classList.remove("fade")
    },

// turn on video audio day:
    turnOnDay: function(){
        this.fadeAllVideo();
        const dayVideo=$("#day-video") ?? $("#night-video")
        dayVideo.classList.remove("fade")
    },
// turn on video audio night:
    turnOnNight: function(){
        this.fadeAllVideo();
        const nightVideo=$("#night-video") ?? $("#night-rain-video")
        nightVideo.classList.remove("fade")
    },

// when audio ended:
    audioAutoNext: function(){
        audioMain.onended=function(){
            btnNext.click()
        }
    },
// get url music:
    getUrlMusic: function(){
        audioMain.src=main.songs[main.currentIndex].path
    },




// =======functions TIMER==========

// function set Time 
    setTime(totalSeconds){
    currentTime=totalSeconds
    clearTimeout(myTime)
    main.countdown()
    },
// play alarm:
    playAlarm: function(){
        audioAlarm.src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/alarms/Easy+Tone.mp3"
        audioAlarm.play()
    },
// play alarm special:
    playAlarmSpecial: function(){
        
        audioAlarm.src="./assets/effect/Huan Hoa Hong.mp3"
        audioAlarm.play()
    },

//  start break:
    startBreak: function(){
        main.alarmAudio()
        main.isRunBreak=true
        main.isRunTimer=false
        currentTime=parseInt(Break.textContent)*60;
        clearTimeout(myTime)
        main.countdown()
        $(".title__time").innerHTML="Break time"
    },
// check alarm audio:
    alarmAudio: function(){
        if (main.isPlayAlarm){
            main.playAlarm()
        }
        else if (main.isPlayAlarmSpecial){
            main.playAlarmSpecial()
        }
    },

// when currentTime===0  (ended timer):
    endedTime:function(){
        if(main.isAutoStartBreak && main.isAutoStartPomodoro){
            main.isRunTimer ? main.startBreak() : btnDone.click()
        }
        else if (main.isAutoStartPomodoro && !main.isAutoStartBreak){
            if(main.isRunTimer){
                main.startBreak()
                clearTimeout(myTime)
            }
            else{
                btnDone.click()
            }
        }
        else if(main.isAutoStartBreak && !main.isAutoStartPomodoro){
            if(main.isRunTimer){
                main.startBreak()
            }
            else{
                btnDone.click()
                clearTimeout(myTime)
            }
        }
    },


// function count down:
    countdown:function(){
    var min=document.querySelector("#min")
    var sec=document.querySelector("#sec")
    currentTime--
    min.innerHTML=Math.floor(currentTime / 60)
    sec.innerHTML=currentTime % 60;
    if(currentTime>0){
        myTime=setTimeout(function(){main.countdown()},1000)
    }
// ended turn time:
    else if(currentTime===0){
        main.endedTime()
    }

},

// fade anything on screen:
    fadeScreen:function(){
        $(".navbar__main").classList.add("fade")
        $(".menu").classList.add("fade")
        $(".box__control").classList.add("fade")
        $(".btn__rain").classList.add("fade")
    },
// show screen:
    showScreen:function(){
        $(".navbar__main").classList.remove("fade")
        $(".menu").classList.remove("fade")
        $(".box__control").classList.remove("fade")
        $(".btn__rain").classList.remove("fade")
    },
// move box paint:    
//     dragElement:function(element) {
//     var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

//     element.onmousedown = dragMouseDown;
    

//     function dragMouseDown(e) {
//         if (e.target.className ==="navbar"){
//             e = e || window.event;
//             e.preventDefault();
//             // get the mouse cursor position at startup:
//             pos3 = e.clientX; // position mouse X
//             pos4 = e.clientY; // position mouse Y
//             console.log(pos3,pos4);
//             document.onmouseup = closeDragElement;
//             // call a function whenever the cursor moves:
//             document.onmousemove = elementDrag;
//         }
//     }

//     function elementDrag(e) {

//         // e = e || window.event;   
//         e.preventDefault();
//         // calculate the new cursor position:
//         pos1 = pos3 - e.clientX;
//         pos2 = pos4 - e.clientY;
//         pos3 = e.clientX;
//         pos4 = e.clientY;
//         // set the element's new position:
//         element.style.top = (element.offsetTop - pos2) + "px";
//         element.style.left = (element.offsetLeft -pos1) + "px";
//     }

//     function closeDragElement() {
//         // stop moving when mouse button is released:
//         document.onmouseup = null;
//         document.onmousemove = null;
//     }
// },
    

    start: function(){
        this.renderBackgroundNormal()    
        this.renderEffectSongs()
        this.renderImgSet()
        this.handleEvents()
        this.audioAutoNext()
    }
}
main.start();