function counter (n){
    return function(){
        return n++;
    }
}
const count = counter(10);

console.log(count());//11
console.log(count());//12
console.log(count());//13