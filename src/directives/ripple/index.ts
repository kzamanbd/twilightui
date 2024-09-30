const handleRipple = (element: any, binding: any, ev: any) => {
    // Remove any existing ripple elements
    const existingRipples = element.getElementsByClassName('v-ripple');
    while (existingRipples.length > 0) {
        existingRipples[0].parentNode.removeChild(existingRipples[0]);
    }

    const rippleElement = document.createElement('span');
    let currentDiameter = 0.8;
    let currentOpacity = 0.65;
    const animationHandler = setInterval(animateRippleSpread, 2);
    applyRippleStyle();

    function applyRippleStyle() {
        const elementCoordinates = element.getBoundingClientRect();
        const offsetY = ev.clientY - elementCoordinates.y;
        const offsetX = ev.clientX - elementCoordinates.x;

        rippleElement.classList.add('v-ripple'); // Add class for identifying ripple elements
        rippleElement.style.position = 'absolute';
        rippleElement.style.height = '5px';
        rippleElement.style.width = '5px';
        rippleElement.style.borderRadius = '100%';
        rippleElement.style.backgroundColor = '#f2f2f2';
        rippleElement.style.left = `${offsetX}px`;
        rippleElement.style.top = `${offsetY}px`;
        element.appendChild(rippleElement);
    }

    function animateRippleSpread() {
        const maximalDiameter = +binding.value || 200;
        if (currentDiameter <= maximalDiameter) {
            currentDiameter++;
            currentOpacity -= 0.65 / maximalDiameter;
            rippleElement.style.transform = `scale(${currentDiameter})`;
            rippleElement.style.opacity = `${currentOpacity}`;
        } else {
            rippleElement.remove();
            clearInterval(animationHandler);
        }
    }
};

const vRipple = {
    mounted: (el: any, binding: any) => {
        el.style.position = 'relative';
        el.style.overflow = 'hidden';
        el.addEventListener('click', (ev: any) => handleRipple(el, binding, ev));
    }
};

export default vRipple;
