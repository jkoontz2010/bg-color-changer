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

        runEverySecond(randomBgColorChange, 10);
    }

    function runEverySecond(callback, limit) {
        let count=1;
        callback(); // call immediately since setInterval only executes after designated time has expired
        count++;

        let everySecond = setInterval(() => {
            callback();
            if(count === limit) clearInterval(everySecond);
            count++;
        }, 1000)
    }

    function addSmoothTransitionToBody() {
        document.body.style.transition = "background .5s";
        document.body.style.transitionTimingFunction = "ease";
    }

    addSmoothTransitionToBody();
    changeBgColorRandomly();

})();
