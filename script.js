const eyeHoles = [
    { x: 22.2135, y:  3.4259, w:  6.9271, h:  6.8519 },  // 133x74px
    { x: 75.5729, y:  5.0926, w: 22.0833, h: 10.1852, size: 'MEDIUM', scale: 1.4 },  // Near CONTACT, enlarged
    { x: 54.1667, y:  7.4537, w: 13.2292, h: 10.6481, size: 'SMOL' },  // Top center right
    { x: 10.3906, y:  7.6389, w: 16.1979, h: 12.6852, size: 'MEDIUM' },  // Top left
    { x: 37.3698, y:  8.1019, w: 14.7396, h: 11.7593, size: 'SMOL' },  // Top center left
    { x: 90.6250, y: 11.2963, w: 18.6458, h: 18.3333, size: 'HUGE' },  // Top right
    { x: 24.1667, y: 19.1667, w:  8.9583, h:  6.6667 },  // 172x72px
    { x: 57.0052, y: 19.8611, w:  8.0729, h:  6.5741 },  // 155x71px
    { x: 69.7135, y: 21.2500, w: 14.7396, h: 12.3148 },  // Reverted (was HUGE)
    { x: 34.6354, y: 22.8241, w:  9.1667, h:  7.3148 },  // 176x79px
    { x:  9.8698, y: 22.9167, w: 10.2604, h:  8.6111 },  // 197x93px
    { x: 96.1719, y: 27.8704, w:  7.5521, h: 18.7037, size: 'MEDIUM', scale: 0.55 },  // Below top right most, shrunk
    { x:  3.6198, y: 30.1852, w:  7.2396, h: 10.1852 },  // 139x110px
    { x: 84.9219, y: 31.0185, w:  9.3229, h:  7.9630 },  // 179x86px
    { x: 27.6302, y: 33.7037, w:  6.7188, h:  5.5556, size: 'TINY' },  // Left of the N
    { x: 73.2292, y: 36.8981, w:  9.1667, h:  7.3148 },  // 176x79px
    { x: 10.8333, y: 43.3333, w: 16.8750, h: 16.8519, size: 'BIG' },  // 324x182px
    { x: 89.1146, y: 45.2315, w: 14.1667, h: 10.2778 },  // 272x111px
    { x: 22.0833, y: 55.8333, w: 14.2708, h: 11.4815 },  // 274x124px
    { x: 96.0938, y: 56.2963, w:  7.7083, h:  8.8889 },  // 148x96px
    { x: 78.8281, y: 56.8981, w: 14.7396, h: 11.7593 },  // 283x127px
    { x:  6.8229, y: 64.3519, w: 13.6458, h: 13.3333 },  // 262x144px
    { x: 94.8438, y: 72.4537, w: 10.2083, h:  9.5370 },  // 196x103px
    { x: 21.7188, y: 73.8889, w: 10.3125, h:  8.7037 },  // 198x94px
    { x: 75.4948, y: 77.5463, w: 17.2396, h: 14.7222 },  // 331x159px
    { x:  5.8333, y: 79.1204, w: 11.6667, h: 10.0926, size: 'MEDIUM' },  // 2nd to bottom of left most eye
    { x: 29.9740, y: 84.3519, w: 10.5729, h:  8.5185, size: 'SMOL' },  // Left of Look Again
    { x: 60.5729, y: 92.0833, w: 13.4375, h: 10.6481, size: 'SMOL' },  // Right of Look Again
    { x: 90.5208, y: 92.3611, w: 18.8542, h: 15.0926 },  // 362x163px
    { x:  9.6094, y: 93.2407, w: 19.2188, h: 13.3333, size: 'BIG' },  // bottom left most
    { x: 43.0208, y: 95.0926, w: 15.8333, h:  9.6296, scale: 1.4 },  // Down left from Look Again, enlarged
    { x: 25.7552, y: 95.6019, w:  7.8646, h:  7.1296 },  // 151x77px
    { x: 74.4010, y: 96.0648, w: 10.1562, h:  7.6852 }  // 195x83px
];

const contactEyeHoles = [
    // Top Eyes (From EYES BG - TOP)
    {x: 2.62, y: 2.45, w: 5.24, h: 4.89, size: 'SMALL'},
    
    // Bottom Eyes (From EYES BG - BTTM)
    {x: 10.63, y: 7.71, w: 21.26, h: 15.43, size: 'HUGE'},
    {x: 35.13, y: 6.21, w: 23.35, h: 12.42, size: 'HUGE'},
    {x: 74.71, y: 2.63, w: 19.58, h: 5.27, size: 'HUGE'},
    {x: 93.51, y: 9.03, w: 12.77, h: 13.92, size: 'BIG'},
    {x: 56.49, y: 12.79, w: 14.76, h: 12.04, size: 'BIG'},
    {x: 80.42, y: 15.9, w: 8.8, h: 8.09, size: 'MEDIUM'},
    {x: 3.19, y: 18.06, w: 6.39, h: 9.78, size: 'SMALL'},
    {x: 23.51, y: 17.31, w: 10.16, h: 7.53, size: 'MEDIUM'},
    {x: 37.96, y: 22.39, w: 15.6, h: 12.04, size: 'BIG'},
    {x: 96.39, y: 25.78, w: 7.02, h: 10.16, size: 'SMALL'},
    {x: 9.32, y: 32.74, w: 16.96, h: 23.33, size: 'BIG'},
    {x: 24.71, y: 39.13, w: 7.54, h: 6.4, size: 'SMALL'},
    {x: 20.47, y: 58.61, w: 16.02, h: 12.98, size: 'BIG'},
    {x: 8.32, y: 59.45, w: 9.53, h: 7.9, size: 'MEDIUM'},
    {x: 5.03, y: 76.01, w: 10.05, h: 10.16, size: 'MEDIUM'},
    {x: 82.98, y: 75.07, w: 8.06, h: 6.4, size: 'MEDIUM'},
    {x: 93.09, y: 78.83, w: 13.61, h: 13.92, size: 'BIG'},
    {x: 79.42, y: 85.89, w: 10.37, h: 7.71, size: 'MEDIUM'},
    {x: 8.9, y: 93.23, w: 17.8, h: 13.36, size: 'BIG'},
    {x: 25.34, y: 92.94, w: 9.63, h: 7.15, size: 'MEDIUM'},
    {x: 53.87, y: 95.86, w: 9.32, h: 8.09, size: 'MEDIUM'},
    {x: 71.36, y: 96.05, w: 17.28, h: 7.71, size: 'BIG'},
    {x: 39.11, y: 96.33, w: 17.91, h: 7.15, size: 'BIG'}
];

const container = document.getElementById('irises') || document.getElementById('contact-irises');
const activeEyeHoles = document.getElementById('irises') ? eyeHoles : contactEyeHoles;
const irises = [];

function getIrisInfo(hole) {
    // Dynamically calculate the true height of the eye slit.
    // If an eye is cut off at the bottom, its 'h' is artificially small, but its 'w' is intact.
    // Since a standard eye is roughly twice as wide as it is tall, we use Math.max(hole.h, hole.w / 2.0)
    // to intelligently reconstruct the true vertical height for eyes clipped by the screen edges.
    const trueHeight = Math.max(hole.h, hole.w / 2.0);
    const dynamicW = trueHeight * 0.85 * (hole.scale || 1.0); // Apply manual scale override if one exists

    if (hole.size === 'HUGE') {
        return { src: encodeURI('assets/01 HOMEPAGE/HERO/1 - BG/IRIS - HUGE.png'), w: dynamicW };
    }
    if (hole.size === 'BIG') {
        return { src: encodeURI('assets/01 HOMEPAGE/HERO/1 - BG/IRIS - BIG.png'), w: dynamicW };
    }
    if (hole.size === 'MEDIUM') {
        return { src: encodeURI('assets/01 HOMEPAGE/HERO/1 - BG/IRIS - MEDIUM.png'), w: dynamicW };
    }
    if (hole.size === 'SMOL') {
        return { src: encodeURI('assets/01 HOMEPAGE/HERO/1 - BG/IRIS - SMOL.png'), w: dynamicW };
    }
    if (hole.size === 'TINY') {
        return { src: encodeURI('assets/01 HOMEPAGE/HERO/1 - BG/IRIS - SMOL.png'), w: dynamicW };
    }

    // We use the maximum of width or height to determine the size of the texture asset to load.
    const sizePercent = Math.max(hole.w, hole.h);

    if (sizePercent > 15) {
        return { src: encodeURI('assets/01 HOMEPAGE/HERO/1 - BG/IRIS - HUGE.png'), w: dynamicW };
    } else if (sizePercent > 12) {
        return { src: encodeURI('assets/01 HOMEPAGE/HERO/1 - BG/IRIS - BIG.png'), w: dynamicW };
    } else if (sizePercent > 9.5) {
        return { src: encodeURI('assets/01 HOMEPAGE/HERO/1 - BG/IRIS - MEDIUM.png'), w: dynamicW };
    } else {
        return { src: encodeURI('assets/01 HOMEPAGE/HERO/1 - BG/IRIS - SMOL.png'), w: dynamicW };
    }
}

// Create the irises based on the hole coordinates
if (container) {
    activeEyeHoles.forEach((hole) => {
        const iris = document.createElement('div');
        iris.classList.add('iris');
        
        // Position using percentages so it's responsive
        iris.style.left = `${hole.x}%`;
        iris.style.top = `${hole.y}%`;
        
        // Pick iris image based on hole width
        const info = getIrisInfo(hole);
        iris.style.backgroundImage = `url('${info.src}')`;
        iris.style.height = `${info.w}%`; // Binds directly to the height of the container, fixing the wide-screen overflow
        // width is intentionally omitted — CSS aspect-ratio: 1/1 makes it a perfect circle that perfectly fits the height
        
        // Initial centering
        iris.style.transform = `translate(-50%, -50%)`;
        
        container.appendChild(iris);
        
        irises.push({
            element: iris
        });
    });
}

// Interactive mouse tracking
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // Calculate scaling factor between viewport and container coordinate system
    const containerRect = container.getBoundingClientRect();
    
    irises.forEach((irisObj) => {
        const el = irisObj.element;
        const rect = el.getBoundingClientRect();
        
        // Center of the iris in viewport coordinates
        const irisCenterX = rect.left + rect.width / 2;
        const irisCenterY = rect.top + rect.height / 2;
        
        const dx = mouseX - irisCenterX;
        const dy = mouseY - irisCenterY;
        const angle = Math.atan2(dy, dx);
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Scale max radius based on the iris's OWN width
        const maxRadius = rect.width * 0.22;
        const moveDist = Math.min(distance * 0.04, maxRadius);
        
        const moveX = Math.cos(angle) * moveDist;
        const moveY = Math.sin(angle) * moveDist;
        
        el.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
    });
});

// --- NAVBAR ADAPTIVE GLASS EFFECT ---
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.nav-content');
    const heroSection = document.querySelector('.hero');
    if (navbar && heroSection) {
        // Trigger when the hero section leaves the viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    navbar.classList.add('dark-glass');
                } else {
                    navbar.classList.remove('dark-glass');
                }
            });
        }, {
            // Trigger slightly before the hero fully leaves
            rootMargin: '-80px 0px 0px 0px' 
        });
        observer.observe(heroSection);
    }
});

// --- WORKS ACCORDION LOGIC ---
document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.works-accordion-item');
    
    // Toggle via Read More / Close buttons
    accordionItems.forEach(item => {
        const readMoreBtn = item.querySelector('.read-more-btn');
        const closeBtn = item.querySelector('.close-section-btn');
        
        if (readMoreBtn) {
            readMoreBtn.addEventListener('click', () => {
                item.classList.add('is-open');
                // Scroll to the top of the item, accounting for the floating navbar
                setTimeout(() => {
                    const offset = item.getBoundingClientRect().top + window.scrollY - 100;
                    window.scrollTo({ top: offset, behavior: 'smooth' });
                }, 100);
            });
        }
        
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                item.classList.remove('is-open');
                // By calculating the exact fixed top coordinate, we can smoothly scroll 
                // upwards while the height collapses simultaneously, without jagged glitches!
                const offset = item.getBoundingClientRect().top + window.scrollY - 150;
                window.scrollTo({ top: offset, behavior: 'smooth' });
            });
        }
    });

    // Check URL hash for auto-expand
    if (window.location.hash) {
        const targetId = window.location.hash.substring(1); // remove '#'
        const targetElement = document.getElementById(targetId);
        
        if (targetElement && targetElement.classList.contains('works-accordion-item')) {
            // Add a slight delay to allow the page to fully render before animating
            setTimeout(() => {
                targetElement.classList.add('is-open');
                const offset = targetElement.getBoundingClientRect().top + window.scrollY - 100;
                window.scrollTo({ top: offset, behavior: 'smooth' });
            }, 600);
        }
    }
});
