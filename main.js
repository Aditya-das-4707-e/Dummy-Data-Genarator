const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Employee = require('./models/Employee');

mongoose.connect('mongodb://127.0.0.1:27017/company');
const port = 3000

app.set('view engine', 'ejs');

const getRandom = (arr) => {
  let rno = Math.floor(Math.random() * arr.length);
  return arr[rno];
}

app.get('/', (req, res) => {
  res.render('index', {foo: 'FOO'});
})

app.get('/generate', async (req, res) => {
  //clear the existing data
  await Employee.deleteMany({});
  //generate random data of employees
  let randomNames = ["Manidipa", "Aditya", "Sourav", "Suman", "Rohit", "Ankita", "Priya", "Rahul", "Neha", "Vikash"];
  let randomSalaries = [3000000, 4000000, 5000000, 6000000, 7000000, 8000000, 9000000, 10000000, 11000000, 12000000];
  let randomIsManager = [true, false];
  let randomLang = ["JavaScript", "Python", "Java", "C++", "Ruby", "Go", "PHP", "Swift", "Kotlin", "TypeScript"];
  let randomCities = ["Bangalore", "Delhi", "Mumbai", "Chennai", "Kolkata"];

  for (let index = 0; index < 10; index++) {
    let e = await Employee.create({
      name: getRandom(randomNames),
      salary: getRandom(randomSalaries),
      language: getRandom(randomLang),
      city: getRandom(randomCities),
      isManager: getRandom(randomIsManager) 
    })
    // await e.save()
  }
  res.render('index', {foo: 'FOO'});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
