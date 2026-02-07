const user = {
  name: "Visha",
  regular: function() {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  }
};

user.regular();
user.arrow();
