function three(n)
{
    let res=""
    for(let i=1;i<=n;i++)
    {
        for(let j=1;j<i;j++)
        {
            res+=" "
        }

        // for(let j=n;j>=i;j--)
            // for(let j=1;j<=n-i+1;j++)
        for(let j=n-i+1;j>=1;j--)
        {
            res+=j
        }
       
        res+="\n"
    }
    console.log(res);
    
}
three(5)

// [Running] node "d:\NoPattern\Pattern\ten.js"
// 54321
//  5432
//   543
//    54
//     5

// [Running] node "d:\NoPattern\Pattern\ten.js"
// 12345
//  1234
//   123
//    12
//     1

// [Running] node "d:\NoPattern\Pattern\ten.js"
// 54321
//  4321
//   321
//    21
//     1