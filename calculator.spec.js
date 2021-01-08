describe("calculator.js", () => {
  // TODO: specs!
  it("should add numbers to total", () => {
    // TODO expectations
    // expect 5 + 5 to be 10
    // First we have to bring in the function we want to test by instatiating our
    // Calculator class
    const calculator = new Calculator();
    calculator.add(5);
    // expect total to be 5
    // Anatomy of a expect() function:
    // expect(/* Actual value */).toBe(/* expected value */)
    expect(calculator.total).toBe(5)
    expect(5).toBe(2)
  });
  it("Should subtract numbers from total", () => {
    // TODO expectations
  });
  it("should multiply total by number", () => {
    // TODO expectations
  });
  it("it should divide total by number", () => {
    // TODO expectations
  });
});
