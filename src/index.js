document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.addEventListener("DOMContentLoaded", () => {
    // Select the form element
    const form = document.querySelector("form");

    // Add an event listener for the submit event
    form.addEventListener("submit", (event) => {
      // Prevent the default form submission behavior
      event.preventDefault();

      // Your custom form submission logic here
      console.log("Form submission prevented!");

      // Example: Get the form data
      const formData = new FormData(form);
      for (const [name, value] of formData) {
        console.log(`${name}: ${value}`);
      }
    });
  });
});
