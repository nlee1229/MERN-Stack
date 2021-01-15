const { response } = require('express');
// import express and faker
const express = require('express');
const faker = require('faker');

// create application
// creating a var called app, then setting it = invoking the express function
const app = express();

class User {
    constructor() {
        this.id = faker.random.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
console.log(new User())

class Company {
    constructor() {
        this.id = faker.random.number();
        this.name = faker.company.companyName();
        this.address = {
            streetName: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}
// console.log(new Company())


app.use(express.json());

// Create an api route "/api/companies/new" that returns a new company
app.get('/api/users/new', (req, res) => {
    res.json(
        new User()
    )
})

app.get('/api/companies/new', (req, res) => {
    res.json(
        new Company()
    )
})

app.get('/api/user/company', (req, res) => {
    res.json(
        { newUser: new User(), newCompany: new Company() }
    )
})

app.listen(8000, () => console.log('listening on port 8000'));
