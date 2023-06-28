document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("informForm");
  var Message = document.getElementById("Message");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var phoneInput = document.getElementById("phone");
    var commentInput = document.getElementById("comment");

    var nameValue = nameInput.value.trim();
    var emailValue = emailInput.value.trim();
    var phoneValue = phoneInput.value.trim();
    var commentValue = commentInput.value.trim();

    
    if (nameValue === "" || emailValue === "" || phoneValue === "" || commentValue === "") {
      alert("Make sure that everything is filled in!");
    } else {
      
      Message.style.display = "block";
      form.style.display = "none";

      
      form.reset();
    }
  });
});