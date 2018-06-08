function hcf(a,b)
{
    if(a%b==0)
    
    {
        return b
    }
     else if (b%a==0)
    {
        return a
    }
    else
    {
        let hcfp = []
        let hcff = []

        factorise(a)
        factorise(b)
        var factna = factorise(a)[0].length
        var factnb = factorise(b)[0].length
        let temp = 0
        while(temp <= factna)
        {
            let temp1 = 0
            while(temp1 <= factnb)
            {
                if( factorise(a)[0][temp] != factorise(b)[0][temp1] )
                {
                    temp1++
                }
                else
                {
                    hcff.push(factorise(a)[0][temp])
                    if( factorise(a)[1][temp] <= factorise(b)[1][temp1] )
                    {
                        hcfp.push(factorise(a)[1][temp])
                    }
                    else if ( factorise(a)[1][temp] > factorise(b)[1][temp1] )
                    {
                        hcfp.push(factorise(b)[1][temp1])
                    }
                    break
                }
                
            }
            temp++
        }
       // console.log(hcff)
       // console.log(hcfp)
        var result = 1
        if ( hcfp.length != 0)
        {
            temp = 0
            while(temp < hcfp.length)
            {
                result = result * Math.pow(hcff[temp] , hcfp[temp])
                //console.log(result)
                temp ++
            }
            return result
        }
        else
        {
            console.log("co prime numbers")
        }
        
    }


    function factorise(a)
    {
        let devisorl = []
        let devisorn = []
        if(typeof a != 'number')
        {
            console.log('number input only')
        }
        else
        {
            if(a%1!=0)
            {
                console.log('whole numbers only')
            }
            else
            {
                let x = 2
              while(x<=a)
                {

                    //console.log(x)
                    if(a%x != 0)
                    {
                        x++
                    }
                    else
                    {  
                        var temp = a
                        var n = 0
                        while(temp%x==0)
                        {
                            temp=temp/x
                           // console.log(temp)
                            n++
                        }
                        let length = devisorl.length

                        temp = 0
                        var primecheck = true
                        //console.log('length'+length)
                        while(temp < length)
                        {
                            if(x % devisorl[temp]==0)
                            {
                                primecheck = false
                                break
                            }
                            else
                            {
                                primecheck = true
                                temp++
                            }
                        }                        
                        if(primecheck)
                        {
                        devisorl.push(x)
                        devisorn.push(n)
                        }
                        x++
                        //console.log(x)
                    }
                }
            }
        }
        var factors = [devisorl , devisorn]
        return factors
        
    }   
}    
    console.log(hcf ( 24 , 36 ))
    
    