import Content from './Content'
import renderer from 'react-test-renderer'
import React from 'react'

jest.mock('../../api/courseApi')

// const courseApi = require('../../api/courseApi').default

describe('The course content', () => {
//   beforeAll(() => {
//     courseApi.__setList({ list: [{ title: 'testTitle', sublist: {} }] })
//   })

  it('should display the correct content', async () => {
    const tree = renderer.create(<Content></Content>)
    const instance = tree.root
    const component = instance.findByProps({ className: 'option-title' })
    console.log(component)
    const text = component.childen[0]
    expect(text).toEqual('Section #1: testTitle')
  })
})
