document.addEventListener("keydown" ,dibujarTeclado);
var cuadro = document.getElementById("areaDeDibujo");
var papel = cuadro.getContext("2d");

const teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
    SPACE: 32
};

var x = 400;
var y = 250;
movimiento = 2;
colorcito= "red";

/* CONTROL DEL COLOR */
let cambiarColor1 = () => {colorcito = "red"};
let cambiarColor2 = () => {colorcito = "blue"};
let cambiarColor3 = () => {colorcito = "blueviolet"};
let cambiarColor4 = () => {colorcito = "goldenrod"};
let cambiarColor5 = () => {colorcito = "whitesmoke"};
let cambiarColor6 = () => {colorcito = "green"};

document.getElementById("color1").addEventListener("click", cambiarColor1);
document.getElementById("color2").addEventListener("click", cambiarColor2);
document.getElementById("color3").addEventListener("click", cambiarColor3);
document.getElementById("color4").addEventListener("click", cambiarColor4);
document.getElementById("color5").addEventListener("click", cambiarColor5);
document.getElementById("color6").addEventListener("click", cambiarColor6);
/* .CONTROL DEL COLOR */

DrawLine ("red", 400, 250, 401, 251, papel); 

function dibujarTeclado (evento) {
    // console.log(evento.keyCode);
    switch(evento.keyCode) {
        case teclas.UP:
            DrawLine(colorcito, x, y, x, y - movimiento, papel, master);
            y = y - movimiento;
        break;
        case teclas.DOWN:
            DrawLine(colorcito, x, y, x, y + movimiento, papel, master);
            y = y + movimiento;
        break;
        case teclas.LEFT:
            DrawLine(colorcito, x, y, x - movimiento, y, papel, master);
            x = x - movimiento;
        break;
        case teclas.RIGHT:
            DrawLine(colorcito, x, y, x + movimiento, y, papel, master);
            x = x + movimiento;
        break;
        case teclas.SPACE:
            noDraw();
        break;
    }
}
/* CONTROL DE TECLAS DIGITALES */
document.getElementById("arrowUp").addEventListener("click", arroU);
document.getElementById("arrowLeft").addEventListener("click", arroL);
document.getElementById("arrowDown").addEventListener("click", arroD);
document.getElementById("arrowRight").addEventListener("click", arroR);
/* Arrow functions no funcionan */
// var arroU = () => { DrawLine(colorcito, x, y, x, y - movimiento, papel, master); y = y - movimiento;};
function arroU () {
    DrawLine(colorcito, x, y, x, y - movimiento, papel, master);
            y = y - movimiento;
}
function arroL () {
    DrawLine(colorcito, x, y, x - movimiento, y, papel, master);
            x = x - movimiento;
}
function arroD () {
    DrawLine(colorcito, x, y, x, y + movimiento, papel, master);
            y = y + movimiento;
}
function arroR () {
    DrawLine(colorcito, x, y, x + movimiento, y, papel, master);
            x = x + movimiento;
}



/* CONTROL DE SPACE */
master = 1;
document.getElementById("btnSpace").addEventListener("click", noDraw);
var spaceBtn = document.getElementById("btnSpace");
/* las arrow function no funcionan con los eventos "click" */
// let noDraw = () => {if(master == 1) { master = 0; spaceBtn.style.opacity = 0.5;} 
                            //    else { master = 1; spaceBtn.style.opacity = 0.8; }; };
function noDraw () {
    if(master ==1) {
        master = 0;
        spaceBtn.style.opacity = 0.5;
    }
    else {
        master = 1;
        spaceBtn.style.opacity = 0.8;
    }
}
/* .CONTROL DE SPACE */


/* CONTROL DEL GROSOR */
var wid = 1;
document.getElementById("lessgrosor").addEventListener("click", changeWidthL);
document.getElementById("moregrosor").addEventListener("click", changeWidthM);
var widdisplay = document.getElementById("grosordisplay");
/* NO FUNCIONAN LAS ARROW FUNCTIONS */
// var changeWidthM = () => { wid++; widdisplay.textContent = wid; };
// var changeWidthL = () => { if(wid > 1) {wid = wid - 1; widdisplay.textContent = wid;} }
function changeWidthM() {
    wid++;
    widdisplay.textContent = wid;
}
function changeWidthL() {
    if (wid > 1) {
        wid = wid - 1;
        widdisplay.textContent = wid;
    }
}
/* .CONTROL DE GROSOR */

function DrawLine(color, xinicial, yinicial, xfinal, yfinal, lienzo, master) {
    if ( master == 1) {
        lienzo.beginPath();
        lienzo.strokeStyle = color;
        lienzo.lineWidth = wid;
        lienzo.moveTo(xinicial, yinicial);
        lienzo.lineTo(xfinal, yfinal);
        lienzo.stroke();
        lienzo.closePath();
    }
}

// Falta hacer que con los botones digitales manteniendo el click se dibuje.
// Falta poner una marca en el cursor siempre.
// las arrowfunctions no funcionan con eventos "click", excepto el colores.
//