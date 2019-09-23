let faker = require('faker');

//git repo
//https://github.com/marak/Faker.js/

let generateWorkers = () => {
    let workers = [];
    let tutorials =[];

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
        let title = faker.name.title();
        let lessonNumber = faker.random.number(1,30);
        let duration = faker.random.number(1,20);
        let description = faker.name.jobDescriptor()
        let tutor = faker.name.lastName;

        tutorials.push({
            "id": id,
            "title": title,
            "description": description,
            "tutor": tutor,
            "lessonNumber": lessonNumber,
            "duration": duration
        });
    }

    return { "workers": workers, "tutorials": tutorials }
}

module.exports = generateWorkers