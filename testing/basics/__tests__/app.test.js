const {SortByAge} = require("../app.js")


describe("Sorting check",()=>{
    
test("Testing if the first user is Sampa",()=>{
    const sortedData = SortByAge()
    expect(sortedData[0].name).toBe("Sampa")
})


test("Testing if the second user is Rudra",()=>{
    const sortedData = SortByAge()
    expect(sortedData[1].name).toBe("Rudra")
})


test("Testing if the length of data is 3",()=>{
    const sortedData = SortByAge()
    expect(sortedData.length).toBe(3)
})


test("Testing if sorted data not undefined ",()=>{
    const sortedData = SortByAge()
    expect(sortedData).not.toBe(undefined)
})
})