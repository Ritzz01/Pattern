
// function main(n)
// {
//     let res=""
//     for(let i=1;i<=n;i++)
//     {
//         for(let j=1;j<=n-i;j++)
//         {
//             res+=" "
//         }

//         for(let j=1;j<=i;j++)
//         {
//             res+=j
//         }

//         for(let j=i-1;j>=1;j--)
//         {
//             res+=j
//         }
//         res+="\n"
//     }
// console.log(res);

// }
// main(5)

// [Running] node "d:\NoPattern\Pattern\patternNo.js"
//     1
//    121
//   12321
//  1234321
// 123454321



// function main(n)
// {
//     let res=""
//     for(let i=1;i<=n;i++)
//     {
//         for(let j=1;j<=n-i;j++)
//         {
//             res+=" "
//         }

//         for(let j=i;j>=1;j--)
//         {
//             res+=j
//         }

//         for(let j=2;j<=i;j++)
//         {
//             res+=j
//         }
//         res+="\n"
//     }
// console.log(res);

// }
// main(5)

// [Running] node "d:\NoPattern\Pattern\patternNo.js"
//     1
//    212
//   32123
//  4321234
// 543212345


// function main(n)
// {
//     let res=""
//     for(let i=1;i<=n;i++)
//     {
//         for(let j=1;j<=n-i;j++)
//         {
//             res+=" "
//         }

//         for(let j=n;j>=n-i+1;j--)
//         {
//             res+=j
//         }

//         for(let j=n-i+2;j<=n;j++)
//         {
//             res+=j
//         }
//         res+="\n"
//     }
// console.log(res);

// }
// main(5)

// [Running] node "d:\NoPattern\Pattern\patternNo.js"
//     5
//    545
//   54345
//  5432345
// 543212345

function main(n)
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

        for(let j=n-1;j>=n-i+1;j--)
        {
            res+=j
        }
        res+="\n"
    }
console.log(res);

}
main(5)

// [Running] node "d:\NoPattern\Pattern\patternNo.js"
//     5
//    454
//   34543
//  2345432
// 123454321

