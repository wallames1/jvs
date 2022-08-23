const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura')
const butao = document.querySelector('#butao')
const paragrafo1 = document.querySelector("#paragrafo1")

function imc(p, a){
    let calculofinal = ''
    butao.addEventListener('click',()=>{
        let pesofinal = peso.value
        let alturafinal = altura.value
        p = pesofinal * 10000
        a = alturafinal * alturafinal
        calculofinal = p / a
        paragrafo1.innerHTML = `O IMC é ${calculofinal.toFixed(1)}`


    })
}
imc()