function two(n)
{
    let res=""
    for(let i=1;i<=n;i++)
    {
        for(let j=1;j<=n-i;j++)
        {
            res+=" "
        }
        for(let j=i;j>=1;j--)
            {
                res+=j
            }
        res+="\n"
    }
    console.log(res);
    
}
two(5)

// [Running] node "d:\NoPattern\Pattern\seven.js"
//     1
//    21
//   321
//  4321
// 54321
