function saveDetails() {
  //get the values entered by the user
  var name = document.getElementById("name");
  var email = document.getElementById("email");

  //create an object to store the user's details
  var user = {
    name: "name",
    email: "email",
  };

  //convert the object to a to string using JSON
  var userJSON = JSON.stringify(user);

  //save the user details to the local storage
  localStorage.setItem("name", userJSON);

  //confirm to the user that their detail have been saved
  alert("Details saved to local storage");
}
