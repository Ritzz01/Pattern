function star(n) {
  let star = 1;
  let space = n - 1;
  let res = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= space; j++) {
      res += " ";
    }
    for (let j = 1; j <= star; j++) {
    //   res += " * ";

    if(j==1 ||i==n ||j==star)
    {
        res += "*";
    }
    else{
        res+=" "
    }
    }

    res += "\n";
    space--;
    star++;
  }
  console.log(res);
}
star(5);

// [Running] node "d:\NoPattern\Pattern\tweleve.js"
//     *
//    **
//   * *
//  *  *
// *****