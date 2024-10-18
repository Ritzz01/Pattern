function one(n)
{
    let res=""
    for(let i=1;i<=n;i++)
    {
        for(let j=i;j>=1;j--)
        {
           res+=j
        }
        res+="\n"
    }
    console.log(res);
    
}
one(5)


// 1
// 21
// 321
// 4321
// 54321
