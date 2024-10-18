function two(n)
{
    let res=""
    for(let i=1;i<=n;i++)
    {
        for(let j=1;j<=n-i;j++)
        {
            res+=" "
        }
        for(let j=1;j<=i;j++)
            {
                res+=j
            }
        res+="\n"
    }
    console.log(res);
    
}
two(5)

// [Running] node "d:\NoPattern\Pattern\six.js"
//     1
//    12
//   123
//  1234
// 12345