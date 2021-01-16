//Function to add post
const addPost = async () => {
  //   const response = await fetch("/api/posts/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //   });

  //   if (response.ok) {
  //create elements here
  var body = document.querySelector(".body");
  var newDiv = document.createElement("div");
  var headerDiv = document.createElement("div");
  var contentDiv = document.createElement("div");
  var titleInput = document.createElement("input");
  var contentInput = document.createElement("input");
  var submitBtn = document.createElement("button");

  body.appendChild(newDiv);
  newDiv.appendChild(headerDiv);
  newDiv.appendChild(contentDiv);
  headerDiv.appendChild(titleInput);
  contentDiv.appendChild(contentInput);
  contentDiv.appendChild(submitBtn);
  //   } else {
  //     alert(response.statusText);
  //   }
  console.log("success");
};

//Query selector for input functions

//Function to update post

//Function to comment on post

//Event listeners for buttons
function init() {
  document.querySelector(".addPost").addEventListener("click", addPost);
}
init();