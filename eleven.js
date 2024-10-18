function eleven(n)
{
    let res=""
    for(let i=1;i<=n;i++)
    {
        
        // for(let j=i;j<=n;j++)
        for(let j=1;j<=n-i+1;j++)
        {
            res+=j
        }
       
        res+="\n"
    }
    console.log(res);
    
}
eleven(5)

// [Running] node "d:\NoPattern\Pattern\eleven.js"
// 12345
// 2345
// 345
// 45
// 5


// [Running] node "d:\NoPattern\Pattern\eleven.js"
// 12345
// 1234
// 123
// 12
// 1