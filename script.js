let lig = document.getElementById('lig')
let deslig = document.getElementById('deslig')
let lamp = document.getElementById('lamp')

function lampOn() {
    lamp.src = './imagens/ligada.jpg'
}

function lampOff (){
    lamp.src = './imagens/desligada.jpg'
}

function lampQueb(){
    lamp.src = './imagens/quebrada.jpg'
}

function lampQuebcel(){
    lamp.src = './imagens/quebrada.jpg'
}

lig.addEventListener('click', lampOn)
deslig.addEventListener('click',lampOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave',lampOff)
lamp.addEventListener('dblclick', lampQueb)
lamp.addEventListener('touchstart', lampQuebcel)



