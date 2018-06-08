//10 random int > 100
for(let a = 0 ; a < 10 ; a++)
{
    let b = Math.random()*1000
    while(b < 101)
    {
        b = Math.random()*1000

    }
    console.log(Math.round(b))
}

