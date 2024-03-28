function resetOutput() {
    let main = document.getElementById('results')
    main.innerHTML = ''
}

function sumNumbers() {

    let main = document.querySelector("#results");

    let n1 = Number(prompt('Digite o primeiro número').replace(",", "."))
    let n2 = Number(prompt('Digite o segundo número').replace(",", "."))
    let sum = n1 + n2

    let p = document.createElement('p')
    p.innerHTML = `O resultado da operação é ${sum}`
    main.appendChild(p)
    return sum

}

function mathOperations() {

    let main = document.querySelector("#results");

    let n1 = Number(prompt('Digite o primeiro número').replace(",", "."))
    let n2 = Number(prompt('Digite o segundo número').replace(",", "."))

    let sum = n1 + n2;
    let subtraction = n1 - n2;
    let multiplication = n1 * n2;
    let division = n1 / n2

    let p = document.createElement('p')
    p.innerHTML = `Soma: ${sum.toFixed(2)} <br>Subtração: ${subtraction.toFixed(2)}<br>Multiplicação: ${multiplication.toFixed(2)}<br>Divisão: ${division.toFixed(2)}`
    main.appendChild(p)

    return sum

}

function avgFuelConsumption() {

    let main = document.querySelector("#results");

    let distance = Number(prompt("Digite a distância percorrida em km").replace(",", "."))
    let fuel = Number(prompt("Digite a quantidade de combustível consumida em litros").replace(",", "."))
    let kmPerLiter = distance / fuel

    let p = document.createElement('p')
    p.innerHTML = `A média de consumo do veículo é de ${kmPerLiter.toFixed(2)}km/l`

    main.appendChild(p)

    return kmPerLiter

}

function salaryCalculator() {

    let main = document.querySelector("#results");

    let name = prompt('Digite o nome do vendedor')
    let salary = Number(prompt('Digite o salário fixo do vendedor').replace(',', '.'))
    let monthlySales = Number(prompt('Digite o valor total vendido no mês').replace(',', '.'))
    let comission = monthlySales * 0.15

    let totalSalary = (salary + comission)

    let p = document.createElement("p")
    p.innerHTML = `O vendedor de nome ${name} tem o salário fixo de ${salary.toLocaleString('pt-BR', { style: 'currency', currency: "BRL" })}
     e vendeu ${monthlySales.toLocaleString('pt-BR', { style: 'currency', currency: "BRL" })},
      tendo direito a ${comission.toLocaleString('pt-BR', { style: 'currency', currency: "BRL" })} em comissão.
       Seu salário total é de ${totalSalary.toLocaleString('pt-BR', { style: 'currency', currency: "BRL" })}`

    main.appendChild(p)

}

function avgGrades() {

    let main = document.querySelector("#results");

    let name = prompt("Digite o nome do aluno");

    let grade1 = Number(prompt("Digite a nota da primeira prova").replace(',', '.'));
    let grade2 = Number(prompt("Digite a nota da segunda prova").replace(',', '.'));
    let grade3 = Number(prompt("Digite a nota da terceira prova").replace(',', '.'));

    let avg = (grade1 + grade2 + grade3) / 3

    let p = document.createElement("p")
    p.innerHTML = `O aluno ${name} obteve a média de ${avg.toFixed(2)} nas 3 provas`

    main.appendChild(p)

}

function switchValues() {

    let main = document.querySelector("#results");

    let a = prompt("Digite o valor a ser armazenado em a");
    let b = prompt("Digite o valor a ser armazenado em b");
    let c = "";

    let p1 = document.createElement('p')
    p1.innerHTML = `Valor armazenado em A: ${a}<br>Valor armazenado em B: ${b} <br><br>`
    main.append(p1)

    let p2 = document.createElement('p')

    c = a;

    a = b;

    b = c;

    p2.innerHTML = `Valor armazenado em A: ${a}<br>Valor armazenado em B: ${b}`

    main.append(p2)

}

function convertToFarenheiht() {

    let main = document.querySelector("#results");

    let celsiusTemp = Number(prompt('Digite a temperatura em Celsius').replace(',', '.'))

    let fahrenheitTemp = (celsiusTemp * 9 + 160) / 5

    let p = document.createElement('p')
    p.innerHTML = `A temperatura ${celsiusTemp}°C equivale a ${fahrenheitTemp}°F`

    main.appendChild(p)
}

function convertDolarToReal() {

    let main = document.querySelector("#results");

    let dolarAmount = Number(prompt('Digite o valor a ser convertido de USD para BRL:').replace(',', '.'))
    let exchangeRate = Number(prompt('Digite a cotação atual do dólar').replace(',', '.'))
    let convertedValue = dolarAmount * exchangeRate

    let p = document.createElement('p')
    p.innerHTML = `O valor total convertido em reais é ${convertedValue.toLocaleString('pt-BT', { style: 'currency', currency: 'BRL' })}`

    main.appendChild(p)
}

function savingsCalculator() {

    let main = document.querySelector("#results");

    let savings = Number(prompt('Digite o valor depositado:'))
    let savingsWithInterest = savings * 1.07

    let p = document.createElement('p')
    p.innerHTML = `Você terá ${savingsWithInterest.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} em sua conta no próximo mês!`

    main.appendChild(p)

}

function paymentCalculator() {

    let main = document.querySelector("#results");

    let total = Number(prompt('Digite o valor total da compra').replace(',', '.'))
    let payments = Number(prompt('Digite o número de prestações'))

    let valuePerPayment = total / payments

    let p = document.createElement('p')
    p.innerHTML = `Você irá pagar ${valuePerPayment.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}/mês por ${payments} meses!`

    main.appendChild(p)

}

function salesPrice() {

    let main = document.querySelector("#results");

    let buyingPrice = Number(prompt('Digite o valor de compra do produto').replace(',', '.'))
    let profitPercentage = Number(prompt('Digite a porcentagem de lucro desejada').replace(',', '.'))
    let profitMargin = (buyingPrice * profitPercentage) / 100
    let sellingPrice = buyingPrice + profitMargin

    let p = document.createElement('p')
    p.innerHTML = `O valor de venda para o produto é de ${sellingPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`

    main.appendChild(p)

}

function carTotalCost() {

    let main = document.querySelector("#results");

    let factoryPrice = Number(prompt('Digite o preço de fábrica do carro').replace(',', '.'))
    let priceAfterTaxes = factoryPrice * 1.45
    let totalPrice = priceAfterTaxes * 1.28

    let p = document.createElement('p')
    p.innerHTML = `O valor total do carro é de ${totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`

    main.appendChild(p)

}

function isGreaterThanTen() {

    let main = document.querySelector("#results");

    let userInput = Number(prompt('Digite um número').replace(',', '.'))

    let p = document.createElement('p')

    if (userInput > 10) {
        p.innerHTML = `O número ${userInput} é maior que 10`
    } else {
        p.innerHTML = "O número não é maior do que 10"
    }

    main.appendChild(p)
}

function whichIsGreater() {

    let main = document.querySelector("#results");

    let n1 = Number(prompt('Digite o primeiro número').replace(',', '.'))
    let n2 = Number(prompt('Digite o segundo número').replace(',', '.'))

    let p = document.createElement('p')

    if (n1 > n2) {
        p.innerHTML = `${n1} é maior que ${n2}`
    } else if (n1 < n2) {
        p.innerHTML = `${n1} <strong>Não</strong> é maior que ${n2}`
    } else {
        p.innerHTML = `${n1} e ${n2} são iguais`
    }

    main.appendChild(p)

}

function isItOnInterval() {

    let main = document.querySelector("#results");

    let userInput = Number(prompt('Digite um número').replace(',', '.'));

    let p = document.createElement('p')

    if (userInput >= 100 && userInput <= 200) {
        p.innerHTML = `O número ${userInput} está entre 100 e 200`
    } else {
        p.innerHTML = `O número ${userInput} <strong>Não</strong> está entre 100 e 200`
    }

    main.appendChild(p)
}

function isStudentAproved() {

    let main = document.querySelector("#results");

    let name = prompt('Digite o nome do aluno')
    let grade1 = Number(prompt("Digite a nota da primeira prova").replace(',', '.'));
    let grade2 = Number(prompt("Digite a nota da segunda prova").replace(',', '.'));
    let grade3 = Number(prompt("Digite a nota da terceira prova").replace(',', '.'));

    let avg = (grade1 + grade2 + grade3) / 3

    let p = document.createElement('p')

    let status = ''

    if (avg >= 7) {
        status = 'aprovado'
    } else if (avg >= 5.1 && avg <= 6.9) {
        status = 'em recuperação'
    } else {
        status = 'reprovado'
    }

    p.innerHTML = `O aluno ${name} ficou com a nota média ${avg.toFixed(2)} e está ${status}`

    main.appendChild(p)

}

function countNumbers() {

    let main = document.querySelector("#results");

    let counter = 0

    for (let i = 0; i < 80; i++) {

        let userInput = Number(prompt("Digite um número"))

        if (userInput >= 10 && userInput <= 150) {
            counter++
        }

    }

    let p = document.createElement('p')
    p.innerHTML = `Dos números fornecidos, ${counter} estão entre 10 e 150`

    main.appendChild(p)

}

function isUnderage() {

    for (let i = 0 ; i < 75 ; i++) {

        let userInput = Number(prompt('Digite a idade'))
        if (userInput >= 18) {
            alert('Maior de idade!')
        } else {
            alert('Menor de idade!')
        }

    }


}

function manOrWoman() {

    let main = document.getElementById("results")

    let totalMasc = 0
    totalFem = 0

    for (let i = 0; i < 56; i++) {

        let name = prompt("Digite o seu nome").toLowerCase()
        let gender = prompt("Digite o seu gênero").toLowerCase()
        console.log(name, gender)

        if (gender == "m" || gender == "masc" || gender == "macsulino") {

            totalMasc = totalMasc + 1
            alert(`A pessoa de nome ${name} é do gênero masculino`)

        } else {

            totalFem = totalFem + 1
            alert(`A pessoa de nome ${name} é do gênero feminino`)

        }

    }

    let p = document.createElement('p')
    p.innerHTML = `O total de homens é ${totalMasc} e o total de mulheres é de ${totalFem}`

    main.appendChild(p)

}

function vehicleDiscount() {

    let main = document.getElementById("results")

    let oldCars = 0
    let newCars = 0
    let keepGoing = true


    do {

        let originalValue = Number(prompt("Digite o valor do carro"))
        let year = Number(prompt("Digite o ano de fabricação"))

        if (year <= 2000) {

            oldCars++
            let finalValue = originalValue * 0.88
            alert(`O valor do carro com desconto é de ${(finalValue.toFixed(2)).toLocaleString("pt-br", { style: "currency", currency: "BRL" })}`)

        } else {

            newCars++
            let finalValue = originalValue * 0.93
            alert(`O valor do carro com desconto é de ${(finalValue.toFixed(2)).toLocaleString("pt-br", { style: "currency", currency: "BRL" })}`)

        }
        keepGoing = confirm("Quer continuar calculando?")

    }
    while (keepGoing == true)

    let p = document.createElement('p')
    p.innerHTML = `O total de carros antigos é de ${oldCars} e o total de carros novos é de ${newCars}`

    main.appendChild(p)

}

function isAbleForMilitary(){

    let main = document.getElementById("results")

    let entries = Number(prompt("Quantas pessoas serão avaliadas?"))

    let countAble = 0
    let countUnable = 0

    for(let i = 0 ; i < entries ; i++){

        let name = prompt("Insira o nome:")
        let age = Number(prompt("Insira a idade:"))
        let gender = prompt("Insira o gênero (M/F)").toLowerCase()
        let healthStatus = prompt("Insira o parecer médico (apto/inapto)")

        if(age < 18 || gender !== "m" || healthStatus == "inapto"){

            alert(`${name} não está apta para o serviço militar obrigatório`)
            countUnable++

        } else {

            alert(`${name} está apta para o serviço militar obrigatório`)
            countAble++
        }

    }

    let p = document.createElement('p')
    p.innerHTML = `${countAble} pessoas estão aptas e ${countUnable} pessoas estão inaptas para o serviço militar obrigatório!`

    main.appendChild(p)
}

function lossOrProfit(){

    let main = document.getElementById("results")

    let totalBuyingPrice = 0
    let totalSellingPrice = 0

    for(let i = 0 ; i < 40 ; i++){

        let buyingPrice = Number(prompt("Qual o valor de compra do produto"))
        totalBuyingPrice = totalBuyingPrice + buyingPrice

        let sellingPrice = Number(prompt("Qual o valor de venda do produto?"))
        totalSellingPrice = totalSellingPrice + sellingPrice

        let profit = sellingPrice - buyingPrice

        if(profit < 0){

            alert(`Prejuízo de R$ ${(Math.abs(profit).toFixed(2))}`)

        } else if (profit > 0){

            alert(`Lucro de R$ ${profit.toFixed(2)}`)

        } else {

            alert("Empate na venda!")

        }

    }

    let avgBuyingPrice = (totalBuyingPrice / 40)
    let avgSellingPrice = (totalSellingPrice / 40)
    
    let p = document.createElement('p')
    p.innerHTML = `A média de valor de compra é igual a ${avgBuyingPrice.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
    e a média de valor de venda é igual a ${avgSellingPrice.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}`

    main.appendChild(p)

}

function showMessage(){

    let main = document.getElementById("results")

    let p = document.createElement('p')

    let userInput = Number(prompt("Digite um número"))

    if(userInput > 80){

        p.innerHTML = `O número ${userInput} é maior que 80`

    } else if (userInput == 40){

        p.innerHTML = "O número informado é igual a 40"

    } else if( userInput < 25){

        p.innerHTML = `O número ${userInput} é menor que 25`

    }

    main.appendChild(p)
}

function addEventListeners() {

    let btn1 = document.getElementById("1")
    btn1.addEventListener('click', () => {
        sumNumbers()
    })

    let btn2 = document.getElementById("2")
    btn2.addEventListener('click', () => {
        mathOperations()
    })

    let btn3 = document.getElementById("3")
    btn3.addEventListener('click', () => {
        avgFuelConsumption()
    })

    let btn4 = document.getElementById("4")
    btn4.addEventListener('click', () => {
        salaryCalculator()
    })

    let btn5 = document.getElementById("5")
    btn5.addEventListener('click', () => {
        avgGrades()
    })

    let btn6 = document.getElementById("6")
    btn6.addEventListener('click', () => {
        switchValues()
    })

    let btn7 = document.getElementById("7")
    btn7.addEventListener('click', () => {
        convertToFarenheiht()
    })

    let btn8 = document.getElementById("8")
    btn8.addEventListener('click', () => {
        convertDolarToReal()
    })

    let btn9 = document.getElementById("9")
    btn9.addEventListener('click', () => {
        savingsCalculator()
    })

    let btn10 = document.getElementById("10")
    btn10.addEventListener('click', () => {
        paymentCalculator()
    })

    let btn11 = document.getElementById("11")
    btn11.addEventListener('click', () => {
        salesPrice()
    })

    let btn12 = document.getElementById("12")
    btn12.addEventListener('click', () => {
        carTotalCost()
    })

    let btn13 = document.getElementById("13")
    btn13.addEventListener('click', () => {
        isGreaterThanTen()
    })

    let btn14 = document.getElementById("14")
    btn14.addEventListener('click', () => {
        whichIsGreater()
    })

    let btn15 = document.getElementById("15")
    btn15.addEventListener('click', () => {
        isItOnInterval()
    })

    let btn16 = document.getElementById("16")
    btn16.addEventListener('click', () => {
        isStudentAproved()
    })

    let btn17 = document.getElementById("17")
    btn17.addEventListener('click', () => {
        countNumbers()
    })

    let btn18 = document.getElementById("18")
    btn18.addEventListener('click', () => {
        isUnderage()
    })

    let btn19 = document.getElementById("19")
    btn19.addEventListener("click", () => {
        manOrWoman()
    })

    let btn20 = document.getElementById("20")
    btn20.addEventListener("click", () => {
        vehicleDiscount()
    })

    let btn21 = document.getElementById("21")
    btn21.addEventListener("click", () => {
        isAbleForMilitary()
    })

    let btn22 = document.getElementById("22")
    btn22.addEventListener("click", () => {
        lossOrProfit()
    })

    let btn23 = document.getElementById("23")
    btn23.addEventListener("click", () => {
        showMessage()
    })

    let resetBtn = document.getElementById('resetBtn')
    resetBtn.addEventListener('click', () => {
        resetOutput()
    })

}

addEventListeners()