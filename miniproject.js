var watch = document.getElementById('watch')
var selectedcolors = document.getElementById('color-selector').getElementsByTagName('span')
var settime = document.getElementById('timebtn')
var setheartrate = document.getElementById('heartratebtn')


selectedcolors[0].addEventListener('click', function() {
    watch.src = "./img/iOeUBV7.png"
})
selectedcolors[1].addEventListener('click', function() {
    watch.src = "./img/PTgQlim.png"
})
selectedcolors[2].addEventListener('click', function() {
    watch.src = "./img/Mplj1YR.png"
})
selectedcolors[3].addEventListener('click', function() {
    watch.src = "./img/Zygu7I3.png"
})
selectedcolors[4].addEventListener('click', function() {
    watch.src = "./img/xSIK4M8.png"
})


setInterval(timer, 1000)

function timer() {
    var d = new Date()
    document.getElementById("time").innerHTML = d.toLocaleTimeString()
}

setInterval(function() {
    var temp = (window.getComputedStyle(document.getElementById('heart')).fontSize)
    var temp2 = (window.getComputedStyle(document.getElementById('heart')).top)
    var temp3 = (window.getComputedStyle(document.getElementById('heart')).left)

    temp = parseInt(temp.substr(0, (temp.length - 2))) + 10
    temp2 = parseInt(temp2.substr(0, (temp2.length - 2))) - 5
    temp3 = parseInt(temp3.substr(0, (temp3.length - 2))) - 5

    if (temp > 68) {
        document.getElementById('heart').style.fontSize = "48px"
        document.getElementById('heart').style.top = "365px"
        document.getElementById('heart').style.left = "250px"
    } else {
        document.getElementById('heart').style.fontSize = temp + 'px';
        document.getElementById('heart').style.top = temp2 + 'px'
        document.getElementById('heart').style.left = temp3 + 'px'

    }
}, 200);



settime.addEventListener('click', function() {
    document.getElementById('heart').style.display = "none";
    document.getElementById('time').style.display = "block";
})
setheartrate.addEventListener('click', function() {
    document.getElementById('heart').style.display = "block";
    document.getElementById('time').style.display = "none"
})