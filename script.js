// function login(callback) {
//   setTimeout(() => {
//     console.log("✓ login হল");
//     callback({ id: 1, name: "Rahim" });
//   }, 1000);
// }

// function getPosts(user, callback) {
//   setTimeout(() => {
//     console.log("✓ post আনা হল");
//     callback(["Post 1", "Post 2"]);
//   }, 1000);
// }

// function getComments(post, callback) {
//   setTimeout(() => {
//     console.log("✓ comment আনা হল");
//     callback(["ভালো!", "দারুণ!"]);
//   }, 1000);
// }

// function user(value) {
//   return value;
// }

// login((user) => {
//   getPosts(user, (post) => {});
// });

// new Promise((resolve, reject) => {

// })

// * Promise
// function coinFlip() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const value = Math.random(); // 0.25 | 0.56 | 0.14

//       if (value > 0.5) {
//         resolve("Head");
//       } else {
//         reject(new Error("Tail"));
//       }
//     }, 1000);
//   });
// }

// coinFlip()
//   .then((result) => console.log("Jodi 0.5 theke boro hy", result))
//   .catch((err) => console.log("0.5 Theke choto ba soman", err))
//   .finally(() => console.log("Toss Sesh"));

// console.log(new Date());

// setTimeout(() => {
//   console.log(new Date());
// }, 5000);

const clock = document.getElementById("clock");

function showTime() {
  clock.innerText = new Date().toLocaleTimeString("en-US");
}

showTime();
setInterval(showTime, 1000);
