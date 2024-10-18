function two(n)
{
    let res=""
    for(let i=1;i<=n;i++)
    {
        for(let j=1;j<=n-i;j++)
        {
            res+=" "
        }
        for(let j=n;j>=n-i+1;j--)
            {
                res+=j
            }
        res+="\n"
    }
    console.log(res);
    
}
two(5)

// [Running] node "d:\NoPattern\Pattern\eight.js"
//     5
//    54
//   543
//  5432
// 54321
