// Optimized heart creation with throttling
let heartCount = 0;
const MAX_HEARTS = 15;

function createHeart() {
    if (heartCount >= MAX_HEARTS) return;
    
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDelay = Math.random() * 2 + 's';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    
    document.body.appendChild(heart);
    heartCount++;
    
    setTimeout(() => {
        heart.remove();
        heartCount--;
    }, 6000);
}

setInterval(createHeart, 800);

// Optimized sunflower creation - create once, not repeatedly
function createSunflowers() {
   const positions = [
        { bottom: '2%', left: '5%' },
        { bottom: '2%', right: '5%' },
        { bottom: '15%', left: '2%' },
        { bottom: '15%', right: '2%' },
        { bottom: '25%', left: '30%' },
        { bottom: '25%', right: '30%' },
        { bottom: '35%', left: '3%' },
        { bottom: '35%', right: '3%' },
        { bottom: '5%', left: '30%' },
        { bottom: '5%', right: '30%' },
        { bottom: '15%', left: '30%' },
        { bottom: '15%', right: '30%' },
        { top: '5%', left: '30%' },
        { top: '5%', right: '30%' },
        { top: '15%', left: '30%' },
        { top: '15%', right: '30%' },
        { top: '5%', left: '5%' },
        { top: '5%', right: '5%' },
        { top: '15%', left: '2%' },
        { top: '15%', right: '2%' },
        { top: '25%', left: '2%' },
        { top: '25%', right: '2%' },
        { top: '35%', left: '3%' },
        { top: '35%', right: '3%' },
        { top: '50%', left: '1%', transform: 'translateY(-50%)' },
        { top: '50%', right: '1%', transform: 'translateY(-50%)' },
        { bottom: '45%', left: '30%' },
        { bottom: '45%', right: '30%' }
    ];
    
    const fragment = document.createDocumentFragment();
    
    positions.forEach((pos, i) => {
        const sunflower = document.createElement('div');
        sunflower.className = 'sunflower';
        sunflower.textContent = '🌻';
        Object.assign(sunflower.style, pos);
        sunflower.style.animationDelay = (i * 0.2) + 's';
        fragment.appendChild(sunflower);
    });
    
    document.body.appendChild(fragment);
}

createSunflowers();

// Optimized sunflower borders
function createSunflowerBorders() {
    const borderPositions = [
        { top: '10px', left: '10px' },
        { top: '10px', right: '10px' },
        { bottom: '10px', left: '10px' },
        { bottom: '10px', right: '10px' }
    ];
    
    const content = document.querySelector('.content');
    const fragment = document.createDocumentFragment();
    
    borderPositions.forEach(pos => {
        const sf = document.createElement('div');
        sf.className = 'sunflower-border';
        sf.textContent = '🌻';
        Object.assign(sf.style, pos);
        sf.style.animation = 'rotate 10s linear infinite';
        fragment.appendChild(sf);
    });
    
    content.appendChild(fragment);
}

createSunflowerBorders();

// Love Letter Functions
function openLetter() {
    const overlay = document.getElementById('letterOverlay');
    overlay.classList.add('active');
}

function closeLetter() {
    const overlay = document.getElementById('letterOverlay');
    overlay.classList.remove('active');
}

function sayYes() {
    const celebration = document.getElementById('celebration');
    celebration.classList.add('active');
    
    // Soft pastel confetti
    const colors = ['#FFD700', '#FF69B4', '#FFC0CB', '#FFE4E1', '#FAFAD2', '#F0E68C', '#DDA0DD', '#B0E0E6'];
    
    for (let i = 0; i < 200; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-10px';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            confetti.style.width = (Math.random() * 10 + 5) + 'px';
            confetti.style.height = (Math.random() * 10 + 5) + 'px';
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 4000);
        }, i * 15);
    }
    
    // Floating hearts and flowers
    const emojis = ['💕', '💖', '💗', '🌸', '🌺', '🌻', '✨', '💝'];
    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const emoji = document.createElement('div');
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.position = 'fixed';
            emoji.style.fontSize = (Math.random() * 30 + 25) + 'px';
            emoji.style.left = Math.random() * 100 + 'vw';
            emoji.style.bottom = '-50px';
            emoji.style.zIndex = '1001';
            emoji.style.animation = 'floatUp 5s ease-in-out';
            emoji.style.pointerEvents = 'none';
            document.body.appendChild(emoji);
            setTimeout(() => emoji.remove(), 5000);
        }, i * 80);
    }
}

// Add new float up animation
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% { 
            transform: translateY(0) rotate(0deg); 
            opacity: 0;
        }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { 
            transform: translateY(-120vh) rotate(360deg); 
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

function sayNo(btn) {
    const yesBtn = document.querySelector('.yes-btn');
    const currentYesSize = parseInt(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentYesSize + 5) + 'px';
    
    const currentNoSize = parseInt(window.getComputedStyle(btn).fontSize);
    btn.style.fontSize = Math.max(currentNoSize - 2, 10) + 'px';
    
    const messages = [
        "Are you sure? 🥺",
        "The penguin is sad 🐧💔",
        "Please? 🌻",
        "Think about it 😏",
        "Just give me a chance! 💕",
        "Read the letter first? 📧",
        "Babyyyy please? 🥹"
    ];
    btn.textContent = messages[Math.floor(Math.random() * messages.length)];
    
    // Optimized button movement
    btn.style.position = 'relative';
    btn.style.transform = `translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px)`;
}

let bgMusic = new Audio("music.mp3");
bgMusic.loop = true;
bgMusic.volume = 0.24;

function startMusic() {
    bgMusic.play().catch(() => {});
    document.removeEventListener("click", startMusic);
}

document.addEventListener("click", startMusic);
