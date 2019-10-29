
describe('The contact form', () => {
  beforeEach(() => {
    console.log('before each!')
  })

  beforeAll(() => {
    console.log('before all!')
  })

  afterEach(() => {
    console.log('after each!')
  })

  afterAll(() => {
    console.log('after All !')
  })

  it('should dispaly contact form', () => {
    expect(2 + 2).toEqual(4)
  })

  it('should dispaly contact form1', () => {
    expect(3 + 2).toEqual(5)
  })

  // async tests
  it('async test 1', done => {
    setTimeout(done, 100)
  })

  it('async test 2', () => {
    return new Promise(
      resolve => setTimeout(resolve, 200))
  })

  // it('async test 3', async (delay) => {
  //   // eslint-disable-next-line no-return-await
  //   return await delay(1000)
  // })
})
