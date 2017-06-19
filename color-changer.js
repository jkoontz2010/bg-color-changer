(function() {

    function getRandomUnusedHue(usedHues) {
        let randomHue;
        while(randomHue === undefined || usedHues[randomHue]) {
            randomHue = Math.floor(Math.random()*360);
        }
        return randomHue;
    }

    function changeBgHue(newHue) {
        let minLightness = 30;
        let maxLightness = 70;
        const randomLightness = Math.floor(Math.random() * (maxLightness - minLightness) + minLightness)
        document.body.style.backgroundColor = `hsl(${newHue}, 50%, ${randomLightness}%)`;
    }

    function changeBgColorRandomly() {
        const usedHues = {};
        
        let randomBgColorChange = function() {
            let newHue = getRandomUnusedHue(usedHues);
            changeBgHue(newHue)
            usedHues[newHue] = true;
        }

        let count=1;
        randomBgColorChange();
        count++;

        let bgChangeInterval = setInterval(() => {
            randomBgColorChange();
            if(count === 10) clearInterval(bgChangeInterval);
            count++;
        }, 1000);
    }

    function addSmoothTransitionToBody() {
        document.body.style.transition = "background .5s";
        document.body.style.transitionTimingFunction = "ease";
    }

    addSmoothTransitionToBody();
    changeBgColorRandomly();

})();
