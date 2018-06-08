function fdp(number,place)
{
    if (typeof number != 'number')
    {
        console.log("number input only")
    }
    else
    {
        let numstr = number.toString()
        let numstr1 = numstr.split('.')
        let predec = numstr1[0]
        let postdec = numstr1[1]
        let answer = predec + '.'
        let i = 0
        while (i < place)
        {
            answer = answer + postdec[i]
            i++;
        }
        return parseFloat(answer)
    }
}
let a = Math.random()
console.log(a)
console.log(fdp(a , 5 ))
console.log(fdp(55.123456789, 1))