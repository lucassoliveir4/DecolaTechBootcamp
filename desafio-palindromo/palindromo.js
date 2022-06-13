function verificapalindromo(string){
    
    if(string === ''|| string.length <= 2 ){ 
        console.log('Insira um texto válido')
    }else{
        let newString = string.replace(/ /g, '').toUpperCase()
        let revString = newString.split("").reverse().join("").toUpperCase()
        
        
        if(newString === revString){
            console.log(`A frase '${string}' É um palindromo`)
        }else
        console.log(`A frase '${string}' NÃO É um palindromo`)
    }

}

verificapalindromo("O lobo ama o bolo")
