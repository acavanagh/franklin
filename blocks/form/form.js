export default function decorate(block) {
  var form = document.createElement("form");
  // Create the input elements
  var emailInput = document.createElement("input");
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("name", "email");
  emailInput.setAttribute("placeholder", "foo@bar.com");
  block.append(emailInput);
  form.appendChild(emailInput);  

  var messageInput = document.createElement("input");
  messageInput.setAttribute("type", "text");
  messageInput.setAttribute("name", "message");
  messageInput.setAttribute("placeholder", "message here");
  block.append(messageInput);
  form.appendChild(messageInput);

  // Create the submit button
  var button = document.createElement("button");
  button.setAttribute("type", "submit");
  button.innerHTML = "Search";  
  const url = "https://ms-forms-service-staging.digitalpfizer.com/api/v2/forms";
  submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    const email = emailInput.value;
    const message = messageInput.value;

    const data = { email: email, message: message };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-config-token": "your_token" },
      body: JSON.stringify(data)
    };

    fetch("https://your-api-endpoint.com/submit", options)
      .then(response => response.json())
      .then(data => {
        console.log("Success:", data);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  });
}
