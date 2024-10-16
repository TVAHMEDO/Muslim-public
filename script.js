window.onload = function() {
    document.getElementById('popup').style.display = 'block';

    document.getElementById('okButton').onclick = function() {
        document.getElementById('popup').style.display = 'none';
    };
};
document.getElementById('certificateForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get values from input fields
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const className = document.getElementById('class').value;
    const fatherName = document.getElementById('fatherName').value;

    // Update certificate with input values
    document.getElementById('certName').textContent = name;
    document.getElementById('certAge').textContent = age;
    document.getElementById('certClass').textContent = className;
    document.getElementById('certFatherName').textContent = fatherName;

    // Show the certificate
    document.getElementById('certificate').classList.remove('hidden');
});

function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform  = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform  = "translateY(-500px)"
}

// for Typewriter effect

const texts = [
    "DEVELOPER",
    "YOUTUBER",
    "DESIGNER"
]

let speed = 100;

const textElements = document.querySelector(".typewriter-text")

let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if(charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText() {
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1)
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter,500)
    }
}

window.onload = typeWriter;