import React from 'react'
import SimpleList from './SimpleList'
import renderer from 'react-test-renderer'

// display test
describe('the simplelist', () => {
  it('renderers as expected - snapshot', () => {
    const tree = renderer
      .create(<SimpleList title='test list' name='test_list' list={[{ value: '1', title: 'title 11 ' }, { value: '2', title: 'title 22' }]}></SimpleList>)
      .toJSON()

    console.log(tree)

    expect(tree).toMatchSnapshot()
  })
})
