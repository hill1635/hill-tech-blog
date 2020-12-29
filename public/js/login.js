const loginFormHandler = async (event) => {
  event.preventDefault();
  console.log("Success");

  const username = document.querySelector(".loginName").value.trim();
  const password = document.querySelector(".loginPass").value.trim();

  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in");
    }
  }
};

//Event listener not working?

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);