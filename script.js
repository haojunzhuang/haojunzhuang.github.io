const correctEmail = 'rickyzhuang2003@berkeley.edu';

function shuffleString(str) {
    const arr = str.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
}

function setShuffledEmails() {
    const shuffled = shuffleString(correctEmail);
    document.getElementById('email').textContent = shuffled;
}

setShuffledEmails();

function revealEmailWithEffect(elem, email) {
    let revealLength = 0;
    const revealDelay = 40; // ms per character
    let intervalId;

    function tick() {
        revealLength++;
        if (revealLength <= email.length) {
            let revealed = email.slice(0, revealLength);
            let shuffled = '';
            if (revealLength < email.length) {
                shuffled = shuffleString(email.slice(revealLength));
            }
            elem.textContent = revealed + shuffled;
        } 
        if (revealLength >= email.length) {
            clearInterval(intervalId);
            elem.textContent = email;
        }
    }

    intervalId = setInterval(tick, revealDelay);
}

function resetToShuffled(elem) {
    const shuffled = shuffleString(correctEmail);
    elem.textContent = shuffled;
}

function addRevealHover(id) {
    const elem = document.getElementById(id);

    elem.addEventListener('mouseenter', function() {
        revealEmailWithEffect(elem, correctEmail);
    });

    elem.addEventListener('mouseleave', function() {
        resetToShuffled(elem);
    });
}

addRevealHover('email');

// List of xkcd comic info: [number, filename]
const comics = [
    [167, 'nihilism.png'],
    [1666, 'brain_upload.png'],
    [3134, 'wavefunction_collapse.png']
];
const randomComic = comics[Math.floor(Math.random() * comics.length)];
const comicNumber = randomComic[0];
const comicFilename = randomComic[1];

const comicImg = document.createElement("img");
comicImg.src = `https://imgs.xkcd.com/comics/${comicFilename}`;
comicImg.alt = `xkcd #${comicNumber}`;
comicImg.style.maxWidth = "100%";
comicImg.style.borderRadius = "8px";
comicImg.style.marginTop = "1.5em";
comicImg.style.display = "block";
comicImg.style.marginLeft = "auto";
comicImg.style.marginRight = "auto";

const credit = document.createElement("p");
credit.innerHTML = `Comic from <a href="https://xkcd.com/${comicNumber}" target="_blank">xkcd #${comicNumber}</a> by Randall Munroe, licensed under <a href="https://creativecommons.org/licenses/by-nc/2.5/" target="_blank">CC BY-NC 2.5</a>.`;
credit.style.fontSize = "0.85em";
credit.style.textAlign = "center";
credit.style.color = "#555";

const container = document.querySelector(".right-panel");
container.appendChild(comicImg);
container.appendChild(credit);