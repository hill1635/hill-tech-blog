const signUpHandler = async (event) => {
  event.preventDefault();
  console.log("Success");

  const username = document.querySelector(".signupName").value.trim();
  const password = document.querySelector(".signupPass").value.trim();

  if (username && password) {
    const newUser = await fetch("/api/users/", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (newUser.ok) {
      fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });
      document.location.replace("/");
    } else {
      alert("Username or password format not correct");
    }
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signUpHandler);