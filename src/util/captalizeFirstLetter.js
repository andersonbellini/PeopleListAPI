/*
Deixa a primeira letra da  string em maiúsculo
Ex: exemplo -> Exemplo
*/

const captalizeFirstLetter = string => {
    return string[0].toUpperCase() + string.slice(1)
}

export default captalizeFirstLetter;