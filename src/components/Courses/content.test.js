jest.mock('../../api/courseApi')

const courseApi = require('../../api/courseApi')

describe('The course content', () => {
  it('should get data', () => {
    console.warn('test start!')
    // expect.assertions(1)
    const data = courseApi.getTitles(1)
    console.warn(data)
    return data.then(data => expect(data.title).toEqual('testTitle'))
  })
})
