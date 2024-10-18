function butter(n) {
  let res = "";
  let star = 1;
  let space = n - 2;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= star; j++) {
      res += "*";
    }
    for (let j = 1; j <= space; j++) {
      res += " ";
    }
    for (let j = 1; j <= star; j++) {
      res += "*";
    }

    res += "\n";
    if (i <Math.ceil(n / 2)) {
      star++;
      space-=2;
    
    } else {
      star--;
      space+=2;
     
    }
  }
  console.log(res);
}
butter(12);

// [Running] node "d:\NoPattern\Pattern\Butterfly.js"
// *          *
// **        **
// ***      ***
// ****    ****
// *****  *****
// ************
// *****  *****
// ****    ****
// ***      ***
// **        **
// *          *