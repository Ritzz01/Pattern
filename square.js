function square(n){
    // let res=""
    // let k=1
    // for(let i=1;i<=n;i++)
    // {
    //     for(let j=1;j<=n;j++)
    //     {
    //          res+=k++
    //     }
    //     res+="\n"
    // }
    // console.log(res);


    
// [Running] node "d:\NoPattern\Pattern\square.js"
// 12345
// 678910
// 1112131415
// 1617181920
// 2122232425


    let res=""

    for(let i=1;i<=n;i++)
    {
        if(i%2!=0)
        {
            let k=(i-1)*n+1

            for(let j=1;j<=n;j++)
            {
                res+=k++
            }
        }
        else{
            let k=n*i
            for(let j=1;j<=n;j++)
                {
                    res+=k--
                }
        }
        res+="\n"
    }
    console.log(res);
    
}
square(5)

// [Running] node "d:\NoPattern\Pattern\square.js"
// 12345
// 109876
// 1112131415
// 2019181716
// 2122232425