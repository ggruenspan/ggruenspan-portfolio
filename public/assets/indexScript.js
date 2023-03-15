window.addEventListener("orientationchange", (event) => {
    if (event.target.screen.orientation.angle === 90 || event.target.screen.orientation.angle === -90) {
        if(/Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            // console.log("mobile device");                // debugging
            // console.log("Landscape");                    // debugging
            document.getElementById("root").style.display = "none";
            document.getElementById("turn").style.display = "block";
        }
    } else if (event.target.screen.orientation.angle === 0) {
        // console.log("Portrait");                        // debugging
        document.getElementById("root").style.display = "block";
        document.getElementById("turn").style.display = "none";   
    }
});