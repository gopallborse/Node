const person = {
  name: "Gopal",
  age: 31,
  // greet: () => {
  //     console.log('Hi, I am ' + this.name);
  // }
  // greet: function() {
  //     console.log('Hi, I am ' + this.name);
  // }
  greet() {
    console.log("Hi, I am " + this.name);
  },
};
// console.log(person);
// person.greet();

const hobbies = ["Sports", "Cooking"];
// for(let hobby of hobbies) {
//     console.log(hobby);
// }

// console.log(hobbies);
// console.log(hobbies.map(hobby => {
//     return 'Hobby: ' + hobby;
// }));

// hobbies.push('Programming');
// console.log(hobbies);

// spread operator
// const copiedArray = hobbies.slice();
// const copiedArray = [hobbies];
// const copiedArray = [...hobbies];
// console.log(copiedArray);
// const copiedPerson = {...person};
// console.log(copiedPerson);

// rest operator
// const toArray = (arg1, arg2, arg3) => {
//   return [arg1, arg2, arg3];
// };
// console.log(toArray(1, 2, 3));
// const toArray = (...args) => {
//   return args;
// };
// console.log(toArray(1, 2, 3, 4, 5));

// destructuring
// const printName = (personData) => {
//     console.log(personData.name);
// }
// printName(person);
// const printName = ({name}) => {
//     console.log(name);
// }
// printName(person);
// const { name, age } = person;
// console.log(name, age);
// const [hobby1, hobby2] = hobbies;
// console.log(hobby1, hobby2);

// async operations
// const fetchData = (callback) => {
//     setTimeout(() => {
//       callback("Done!");
//     }, 1500);
//   };
//   setTimeout(() => {
//     console.log("Timer is done!");
//     fetchData((text) => {
//       console.log(text);
//     });
//   }, 2000);
//   console.log("Hi");
//   console.log("Hello");

// const fetchData = () => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Done!");
//     }, 1500);
//   });
//   return promise;
// };
// setTimeout(() => {
//   console.log("Timer is done!");
//   fetchData().then((text) => {
//     console.log(text);
//     return fetchData().then((text2) => {
//       console.log(text2);
//     });
//   });
// }, 2000);
// console.log("Hi");
// console.log("Hello");

const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, 1500);
  });
  return promise;
};
setTimeout(() => {
  console.log("Timer is done!");
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then((text2) => {
      console.log(text2);
    });
}, 2000);
console.log("Hi");
console.log("Hello");
