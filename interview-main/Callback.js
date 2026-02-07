const team = {
  title: "Developers",
  members: ["Alice", "Bob"],
  showMembers: function() {
    this.members.forEach(function(member) {
      console.log(this.title + ": " + member);
    });
  }
};

team.showMembers();
