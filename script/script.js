function calcular(n1, n2){
    n1 = parseFloat(document.getElementById("n1").value)
    n2 = parsefloat(document.getElementById("n2").value)

    selector = document.getElementById("selector").value

    switch(selector){
        case '+':
        calculo = (n1 + n2)
    document.getElementById("resultado").innerHTML = `O resultado da soma é ${n1} + ${n2} é = ${calculo}`
    break

        case '-':
        calculo = (n1 - n2)
    document.getElementById("resultado").innerHTML = `O resultado da subtração é ${n1} - ${n2} é = ${calculo}`
    break

    case '/':
        calculo = (n1 / n2)
    document.getElementById("resultado").innerHTML = `O resultado da divisão é ${n1} / ${n2} é = ${calculo}`
    break

    case '*':
    calculo = (n1 * n2)
document.getElementById("resultado").innerHTML = `O resultado da multiplicação é ${n1} * ${n2} é = ${calculo}`
break
    }
}


