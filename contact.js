var comments = [];
fetch("comments.json")
    .then(response => response.json())
    .then(data => console.log(data));
window.onload = function(){
    document.getElementById("send").onclick = function(){
        var name = document.getElementById("Name").value;
        var email = document.getElementById("Email").value;
        var comment = document.getElementById("Comment").value;
    }
    
}

class Comment{
    constructor(name,email,datetime,comment) {
      this.name = name;
      this.email = email;
      this.datetime = datetime;
      this.comment = comment;
    }
  }