var body = document.querySelector(".body");
var newDiv = document.createElement("div");
var headerDiv = document.createElement("div");
var contentDiv = document.createElement("div");
var titleInput = document.createElement("input");
var contentInput = document.createElement("input");
var submitBtn = document.createElement("button");

const submitPost = async () => {
  var title = titleInput.value;
  var content = contentInput.value;

  const response = await fetch("/api/posts/", {
    method: "POST",
    body: JSON.stringify({
      title: content,
      content: title,
    }),
    headers: { "Content-Type": "application/json" },
  });
  console.log("response: ", response);

  if (response.ok) {
    console.log("success");
    // headerDiv.setAttribute("style", "display: none");
  } else {
    console.log("status text: ", response.statusText);
  }
};

//Function to add post
const addPost = async () => {
  //create elements here
  body.appendChild(newDiv);
  newDiv.appendChild(headerDiv);
  newDiv.appendChild(contentDiv);
  headerDiv.appendChild(titleInput);
  contentDiv.appendChild(contentInput);
  contentDiv.appendChild(submitBtn);

  submitBtn.addEventListener("click", submitPost);
};

//Query selector for input functions

//Function to update post

//Function to comment on post

//Event listeners for buttons
function init() {
  document.querySelector(".addPost").addEventListener("click", addPost);
}
init();
