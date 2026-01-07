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
