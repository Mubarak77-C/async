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
