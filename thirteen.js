// function star(n) {
//   let star = 1;

//   let res = "";
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= star; j++) {
//       res += "*";
//     }

//     if (i < Math.ceil(n / 2)) {
//       star++;
//     } else {
//       star--;
//     }
//     res += "\n";
//   }
//   console.log(res);
// }
// star(5);


// [Running] node "d:\NoPattern\Pattern\thirteen.js"
// *
// **
// ***
// **
// *


function star(n) {
    let star = 1;
  let space=n-1
    let res = "";
    for (let i = 1; i <= n; i++) {
        for(let j=1;j<=space;j++)
        {
            res+=" "
        }
      for (let j = 1; j <= star; j++) {
        res += "*";
      }
  
      if (i < Math.ceil(n / 2)) {
        star++;
        space--
      } else {
        star--;
        space++
      }
      res += "\n";
    }
    console.log(res);
  }
  star(5);
  
//   [Running] node "d:\NoPattern\Pattern\thirteen.js"
//     *
//    **
//   ***
//    **
//     *