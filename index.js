const fs = require("fs");
const LoanAnnalyzer = require("./annalyzer");

function outputCSV(data, filepath) {
    let writeStream = fs.createWriteStream(filepath)
    let newLine = []
    for (let item of Object.entries(data)) {
        const [key, value] = item
        newLine.push(`${key},${value.toFixed(2)}`)
    }
    writeStream.write(newLine.join('\n'))
    writeStream.end()
    writeStream.on('finish', () => {
        console.log('Output processing complete')
    }).on('error', (err) => {
        throw new Error("Error writing to output file");
    })
}

const annalyzer = new LoanAnnalyzer("docs/input.csv");

annalyzer
    .getStats()
    .then((result) => outputCSV(result, `docs/output.csv`))
    .catch((err) => console.error(err));