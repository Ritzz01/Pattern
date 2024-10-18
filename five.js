function one(n)
{
    let res=""
    for(let i=1;i<=n;i++)
    {
        for(let j=n-i+1;j<=n;j++)
        {
           res+=j
        }
        res+="\n"
    }
    console.log(res);
    
}
one(5)

// 5
// 45
// 345
// 2345
// 12345
