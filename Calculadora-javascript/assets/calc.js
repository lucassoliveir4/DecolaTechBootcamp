function calculator(){
    const operation = parseInt(prompt('Escolha uma operação:\n 1 - Soma(+)\n 2 - Subtração(-)\n 3 - Multiplicação(*)\n 4 - Divisão(/)\n 5 - Potenciação (**) '))
    

    if (operation > 5 || !operation ){
        alert('Operação inválida. Escolha novamente')
        calculator()
    } else{
        let n1 = parseFloat(prompt('Escolha o primeiro valor'))
        let n2 = parseFloat(prompt('Escolha o segundo valor'))
        let resultado

        if (!n1 || !n2){
            alert('Não é um numero válido')
            calculator()
        }else{
            function newOperation(){
                let o = parseInt(prompt('Deseja fazer nova operação?\n 1 - Sim\n 2 - Não'))
                switch(o){
                    case 1:
                        calculator()
                    break
                    case 2:
                        alert('Obrigado')
                    break
                    default:
                        alert('Operação invalida')
                        newOperation()
                    break
                }
            }
    
            function soma(){
                resultado = n1 + n2
                alert(`${n1} + ${n2} = ${resultado}`)
                newOperation()
            }
            function subtracao(){
                resultado = n1 - n2
                alert(`${n1} - ${n2} = ${resultado}`)
                newOperation()
            }
            function multiplicacao(){
                resultado = n1 * n2
                alert(`${n1} x ${n2} = ${resultado}`)
                newOperation()
            }
            function divisao(){
                resultado = n1 / n2
                alert(`${n1} / ${n2} = ${resultado}`)
                newOperation()
            }
            function potencia(){
                resultado = n1 ** n2
                alert(`${n1} elevado a ${n2}ª = ${resultado}`)
                newOperation()
            }
        }
        switch(operation){
            case 1:
                soma()
            break
            case 2:
                subtracao()
            break
            case 3:
                multiplicacao()
            break
            case 4:
                divisao()
            break
            case 5:
                potencia()
            break   
        }
    }
}

calculator()
