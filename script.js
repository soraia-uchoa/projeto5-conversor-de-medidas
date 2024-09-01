let metro = parseFloat(prompt('Digite um valor em metros'))
let opcao = prompt('Digite uma opção de conversão:')

let resultado 
switch(opcao){ 
    case 'milímetros':
        resultado = metro * 1000
        break;
        case 'centímetros':
            resultado = metro * 100
            break
            case 'decímetros':
                resultado = metro * 10
                break
                case 'decâmetros': 
                resultado = metro / 10
                break
                case 'hectômetro':
                    resultado = metro / 100
                    break
                    case 'quilõmetro':
                        resultaod = metro / 1000
                        default:
                            console.log('Operação inválida.')
                            return
}
console.log(`Resultado ${resultado} ${operacao}`)
