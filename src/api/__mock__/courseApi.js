// let list = []

export default {
//   __setList (_list) {
//     list = _list
//   },

  async getTitles () {
    console.warn('using mock!')
    return { list: [{ title: 'testTitle', sublist: {} }] }
  }
}
