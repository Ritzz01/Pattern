
function Armstrong(n){
    let length=0
    let sum=0
    let temp=n

    while(n>0)
    {
        length++
        n=Math.trunc(n/10)
    }

    n=temp

    while(n>0)
    {
        let fact=1;
        let digit=n%10

        for(let i=1;i<=length;i++)
        {
            fact*=digit
        }

        sum+=fact
        n=Math.trunc(n/10)

    }

    if(sum==temp)
    {
        return true
        
    }
    else{
      return false
        
    }
}


// let count=0
// for(let i=100;i<=1000;i++)
// {
//     if(Armstrong(i))
//     {
//         // console.log(i);

//         if(count<3)
//         {
//             console.log(i);
            
//         }
//         count++
//     }
// }


let start=153
for(let i=--start;true;--i)
{
    if(Armstrong(i))
    {
        console.log(i);
        break;
    }
}