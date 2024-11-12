// TODO: Create a variable that selects the main element, and a variable that selects the back button element

const mainEl = document.querySelector("main");
const backBtnEl = document.querySelector("#back");

// TODO: Create a function that builds an element and appends it to the DOM

const buildElement = function (type, text, parent) {
    const tag = document.createElement(type);
    tag.textContent = text;
    parent.appendChild(tag);

    return tag;
};

// TODO: Create a function that handles the case where there are no blog posts to display

const handleEmpty = function () {
    buildElement("h2", "No Blog posts yet...", mainEl);
    const a = buildElement("a", "Enter your own submission here!", mainEl);

    a.href = "./index.html";
};

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.

const renderBlogList = function () {
    const blogs = readLocalStorage();

    if (!blogs.length) {
        handleEmpty();

        return;
    }

    for (const blog of blogs) {
        const article = buildElement("article", null, mainEl);

        buildElement("h2", blog.title, article);
        buildElement("blockquote", blog.content, article);
        buildElement("p", `Posted by: ${blog.username}`, article);

        article.classList.add("card");
    }
};

// TODO: Call the `renderBlogList` function

renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked

backBtnEl.addEventListener("click", function () {
    redirectPage("index.html");
});
