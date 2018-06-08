function highelm (array)
{
   if ( !Array.isArray(array) )
   {
    console.log("Array input only")
   }
   else
   {
    let length = array.length
    let i = 0
    while ( i<length )
    {
       if ( typeof (array[i]) != 'number')
       {
        console.log('number array only')
        break
       }
       else
       {
            if(array[i]>array[i+1])
            {
                var h = i
            }
            else if(array[i]<array[i+1])
            {
                var h = i+1
            }
            /*else if(array[i]==array[i+1])
            {
                h.push(i+1)
            }*/
       }
       i++
    }
   }
   if(Array.isArray(h))
   {
       return h[0]
   }
   else
   {
       return array[h]
   }
}
var a = [1 , 2 ,5 ,6 ,4 ,18]
console.log(highelm (a))
highelm(a[1])
var a = [2 , 'gg']
highelm(a)
