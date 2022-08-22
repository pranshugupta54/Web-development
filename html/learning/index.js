const characters = [
    {
        name: 'Tarak Mehta',
        height: '172',
        mass: '77',
        gender: 'male',
    },
    {
        name: 'Jethalal',
        height: '145',
        mass: '136',
        gender: 'male',
    },
    {
        name: 'Babita Ji',
        height: '150',
        mass: '67',
        gender: 'female',
    },
    {
        name: 'Iyer',
        height: '170',
        mass: '70',
        gender: 'male',
    },
]

const names = characters.map((ch) => ch.name)

// console.log(names)

const propertiesOfCh = characters.map(ch => {
    return {
        username: ch.name, 
        height: ch.height
    }
})
// console.log(propertiesOfCh)

const sumOfHeight = characters.reduce((prevValue, character) => {
    return prevValue + Number(character.height);
},0);

// console.log(sumOfHeight)

const highMass = characters.filter((ch) => ch.mass > 100)

// console.log(highMass[0].name)

// highMass.forEach(wow => console.log(wow.name))



function stringConcat(seperator, ...strings) {
    let returnVal = ''
    strings.forEach((string,i,j) => {
        returnVal += string + seperator;
    })
    return returnVal;
}


// console.log(stringConcat('+', 'this', 'is', 'invalid'))


function matchHouse(number){
    return number * 6 - (number - 1);
}

console.log(matchHouse(4))
console.log(matchHouse(87))



