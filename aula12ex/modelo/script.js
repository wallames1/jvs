function carregar(){
var foto = window.document.getElementById('manha')
var texto = window.document.getElementById('modelo1')
var data = new Date()
var hora = data.getHours()
texto.innerText(`agora são ${hora} horas`)
if (hora >= 0 && hora < 12){
    foto.src = "tarde.jpg"
}} 
