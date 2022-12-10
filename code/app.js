// Déclaration de Steve le joueur
var steve = document.querySelector(".steve");
var steveimg = document.querySelector("#steveimg");

// Déclaration du bouton pour démarrer le jeu
var start = document.getElementById("start");
var restart = document.getElementById("restart");

// Déclaration des flèches du clavier pour détection
document.onkeydown = checkKey;

// Déclaration des mobs
var enemies = document.querySelector("#enemies");


// Animation en cas d'appuie sur les flèches haut ou bas du clavier
function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == '38') {
        steveimg.classList.add('animation_jump');
        setTimeout(function () {
            steveimg.classList.remove('animation_jump');
        }, 500)
    }
    else if (e.keyCode == '40') {
        steveimg.classList.remove('animation_jump');
    }
}


//Restart le jeu CraftItium
function restarting_game() {
    location.reload();
}


let game = document.querySelector(".game")
//Démarrer le jeu CraftItium
function starting_game() {
    let menu = document.querySelector(".menu");
    var score = document.getElementById('timer');

    menu.style.display = "none";
    game.style.display = "block";

    // Score en seconde
    var sec = 0;

    (function () {
        timer = setInterval(() => {
            score.innerHTML = '' + sec;
            sec++;
        }, 1000) // 1 seconde

    })()


    // Biomes changeants : 
    function changeBiome2() {
        document.getElementById("main_img").src = "../Ressources/img_biome/biome2.png";
    };

    function changeBiome3() {
        document.getElementById("main_img").src = "../Ressources/img_biome/biome3.png";
    };

    function changeBiome4() {
        document.getElementById("main_img").src = "../Ressources/img_biome/biome4.png";
    };

    function changeBiome5() {
        document.getElementById("main_img").src = "../Ressources/img_biome/biome5.png";
    };

    function changeBiome6() {
        document.getElementById("main_img").src = "../Ressources/img_biome/biome6.png";
    };

    function changeBiome7() {
        document.getElementById("main_img").src = "../Ressources/img_biome/biome7.png";
    };


    // Mobs qui changent :
    function MobTransformSkeleton() {
        enemies.src = "../Ressources/skeleton.png";
        enemies.style.width = "2.7rem";
        enemies.classList.remove("animation_ennemies");
        enemies.classList.add("animation_ennemies_slow_speed");
    }

    function MobTransformCreeper() {
        enemies.src = "../Ressources/creeper.png";
        enemies.style.width = "2.7rem";
        enemies.classList.remove("animation_ennemies_slow_speed");
        enemies.classList.add("animation_ennemies_speed");

    }

    function MobTransformZDesert() {
        enemies.src = "../Ressources/zombie_desert.png";
        enemies.style.width = "2.7rem";
    }

    function MobTransformPigmen() {
        enemies.src = "../Ressources/pigmen.png";
        enemies.style.width = "2.7rem";
        enemies.classList.remove("animation_ennemies_speed");
        enemies.classList.add("animation_ennemies_mega_speed");
    }

    function MobTransformEnderman() {
        enemies.src = "../Ressources/enderman.png";
        enemies.style.width = "2.15rem";
    }

    function MobTransformHerobrine() {
        enemies.src = "../Ressources/herobrine.png";
        enemies.style.width = "2.2rem";
        enemies.classList.remove("animation_ennemies_mega_speed");
        enemies.classList.add("animation_ennemies_ultra_speed");
    }

    // setTimeout Change Biomes :
    setTimeout(changeBiome2, 21000); // 20sec changements biomes
    setTimeout(changeBiome3, 41000); // 40sec changements biomes
    setTimeout(changeBiome4, 61000); // 60sec changements biomes
    setTimeout(changeBiome5, 81000); // 80sec changements biomes
    setTimeout(changeBiome6, 100000); // 100sec changements biomes
    setTimeout(changeBiome7, 150000); // 150sec changements biomes

    // setTimeout Change Mobs :
    setTimeout(MobTransformSkeleton, 21000); // 20 sec zombie devient squelettes
    setTimeout(MobTransformCreeper, 41000); // 40 sec squelettes devient creeper
    setTimeout(MobTransformZDesert, 61000); // 60 sec creeper devient zombie du désert
    setTimeout(MobTransformPigmen, 81000); // 80 sec zombie du désert devient pigmen
    setTimeout(MobTransformEnderman, 100000); // 100 sec pigmen du désert devient enderman
    setTimeout(MobTransformHerobrine, 150000); // 150 sec enderman du désert devient Herobrine

}

// Screen selon les collisions
var died = document.querySelector(".died")
var lose_screen = document.querySelector(".lose_screen");

// Vérification de collision & comptage des points (plus on saute + on a de points à la fin)
var verification1 = setInterval(function(){
    var persoTop = parseInt(window.getComputedStyle(steveimg).getPropertyValue("top"));
    var obstaclesLeft = parseInt(window.getComputedStyle(enemies).getPropertyValue("left"));

    if(
        obstaclesLeft <= 55  && obstaclesLeft >= 50 && persoTop >= 330 
    ){
        enemies.style.animation = "none";
        lose_screen.style.display = "block";
        game.style.display = "none";
        died.style.display = "block";

        var score = document.getElementById('timer');
        var sec = 0;
    
        (function () {
            timer = setInterval(() => {
                score.innerHTML = '' + sec;
            }, 1000)
    
        })()

        var scoreEnd = document.getElementById('timerend');
        scoreEnd.innerHTML = 'Votre Score est de : ' + timer + ' points';
        scoreEnd.classList.add("scoreEnd");

    }
},1)