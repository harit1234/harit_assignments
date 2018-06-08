function ntd (a)
{
    if(typeof a != 'number')
    {
        console.log("number input only")
    }
    else
    {
        var str = a.toString()
        console.log(parseInt(str,10))
    }
}
ntd (0b01101)
ntd ('string')
