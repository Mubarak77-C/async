//console.log("hi");

const server = {
  people: [
    {
      name: "Odin",
      age: 20,
    },
    {
      name: "Thor",
      age: 35,
    },
    {
      name: "Freyja",
      age: 29,
    },
  ],

  getPeople() {
    return new Promise((resolve, reject) => {
      // Simulating a delayed network call to the server
      setTimeout(() => {
        resolve(this.people);
      }, 2000);
    });
  },
};

//get map +promisall
const namesToSearch = ["Odin", "Thor", "Freyja"];

const getPromises = async (names) => {
  try {
    const response = await server.getPeople(); //array getting first from prmise
    // console.log(response);
    const promiseArr = names.map(async (params) => {
      const findPerson = response.find((person) => person.name === params);
      return findPerson;
    });
    const results = await Promise.all(promiseArr);
    return results;
  } catch (error) {
    console.error("Error:", error);
  }
};

// Calling it: map is not for obj where in parameter server defined so arr
getPromises(namesToSearch).then((results) => {
  console.log(results);
  // Output:
  // [ { name: 'Odin', age: 20 }, { name: 'Thor', age: 35 } ]
});

const getPersonsInfo = async (name) => {
  // do something asynchronously and return a promise
  // 1. Wait for the server to return the array of people
  try {
    const people = await server.getPeople(); //calling method getPeople()
    // 2. Once you have the array, you can use regular array methods like .find()
    const person = people.find((person) => person.name === name);

    return person;
  } catch (error) {
    console.error("error is :", error);
    throw error;
  }
};

// Example of calling it:
//getPersonsInfo("Rai") //will undefined because in obj arr server not have this name rai
getPersonsInfo("Odin")
  .then((person) => {
    console.log(person);
  })
  .catch((err) => {
    console.log(err);
  });

//fetch api await async with promise with all json return promise etc

const img = document.querySelector("img");

async function getDog() {
  try {
    // This API is completely public and requires no key!
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const dogData = await response.json();

    // The Dog API returns a simple object: { message: "URL_HERE", status: "success" }
    img.src = dogData.message;
  } catch (error) {
    console.error("Something went wrong:", error);
  }
}

getDog();
