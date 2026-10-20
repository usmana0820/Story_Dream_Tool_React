/* ==========================================
   AI Emotion → DAF Rhythm Engine
========================================== */

const buttons = document.querySelectorAll(".play-btn");

let currentAudio = null;
let currentButton = null;

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        const audioID = button.dataset.audio;
        const audio = document.getElementById(audioID);

        /* Stop previous audio */

        if (currentAudio && currentAudio !== audio) {

            currentAudio.pause();
            currentAudio.currentTime = 0;

            currentButton.innerHTML = "▶";
            currentButton.parentElement.classList.remove("playing");

        }

        /* Pause if same */

        if (audio === currentAudio && !audio.paused) {

            audio.pause();

            button.innerHTML = "▶";

            button.parentElement.classList.remove("playing");

            return;

        }

        audio.play();

        button.innerHTML = "❚❚";

        button.parentElement.classList.add("playing");

        currentAudio = audio;
        currentButton = button;

        audio.onended = () => {

            button.innerHTML = "▶";

            button.parentElement.classList.remove("playing");

            currentAudio = null;

        };

    });

});

/* ==========================================
   Hover Glow
========================================== */

const cards = document.querySelectorAll(".emotion-card");
const aiCore = document.querySelector(".core-circle");

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        if(card.classList.contains("happy")){

            aiCore.style.boxShadow="0 0 60px #D65F73";

        }

        if(card.classList.contains("sad")){

            aiCore.style.boxShadow="0 0 60px #7BA276";

        }

        if(card.classList.contains("excited")){

            aiCore.style.boxShadow="0 0 60px #CD5EA7";

        }

        if(card.classList.contains("angry")){

            aiCore.style.boxShadow="0 0 60px #B03E00";

        }

        if(card.classList.contains("calm")){

            aiCore.style.boxShadow="0 0 60px #7BA276";

        }

        if(card.classList.contains("suspense")){

            aiCore.style.boxShadow="0 0 60px #D0A394";

        }

    });

    card.addEventListener("mouseleave", () => {

        aiCore.style.boxShadow="0 0 35px rgba(214,95,115,.45),0 0 80px rgba(205,94,167,.20)";

    });

});
