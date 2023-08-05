const chunks = (arr) => {
    let finalArr = []
    const chunkSize = 1000;
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        finalArr.push(chunk)
    }
    return finalArr
}

module.exports = { chunks }