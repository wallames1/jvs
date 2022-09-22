function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector("#res");
    let fsex = document.getElementsByName('radsex')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('ERRO, verifique os dados e tente novamente')
    }
    else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        res.textContent= (`<p>Você é  de  anos.</p>`)
    }
}