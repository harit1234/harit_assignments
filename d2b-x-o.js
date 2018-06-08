function dtbxo (a,b)
{
    if(typeof a == 'number' && typeof b == 'number')
    {
        if (b == 2)
        {
        var str1 = a.toString(2)
        console.log(parseInt(str1 , b) )
        }
        else if (b == 8)
        {
        var str1 = a.toString(8)
        console.log(str1)
        str1 = '0' + str1
        console.log(parseInt(str1 , 8))
        }
        else if (b == 16){
            var str1 = a.toString(16)
            console.log(parseInt(str1 , b))
            }

    }
    else
    {
        console.log('number input only')
    }
    
}
dtbxo(8,8)
dtbxo(0xfe,2)
