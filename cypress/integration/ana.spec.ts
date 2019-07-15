// Creates class and methods to test

class Test {
  public name: string

  constructor(str: string = 'anand') {
    this.name = str
  }

  public getName() {
    return this.name
  }
}

describe('Ana Test', () => {
  it('number test', () => {
    // note TypeScript definition
    const x: number = 49
    expect(x).to.be.greaterThan(30)
  })

  it('reflektion test', () => {
    // note TypeScript definition
    const test = new Test('Swetha')
    expect(test.getName()).to.equal('Swetha')
  })

})
