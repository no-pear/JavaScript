// setTimeout(function() {
//     var a = 'hello'
//     setTimeout(function() {
//         var b = 'lagou'
//         setTimeout(function() {
//             var c = 'I ❤️ U'
//             console.log(a + b + c)
//         }, 2000);
//     }, 2000);
// }, 2000);

// let test = e => ({})
// console.log(test())
// Promise.resolve()
//   .then(() => {
//     console.log("then1");
//     Promise.resolve()
//       .then(() => {
//         console.log("then1-1");
//         return 1;
//       })
//       .then(() => {
//         console.log("then1-2");
//       });
//   })
//   .then(() => {
//     console.log("then2");
//   })
//   .then(() => {
//     console.log("then3");
//   })
//   .then(() => {
//     console.log("then4");
//   });

new Promise((resolve, reject) => {
    console.log("A");
    setTimeout(() => {
      console.log("B");
    }, 0);
    console.log("C");
    resolve();
    console.log("D");
  })
    .then(() => {
      console.log("E");
      new Promise((resolve, reject) => {
        console.log("F");
        resolve();
        console.log("G");
      })
        .then(() => {
          setTimeout(() => {
            console.log("H");
          }, 0);
          console.log("I");
        })
        .then(() => {
          console.log("J");
        });
    })
    .then(() => {
      console.log("K");
    });
  
  setTimeout(() => {
    console.log("L");
  }, 0);
  
  new Promise((resolve, reject) => {
    console.log("M");
    resolve();
  }).then(() => {
    setTimeout(() => {
      new Promise((resolve, reject) => {
        console.log("N");
        resolve();
      })
        .then(() => {
          setTimeout(() => {
            console.log("O");
          }, 0);
        })
        .then(() => {
          console.log("P");
        });
    }, 0);
  });
  
  console.log("Q");