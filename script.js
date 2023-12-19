const nightModeButton = document.querySelector("#nightModeButton");
const ul = document.querySelector("")
const body = document.body;
let nightMode = true;

function darkMode(icon){

    if(nightMode){
        nightMode = false;
        document.body.classList.remove("dark");
        nightModeButton.style.backgroundColor = "hsl(0, 0, 88%)";
        icon.classList.remove("fa-moon")
        icon.classList.toggle("fa-sun");
        icon.style.color = "hsl(45, 100%, 59%)"
    }

    else{
        nightMode = true;
        document.body.classList.add("dark");
        nightModeButton.style.backgroundColor = "hsl(0, 0, 12%)";
        icon.classList.remove("fa-sun")
        icon.classList.toggle("fa-moon");
        icon.style.color = "hsl(45, 100%, 39%)"
    };

    
};
