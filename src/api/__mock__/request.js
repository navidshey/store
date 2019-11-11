const courses = {
  list: [
    { id: 1, title: 'testTitle', sublist: {} },
    { id: 2, title: 'testTitle2', sublist: {} },
    { id: 3, title: 'testTitle3', sublist: {} }
  ]
}

export default function request (id) {
  console.warn('using mock!')
  return new Promise((resolve, reject) => {
    process.nextTick(() => {
      courses[id]
        ? resolve(courses[id])
        : reject({ error: 'course not found !' });
    })
  })
}