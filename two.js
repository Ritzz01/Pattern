function one(n)
{
    let res=""
    for(let i=1;i<=n;i++)
    {
        for(let j=1;j<=i;j++)
        {
           res+=j
        }
        res+="\n"
    }
    console.log(res);
    
}
one(5)

// 1
// 12
// 123
// 1234
// 12345
