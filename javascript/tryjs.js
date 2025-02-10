/*function checkPasswordStrength(password){
    console.log(password.lenght>=8 ) ;
    console.log(password.length>=6 )
    console.log(password.length )
    if (password.length >=8 ){
        return "strong" ;
    } 
        
    else if(password.length >=6 && password.lenght<8){
    return "medium" ;
}
    else {
        return "weak" ;
    }

}

const password = "dipeshhhhh" ;
// alert("Password Strenght is : );
console.log( checkPasswordStrength(password))



function checkYearOddEven(year) {
    if (year % 2 === 0) {
        return "Even Year";
    } else {
        return "Odd Year";
    }
} 

// Example usage:
const year = 5;
alert("The year " + year + " is an " + checkYearOddEven(year) + ".");



alert("manish kharel"); 
*/


function personLoan(loan,age){
    if(age>=25 && loan>30000){
        return "Eligible for loan";
    }
    else{
        return "Not eligilbel for loan" ;
    }
    
}

const age = 40 ;
const income =35000;
const store = personLoan(income,age);

console.log("Ram income is" , income , "And Age is" , age , store);