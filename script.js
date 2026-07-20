/* =========================================================
   BIRTHDAY FOR MANU — Fixed Script
   ========================================================= */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ Script loaded successfully');

    // Data
    const MEMORIES = [
        { img: 'images/20241025_171943.jpg', title: 'The Day It All Started', date: '28 Oct 2024' },
        { img: 'images/Screenshot_20250113_220724_Gallery.jpg', title: 'First Hug/ New Year', date: '01-01-2025' },
        { img: 'images/IMG_20250118_171039_918.jpg', title: 'Kya Khoob lagti ho badi sundar Dikhti ho ', date: '19-01-2025' },
        { img: 'images/Screenshot_20250127_205452_Gallery.jpg', title: 'First Lip Stamp on My Cheek', date: '27-01-2025' },
        { img: 'images/20250219_094127.jpg', title: 'Lip Stamp Return with Heart', date: '19-02-2025' },
        { img: 'images/20250226_110839.jpg', title: 'Shivratri Matching', date: '26-02-2025' },
        { img: 'images/20250312_093437.jpg', title: 'Most Iconic Kissi Photo/ My Fav', date: '12-03-2025' },
        { img: 'images/20250522_192528.jpg', title: 'First Zudio Shopping', date: '22-05-2025' },
        { img: 'images/VideoCapture_20250619-220414.jpg', title: 'Office-VC With My Hottie', date: '19-06-2025' },
        { img: 'images/VideoCapture_20250624-135753.jpg', title: 'My Hottie`s VC to Me(Sick) ', date: '23-06-2025' },
        { img: 'images/20250624_100007_012.jpg', title: 'Meri Nakhrili Pahadan', date: '24-06-2025' },
        { img: 'images/20250703_234353.jpg', title: 'A Precious Gift To Me From My Pglu', date: '03-07-1997' },
        { img: 'images/20250704_190340.jpg', title: 'My Birthday Celebration With My Pglu And Rajkachori', date: '04-07-2025' },
        { img: 'images/VideoCapture_20250706-162211.jpg', title: 'Introducing Mahi To Her Chachi', date: '06-07-2025' },
        { img: 'images/41254.png', title: 'My Pglu`s Birthday', date: '21-07-2025' },
        { img: 'images/IMG_20251027_172141665_HDR.jpg', title: 'Our 1-Hour Maggie Date', date: '27-10-2025' },
        { img: 'images/IMG_20251107_191118543_HDR.jpg', title: 'Our First Metro Ride', date: '07-11-2027' },
        { img: 'images/IMG_20251110_185231395_HDR.jpg', title: 'Chillie Potato Dawat at Metro', date: '10-11-2025' },
        { img: 'images/IMG_20251114_150159518.jpg', title: 'Tere Chechre Se Nazar Nhi Hat Ti Nazare Hum Kya Dekhe', date: '14-11-2025' },
        { img: 'images/IMG_20251201_184537806_HDR.jpg', title: 'My Cutie In My Jacket', date: '01-12-2025' },
        { img: 'images/IMG_20251224_135850275_HDR~2.jpg', title: 'Christmas Matching', date: '24-12-2025' },
        { img: 'images/IMG_20260326_181059589_HDR.jpg', title: 'Our Last Auto Ride', date: '26-03-2026' },
        { img: '  ', title: 'These Are Just 22 Of Our Beautiful Memories. If Its Your 1000th Birthday, There Is Still Memories Left To Showcase here', date: '..' },
    ];


    const REASONS = [
        'I love your smile.',
        'I love your eyes.',
        'I love your hair.',
        'I love your laugh.',
        'I love your voice.',
        'I love your hugs.',
        'I love your Kisses.',
        'I love the way you say me bachcha.',
        'I love your care for me.',
        'I love how your smile make ordinary days feel magical.',
        'I love your nokjhok with me.',
        'I love how you stand by my side in my worst days',
        'I love how you care for the people around you.',
        'I love the way you dream about you goals.',
        'I love your respect towards your family.',
        'I love how you feel jealous of other girl if they around me.',
        'I love your dedication towards your resposibility.',
        'I love the happy moments with you.',
        'I love the quiet moments with you.',
        'I love the future I see when I look at you.',
        'I love that you chose me.',
        'I love you — simply, completely, always.'
    ];

    const LETTER_TEXT = `**Happyyyyy Birthdayyyyyyy meri pyaari Pglu Pahadan! 🎂❤️🏔️**

Kabhi socha nhi tha ki ek insaan mere liye itna sab kuch bn jayega... 🥹❤️
But kya karu, tum ho hi aisi. 🫶

Meri sbse bdi smile ka reason ho tum. 😊❤️
Meri sbse khoobsurat memories ka hissa ho tum. 
Or tum woh insaan ho jise main apne har achhe aur bure waqt mein apne paas chahta hoon. 

I know, babu, ki last kuch time humara waisa nhi gya jaisa jaana chahiye tha. 
Pr sach mein, babu, main tumse tahe dil se pyaar karta hu. ❤️

Main maanta hu ki mujhse kaafi galtiyan ho jaati hain. 😔
Main promise karta hu ki main khud ko better banane ki puri koshish karunga. 🤞❤️

Again, Happiest Birthday to my Queen, my Kuchupuchu, my Sbkuch! 👑❤️

Main wish krta hu ki tumhari life mein sirf khushiyan hi khushiyan aaye. 
Or hum dono saath milkar aise hi aur bhi khoobsurat memories banate rahein. 🥹💕

Thank you mujhe choose karne ke liye. ❤️
Thank you mujhe itna pyaar karne ke liye. 🫂❤️
And thank you for all these beautiful memories. ✨💖

Abhi toh humein saath mein aur bhot saari memories banani hain. 🥰🌍❤️

I love you more than words can ever explain. ❤️`;

    // Elements
    const beginBtn = document.getElementById('beginBtn');
    const intro = document.getElementById('intro');
    const main = document.getElementById('main');
    const music = document.getElementById('bgMusic');
    const musicControls = document.getElementById('musicControls');

    console.log('Elements found:', {
        beginBtn: !!beginBtn,
        intro: !!intro,
        main: !!main,
        music: !!music,
        musicControls: !!musicControls
    });

    // Remove loader
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.classList.add('fade-out');
            setTimeout(() => loader.remove(), 900);
        }
    }, 900);

    // Begin button click handler
    if (beginBtn) {
        beginBtn.addEventListener('click', () => {
            console.log('🎉 Begin button clicked!');

            // Haptic feedback
            if (navigator.vibrate) navigator.vibrate(15);

            // Fade out intro
            if (intro) {
                intro.classList.add('leaving');
            }

            // Show main content after animation
            setTimeout(() => {
                console.log('Showing main content...');

                if (intro) {
                    intro.style.display = 'none';
                }

                if (main) {
                    main.classList.remove('hidden');
                    main.classList.add('visible');
                    console.log('✅ Main content revealed');
                }

                if (musicControls) {
                    musicControls.classList.remove('hidden');
                }

                // Try to play music
                if (music) {
                    music.volume = 0.5;
                    music.play().then(() => {
                        console.log('🎵 Music playing');
                    }).catch(err => {
                        console.log('🎵 Music play failed (this is OK):', err.message);
                    });
                }

                // Trigger reveals
                revealSections();

            }, 900);
        });
    } else {
        console.error('❌ Begin button not found!');
    }

    // Reveal sections on scroll
    function revealSections() {
        const reveals = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in');
                }
            });
        }, { threshold: 0.1 });

        reveals.forEach(el => observer.observe(el));

        // Also trigger letter typing
        setTimeout(() => {
            const letterCard = document.querySelector('.letter-card');
            if (letterCard && !letterCard.dataset.typed) {
                letterCard.dataset.typed = '1';
                typeLetter();
            }
        }, 500);
    }

    // Typewriter effect
    function typeLetter() {
        const body = document.getElementById('letterBody');
        if (!body) return;

        body.innerHTML = '';
        const paragraphs = LETTER_TEXT.split('\n\n');
        let pIndex = 0, cIndex = 0;
        let currentP = document.createElement('p');
        body.appendChild(currentP);

        const cursor = document.createElement('span');
        cursor.className = 'letter-cursor';
        cursor.style.cssText = 'display:inline-block;width:2px;height:1em;background:#B0538A;margin-left:2px;animation:blink 1s steps(2) infinite;vertical-align:-2px';
        currentP.appendChild(cursor);

        function step() {
            if (pIndex >= paragraphs.length) {
                cursor.remove();
                return;
            }
            const para = paragraphs[pIndex];
            if (cIndex < para.length) {
                const ch = para[cIndex];
                if (ch === '\n') {
                    currentP.appendChild(document.createElement('br'));
                } else {
                    currentP.insertBefore(document.createTextNode(ch), cursor);
                }
                cIndex++;
                setTimeout(step, 20 + Math.random() * 30);
            } else {
                pIndex++;
                cIndex = 0;
                if (pIndex < paragraphs.length) {
                    currentP = document.createElement('p');
                    body.appendChild(currentP);
                    currentP.appendChild(cursor);
                }
                setTimeout(step, 200);
            }
        }
        step();
    }

    // Build gallery
    const gallery = document.getElementById('gallery');
    if (gallery) {
        MEMORIES.forEach((m, i) => {
            const card = document.createElement('div');
            card.className = 'memory-card reveal';
            card.innerHTML = `
        <img loading="lazy" src="${m.img}" alt="${m.title}"
             onerror="this.style.opacity='0.3'">
        <div style="position:absolute;top:10px;right:10px;width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,0.85);display:flex;align-items:center;justify-content:center;font-size:16px;box-shadow:0 4px 14px rgba(0,0,0,0.15)">❤</div>
        <div style="position:absolute;inset:0;background:linear-gradient(180deg,transparent 40%,rgba(42,27,61,0.72));display:flex;flex-direction:column;justify-content:flex-end;padding:14px;color:#fff;opacity:.6;transition:opacity 0.5s">
          <p style="font-family:'Playfair Display',serif;font-size:16px;margin:0 0 4px">${m.title}</p>
          <p style="font-size:11px;letter-spacing:0.18em;text-transform:uppercase;opacity:0.85;margin:0;z-index:13">${m.date}</p>
        </div>
      `;
            gallery.appendChild(card);
        });
    }

    // Build reasons
    const reasons = document.getElementById('reasons');
    if (reasons) {
        REASONS.forEach((r, i) => {
            const card = document.createElement('div');
            card.className = 'reason reveal';
            card.innerHTML = `
        <div style="position:relative;width:100%;height:100%;transition:transform 0.9s;transform-style:preserve-3d">
          <div style="position:absolute;inset:0;border-radius:20px;background:linear-gradient(135deg,#FFD6E8,#E8DCFF);display:flex;align-items:center;justify-content:center;box-shadow:0 10px 40px rgba(160,120,200,0.18);backface-visibility:hidden">
            <span style="font-family:'Playfair Display',serif;font-size:34px;font-weight:700;background:linear-gradient(135deg,#B0538A,#8A4FB0);-webkit-background-clip:text;background-clip:text;color:transparent">${i + 1}</span>
          </div>
          <div style="position:absolute;inset:0;border-radius:20px;background:linear-gradient(135deg,#fff,#F6ECFF);display:flex;align-items:center;justify-content:center;text-align:center;padding:14px;font-family:'Playfair Display',serif;font-size:15px;line-height:1.4;box-shadow:0 10px 40px rgba(160,120,200,0.18);transform:rotateY(180deg);backface-visibility:hidden;border:1px solid rgba(205,180,255,0.5)">
            ${r}
          </div>
        </div>
      `;
            card.addEventListener('click', () => {
                const inner = card.querySelector('div');
                if (inner) {
                    inner.style.transform = inner.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
                }
            });
            reasons.appendChild(card);
        });
    }

    // Gift box
    const gift = document.getElementById('gift');
    const cake = document.getElementById('cake');
    const surpriseMsg = document.getElementById('surpriseMsg');
    let giftTaps = 0;
    let cakeTaps = 0;

    if (gift) {
        gift.addEventListener('click', () => {
            giftTaps++;
            if (navigator.vibrate) navigator.vibrate(12);

            if (giftTaps === 1) {
                gift.style.animation = 'shake 0.5s ease';
                setTimeout(() => gift.style.animation = '', 500);
            } else if (giftTaps === 2) {
                gift.querySelector('.gift-lid').style.transform = 'translateY(-120px) rotate(-22deg)';
                gift.querySelector('.gift-lid').style.opacity = '0';

                // Confetti
                if (window.confetti) {
                    confetti({ particleCount: 120, spread: 80, colors: ['#FFD6E8', '#CDB4FF', '#FF9EC7', '#ffffff'] });
                }

                setTimeout(() => {
                    gift.style.display = 'none';
                    if (cake) cake.classList.remove('hidden');
                }, 900);
            }
        });
    }

    if (cake) {
        cake.addEventListener('click', () => {
            cakeTaps++;
            if (cakeTaps >= 22) {
                showToast('I Love You More Than Yesterday ❤️');
                if (window.confetti) {
                    confetti({ particleCount: 200, spread: 120, colors: ['#FFD6E8', '#CDB4FF', '#FF9EC7'] });
                }
                cakeTaps = 0;
            }
            if (giftTaps >= 2 && cakeTaps === 1) {
                setTimeout(() => {
                    if (surpriseMsg) surpriseMsg.classList.remove('hidden');
                }, 600);
            }
        });
    }

    // Toast notification
    function showToast(msg) {
        const t = document.createElement('div');
        t.textContent = msg;
        t.style.cssText = 'position:fixed;left:50%;bottom:90px;transform:translate(-50%,20px);padding:12px 20px;border-radius:999px;background:rgba(255,255,255,0.9);backdrop-filter:blur(14px);color:#2A1B3D;font-size:14px;font-weight:500;box-shadow:0 20px 60px rgba(120,80,180,0.25);opacity:0;transition:all 0.5s;z-index:700;pointer-events:none;font-family:serif';
        document.body.appendChild(t);
        setTimeout(() => t.style.opacity = '1', 10);
        setTimeout(() => {
            t.style.opacity = '0';
            setTimeout(() => t.remove(), 500);
        }, 2800);
    }

    // Music controls
    if (music) {
        const playBtn = document.getElementById('playBtn');
        const playIcon = document.getElementById('playIcon');
        const pauseIcon = document.getElementById('pauseIcon');
        const volume = document.getElementById('volume');
        const progressBar = document.getElementById('progressBar');
        const timeLabel = document.getElementById('timeLabel');

        if (playBtn) {
            playBtn.addEventListener('click', () => {
                if (music.paused) {
                    music.play();
                } else {
                    music.pause();
                }
            });
        }

        music.addEventListener('play', () => {
            if (playIcon) playIcon.classList.add('hidden');
            if (pauseIcon) pauseIcon.classList.remove('hidden');
        });
        music.addEventListener('pause', () => {
            if (playIcon) playIcon.classList.remove('hidden');
            if (pauseIcon) pauseIcon.classList.add('hidden');
        });

        if (volume) {
            volume.addEventListener('input', () => {
                music.volume = parseFloat(volume.value);
            });
        }

        music.addEventListener('timeupdate', () => {
            if (music.duration && progressBar) {
                progressBar.style.width = (music.currentTime / music.duration * 100) + '%';
            }
            if (timeLabel) {
                const m = Math.floor(music.currentTime / 60);
                const s = Math.floor(music.currentTime % 60).toString().padStart(2, '0');
                timeLabel.textContent = `${m}:${s}`;
            }
        });
    }

    // Add shake animation
    const style = document.createElement('style');
    style.textContent = `
    @keyframes shake {
      0%,100%{transform:translateX(0) rotate(0)}
      20%{transform:translateX(-6px) rotate(-3deg)}
      40%{transform:translateX(6px) rotate(3deg)}
      60%{transform:translateX(-4px) rotate(-2deg)}
      80%{transform:translateX(4px) rotate(2deg)}
    }
    @keyframes blink { 50%{opacity:0} }
  `;
    document.head.appendChild(style);
});