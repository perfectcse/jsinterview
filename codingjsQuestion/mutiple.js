// Can a Function Have Multiple return Statements?
//Yes.

function agecheck(age){
    if(18>age){
        return ("Eligible for voting");
    }

return ("Not Eligible for voting");
}
console.log(agecheck(20));
console.log(agecheck(15));