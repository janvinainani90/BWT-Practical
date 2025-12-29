 var x=parseFloat(prompt("Enter First Number: "));
        var y=parseFloat(prompt("Enter Second Number: "));
        var z=prompt("Enter the Operators('+,-,*,/'):");
        var arith;
        switch (z){
            case '+':
                arith = x+y;
                break;
            case '-':
                arith = x-y;
                break;
            case '*':
                arith = x*y;
                break;  
            case '/':
                arith = x/y;
                break;
        }
        alert("The result is "+arith);
