let messages = {
    sign: ['sun', 'moon', 'tiger', 'earth', 'lion', 'leopard'],
    feeling: ['happy', 'unlucky', 'lucky', 'angry', 'jealous', 'unhappy'],
    advice: ['relax', 'search for happiness', 'take a step back', 'spend time with friends and family', 'go on holiday', 'treat yourself']
}


function createMessage () {
    let first = `Your sign is ${messages.sign[Math.floor(Math.random() * 6)]}, `
    let second = `You are feeling ${messages.feeling[Math.floor(Math.random() * 6)]}, `
    let third = `You should ${messages.advice[Math.floor(Math.random() * 6)]}.`
    return first + second + third;
}

console.log(createMessage());