const LoanAnnalyzer = require("./annalyzer");
const mockCSVData = `
Alex,Beatrice,1.20\n
Alex,Beatrice,2.50\n
`
describe("Loan annalyzer", () => {
    let annalyzer
    beforeEach(() => {
        annalyzer = new LoanAnnalyzer()
    })
    test("should throw an error if no filepath is provided", () => {
        const results = annalyzer.getStats()
        expect(results).rejects.toThrow(Error)
    })
    test("should have empty metrics on initialization", () => {
        expect(annalyzer.metrics).toEqual({})
    })

    describe("annalyze line", () => {
        
        test("should update metrics if line is provided", () => {
            const line = "Alex,Beatrice,1.20"
            annalyzer.analyzeLine(line)
            expect(Object.keys(annalyzer.metrics).length).toBeGreaterThan(0)
            expect(annalyzer.metrics).toEqual({ 'Alex,Beatrice': 1.2 })
        })

        test("should calculate and update the correct aggregates to metrics", () => {
            const lines = mockCSVData.split('\n')
            lines.forEach(line => {
                annalyzer.analyzeLine(line)
            });
            
            expect(Object.keys(annalyzer.metrics).length).toBeGreaterThan(0)
            expect(annalyzer.metrics).toEqual({ 'Alex,Beatrice': 3.7 })
        })
    })
})