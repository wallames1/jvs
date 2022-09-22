    let num = [5, 6, 8, 9, 4]

    console.log(`nosso vetor é o ${num[0]}`)
    num[5]=2
    num.sort()
    num.push(1)
    console.log(num)
    console.log(`o vetor tem ${num.length} posicoes`)
    console.log(`o primeiro valor do vetor é ${num[0]}`)
    let pos = num.indexOf(1)
    if (pos == -1){
        console.log('não encontrado')

    } else {
        console.log(`o valor esta na posicao ${pos}`)
    }