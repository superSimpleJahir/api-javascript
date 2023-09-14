// Make promises store variable

const promisesOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Aysnc task is compelete.');
    resolve()
  }, 1000);
})

promisesOne.then(() => {
  console.log('Promises Consumed');
})


// Make promises without variable

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Async task 2');
    resolve();
  }, 1000)
}).then(() => {
  console.log('Async 2 reolved');
});


const promisesThree = new Promise((resolved, reject) => {
  setTimeout(() => {
    resolved({ userName: 'Jahir', email: 'Jahir@gmail.com', password: '1234' })
  }, 1000);
});

promisesThree.then((user) => {
  console.log(user.password);
});

const promisesFour = new Promise((resolved, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolved({ userName: 'Jahir', email: 'Jahir@gmail.com', password: '1234' })
    } else {
      reject('ERROR: Something want wromg')
    }
  }, 1000);
})

promisesFour
  .then((user) => {
    console.log(user.userName);
    console.log(user.email);
    console.log(user.password);
    return user;
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log('The promise is either resolved or rejected'));


// async function getAllUser() {
//   try {
//     const respons = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await respons.json();
//     console.log(data[0]);
//   } catch (error) {
//     console.log('E: ', error);
//   }
// }
// getAllUser()

fetch('https://jsonplaceholder.typicode.com/users')
  .then((respons) => {
    return respons.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error))



function x(y) {
  if (y < 1) return 5;

  var z = x(y - 1) + 1
  console.log(z)
  return z
}

x(1)