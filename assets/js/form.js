// TODO: Create a variable that selects the form element

const formEl = document.querySelector("form");

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.

const handleFormSubmit = function (event) {
    event.preventDefault();

    const usernameEl = document.querySelector("#username").value.trim();
    const titleEl = document.querySelector("#title").value.trim();
    const contentEl = document.querySelector("#content").value.trim();

    if (!usernameEl || !titleEl || !contentEl) {
        const errorEl = document.querySelector("#error");
        errorEl.textContent = "Please complete the form.";

        setTimeout(function () {
            errorEl.textContent = "";
        }, 4000);

        return;
    }

    const formData = {
        username: usernameEl,
        title: titleEl,
        content: contentEl,
    };

    storeLocalStorage(formData);
    redirectPage("blog.html");
};

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.

formEl.addEventListener("submit", handleFormSubmit);
