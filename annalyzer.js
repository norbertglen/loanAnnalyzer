const fs = require("fs");
const es = require("event-stream");

class LoanAnnalyzer {
    filepath = ""

    metrics = {};

    constructor(filepath) {
        this.filepath = filepath;
    }

    processFile() {
        return new Promise((resolve, reject) =>
            fs
                .createReadStream(this.filepath)
                .pipe(es.split())
                .pipe(
                    es
                        .mapSync((line) => this.analyzeLine(line))
                        .on("error", (err) => reject(err))
                )
                .on("end", () => resolve(true))
                .on("error", (err) => reject(err))
        );
    }

    analyzeLine(line) {
        const str = line.split(',')
        const parties = `${str[0]},${str[1]}`
        if (this.metrics[parties]) {
            this.metrics[parties] = this.metrics[parties] + Number(str[2])
        } else {
            this.metrics[parties] = Number(str[2])
        }
    }

    async getStats() {
        try {
            await this.processFile()
            return this.metrics;
        } catch (error) {
            throw new Error("Error processing file");
        }
    }
}
module.exports = LoanAnnalyzer