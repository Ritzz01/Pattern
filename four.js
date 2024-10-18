function one(n)
{
    let res=""
    for(let i=1;i<=n;i++)
    {
        for(let j=n;j>=n-i+1;j--)
        {
           res+=j
        }
        res+="\n"
    }
    console.log(res);
    
}
one(5)

// 5
// 54
// 543
// 5432
// 54321