const faker = require('faker')

// git repo
// https://github.com/marak/Faker.js/
// npm run workers
// npm run mock:api

const generateWorkers = () => {
  const workers = []
  const tutorials = {
    list: {
      data: [],
      total: 120,
      from: 1
    }
  }
  const courseContent = {
    list: []
  }
  const categoryTitles = { list: [] }
  const teachersList = { list: [] }
  let tutorial = {
    id: 0,
    imgUrl: '',
    title: '',
    lessonNumber: 20,
    duration: '3:15',
    viewed: '1000',
    courseDetails: null
  }
  const commentList = { list: [] }

  for (let id = 0; id < 24; id++) {
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const email = faker.internet.email()

    workers.push({
      id: id,
      firstName: firstName,
      lastName: lastName,
      email: email
    })
  }

  for (let id = 0; id < 24; id++) {
    const imgLink = faker.image.people(200, 200)
    const duration = faker.random.number(1, 20)
    const title = faker.name.title()
    const lessonNumber = faker.random.number(1, 30)
    const shortDesc = faker.name.jobDescriptor()
    const desc = faker.name.jobDescriptor()
    const tutor = faker.name.jobTitle()

    tutorials.list.data.push({
      id: id,
      imgLink: imgLink,
      title: title,
      shortDesc: shortDesc,
      desc: desc,
      tutor: tutor,
      lessonNumber: lessonNumber,
      duration: duration,
      link: './tutorial'
    })
  }

  for (let id = 0; id < 10; id++) {
    const category = 'category' + id
    categoryTitles.list.push({
      value: id + 1,
      title: category
    })
  }

  for (let id = 0; id < 10; id++) {
    const teacher = faker.name.firstName() + ' ' + faker.name.lastName()
    teachersList.list.push({
      value: id + 1,
      title: teacher
    })
  }

  tutorial = {
    id: 1,
    imgUrl: faker.image.people(870, 400),
    title: faker.name.firstName() + ' ' + faker.name.lastName(),
    lessonNumber: faker.random.number(1, 30),
    duration: faker.random.number(1, 20) + ':' + faker.random.number(1, 60) + 'h',
    viewed: faker.random.number(100, 1000),
    courseDetails: faker.lorem.paragraph()
  }

  for (let id = 0; id < 3; id++) {
    const avatar = faker.image.people(60, 60)
    const name = faker.name.title()
    const date = '2019/01/02'
    const description = faker.lorem.paragraph()

    commentList.list.push({
      avatar: avatar,
      name: name,
      date: date,
      description: description
    })
  }

  for (let i = 0; i < 4; i++) {
    const sublist = []
    for (let id = 0; id < 3; id++) {
      sublist.push({
        id: id,
        hour: faker.random.number(1, 12) + ' h',
        subTitle: faker.name.title(),
        link: './tutorial'
      })
    }
    courseContent.list.push({
      title: faker.name.title(),
      subList: sublist
    })
  }

  return {
    workers: workers,
    tutorials: tutorials,
    categoryTitles: categoryTitles,
    teachersList: teachersList,
    tutorial: tutorial,
    commentList: commentList,
    courseContent: courseContent
  }
}

module.exports = generateWorkers
