const addPostBtn = document.querySelector(".addPost");
//Function to add post
const newPost = async () => {
  const response = await fetch("/api/posts/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    //create elements here
  } else {
    alert(response.statusText);
  }
};
//Query selector for input functions

//Function to update post

//Function to comment on post

//Event listeners for buttons
