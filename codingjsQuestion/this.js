// Difference in this
//const user  = {
  //  name : "Vishal",

    ///greet: function(){
       // console.log(this.name)
    //}
//};
//user. greet()


// Arrow Function
//const user = {
    //name: "Vishal",

    //greet: () => {
    //    console.log(this.name);
  //  }
//};

//user.greet();
 
// In typical modern module environments, this does not print "Vishal" because the arrow function doesn't receive this from the user object

//3. Why is Lexical this useful?
//const user = {
    //name: "Vishal",

    //greet: function () {
        //setTimeout(() => {
      //      console.log(this.name);
    //    }, 1000);
  //  }
//};

//user.greet();



// 4. Difference in arguments Object
function show(a, b) {
    console.log(arguments.length);
}

show(10, 20, 30, 40);
