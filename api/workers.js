let faker = require('faker');

//git repo
//https://github.com/marak/Faker.js/
//npm run workers
//npm run mock:api

let generateWorkers = () => {
    let workers = [];
    let tutorials = { "list": [] };

    for (let id = 0; id < 30; id++) {
        let firstName = faker.name.firstName();
        let lastName = faker.name.lastName();
        let email = faker.internet.email();

        workers.push({
            "id": id,
            "firstName": firstName,
            "lastName": lastName,
            "email": email
        });
    }



    for (let id = 0; id < 30; id++) {
        let imgLink = faker.image.people(100,100);
        let duration = faker.random.number(1, 20);
        let title = faker.name.title();
        let lessonNumber = faker.random.number(1, 30);
        let shortDesc = faker.name.jobDescriptor();
        let desc = faker.name.jobDescriptor();
        let tutor = faker.name.jobTitle();

        tutorials.list.push({
            "id": id,
            "imgLink": imgLink,
            "title": title,
            "shortDesc": shortDesc,
            "desc": desc,
            "tutor": tutor,
            "lessonNumber": lessonNumber,
            "duration": duration,
            "link":"./tutorial"
        });

    }
    return { "workers": workers, "tutorials": tutorials }
}



module.exports = generateWorkers