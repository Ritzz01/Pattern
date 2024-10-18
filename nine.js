function two(n)
{
    let res=""
    for(let i=1;i<=n;i++)
    {
        for(let j=1;j<=n-i;j++)
        {
            res+=" "
        }
        for(let j=n-i+1;j<=n;j++)
            {
                res+=j
            }
        res+="\n"
    }
    console.log(res);
    
}
two(5)

// [Running] node "d:\NoPattern\Pattern\nine.js"
//     5
//    45
//   345
//  2345
// 12345