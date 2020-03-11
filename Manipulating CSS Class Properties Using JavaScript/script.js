// JavaScript demonstration

var square = document.getElementById("square");

function changeFont() {
    if (square.currentStyle ? square.currentStyle.fontFamily : getComputedStyle(square, null).fontFamily === "sans-serif") {
        square.style.fontFamily = "Times New Roman";
    } else {
        square.style.fontFamily = "sans-serif";
    }
}

function changeColor() {
    if (square.currentStyle ? square.currentStyle.color : getComputedStyle(square, null).color === "rgb(255, 0, 0)") {
        square.style.color = "rgb(0,0,0)";
    } else {
        square.style.color = "rgb(255,0,0)";
    }
}

function changeWidth() {
    if (square.currentStyle ? square.currentStyle.width : getComputedStyle(square, null).width === "320px") {
        square.style.width = "240px";
    } else {
        square.style.width = "320px";
    }
}

function changeBorderRadius() {
    if (square.currentStyle ? square.currentStyle.borderRadius : getComputedStyle(square, null).borderRadius === "0px") {
        square.style.borderRadius = "50px";
    } else {
        square.style.borderRadius = "0px";
    }
}

function changeBackgroundColor() {
    if (square.currentStyle ? square.currentStyle.backgroundColor : getComputedStyle(square, null).backgroundColor === "rgb(255, 255, 255)") {
        square.style.backgroundColor = "aqua";
    } else {
        square.style.backgroundColor = "white";
    }
}

function changeSkew() {
    if (square.currentStyle ? square.currentStyle.transform : getComputedStyle(square, null).transform === "none") {
        square.style.transform = "skew(-8deg)";
    } else {
        square.style.transform = "none";
    }
}

function changeFontSize() {
    if (square.currentStyle ? square.currentStyle.fontSize : getComputedStyle(square, null).fontSize === "16px") {
        square.style.fontSize = "24px";
    } else {
        square.style.fontSize = "16px";
    }
}

function changeBorderStyle() {
    if (square.currentStyle ? square.currentStyle.borderStyle : getComputedStyle(square, null).borderStyle === "inset") {
        square.style.borderStyle = "dashed";
    } else {
        square.style.borderStyle = "inset";
    }
}
