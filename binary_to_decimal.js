function ntd (a)
{
    if(typeof a != 'number')
    {
        console.log("number input only")
    }
    else
    {
        console.log(parseInt(a,10))
    }
}
ntd (0b01101)
ntd ('string')
