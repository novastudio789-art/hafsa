// اكتب الباسورد اللي تحب تبعتهولها هنا مكان '1234'
const CORRECT_PASSWORD = "2711"; 

// التحقق من الباسورد
function checkPassword() {
    const input = document.getElementById("passwordInput").value;
    const errorMsg = document.getElementById("errorMsg");

    if (input === CORRECT_PASSWORD) {
        showPage('mainPage');
    } else {
        errorMsg.innerText = "كلمة السر غير صحيحة، حاولي تاني ❤️";
    }
}

// التنقل بين الصفحات
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    document.getElementById(pageId).classList.add('active');
    window.scrollTo(0, 0);
}

// إظهار الفيديو في صفحة النهاية
function showVideo() {
    const videoContainer = document.getElementById('videoContainer');
    videoContainer.style.display = 'block';
}

// إنشاء القلوب المتحركة في الخلفية
function createHearts() {
    const container = document.getElementById('heartsContainer');
    const heartSymbols = ['❤️', '💖', '💕', '💗'];

    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerText = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 3 + 4) + 's'; // بين 4 و 7 ثواني
        heart.style.fontSize = (Math.random() * 10 + 15) + 'px';

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 7000);
    }, 400);
}

createHearts();