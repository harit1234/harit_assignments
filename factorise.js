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
        //console.log(devisorl)
        //console.log(devisorn)
        var factors = [devisorl , devisorn]
        return factors
        

        
    }   

    console.log(factorise(74)[0][1])
    
    
    