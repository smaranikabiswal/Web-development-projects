<<<<<<< HEAD
let gameseq=[];
let userSeq=[];
let btns=["pink","purple","yellow","sky"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelUp(){
    userSeq=[];
level++;
h2.innerText=`Level ${level}`;
let randIdx=Math.floor(Math.random()*4);
let randColor=btns[randIdx];
let randbtn=document.querySelector(`.${randColor}`);
gameseq.push(randColor);
gameFlash(randbtn);

}
function checkAns(idx){
    //console.log("curr level: ",level);
   
    if(userSeq[idx]===gameseq[idx]){
        if(userSeq.length==gameseq.length){
       setTimeout(levelUp,1000);   
        }
    }else{
        h2.innerHTML=`game over! your score was <b>${level}</b> <br> press any key to start again`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}
function btnPress(){
let btn=this;
userFlash(btn);
let usercolor=btn.getAttribute("id");
userSeq.push(usercolor);
checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameseq=[];
    userSeq=[];
    level=0;
}
=======
<<<<<<< HEAD
// JavaScript to show an alert when a "Learn More" button is clicked
// JavaScript for handling the 'Learn More' button click and smooth redirection
const learnMoreButtons = document.querySelectorAll('.learn-more');

learnMoreButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default action
        const product = e.target.getAttribute('data-product'); // Get the product data

        // Confirm before redirecting
        const confirmRedirect = confirm("Do you want to continue to the product details page?");
        if (confirmRedirect) {
            window.location.href = `product.html`; // Redirect to product page
        }
    });
});
=======
const display = document.getElementById('display');
const statusText = document.getElementById('status-text');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
    statusText.innerText = "Ready";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
      display.value = eval(display.value);
        statusText.innerText = "Solved";
    } catch (error) {
        display.value = "Error";
    }
}
function calculateSqrt() {
    if (display.value) {
      display.value = Math.sqrt(eval(display.value));
        statusText.innerText = "Square Root Applied";
    }
}
function calculateSquare() {
    if (display.value) {
        display.value = Math.pow(eval(display.value), 2);
        statusText.innerText = "Squared";
    }
}
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    const body = document.body;
    const isLight = body.getAttribute('data-theme') === 'light';
    
    if (isLight) {
        body.removeAttribute('data-theme');
        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        body.setAttribute('data-theme', 'light');
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
});
const voiceBtn = document.getElementById('voice-start');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';

    voiceBtn.addEventListener('click', () => {
        recognition.start();
        statusText.innerText = "Listening...";
        voiceBtn.classList.add('listening');
    });

    recognition.onresult = (event) => {
        let transcript = event.results[0][0].transcript.toLowerCase();
        voiceBtn.classList.remove('listening');
     
        transcript = transcript.replace(/plus/g, '+')
                               .replace(/minus/g, '-')
                               .replace(/into|multiplied by|times/g, '*')
                               .replace(/divided by/g, '/')
                               .replace(/sqaurerootof|rootoverof/g, '√')
                               .replace(/sqaure|squareof/g, 'x²')
                               .replace(/percentage|percentageof/g, '%')
                               .replace(/point|decimal/g, '.');
        display.value = transcript;
        setTimeout(() => calculate(), 1000);
    };

    recognition.onerror = () => {
        voiceBtn.classList.remove('listening');
        statusText.innerText = "Voice Error";
    };
} else {
    voiceBtn.style.display = "none"; 
}
>>>>>>> 5703a884e9dd3878f731762ad05f996c1bbd05da
>>>>>>> f38afc0fe783236e412a19b8e575722d1db382f1
