// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.

const lightDarkModeElement = document.querySelector("#toggle");

const applyMode = function (mode) {
    let icon, circleColor;

    if (mode === "light") {
        icon = "🌞";
        circleColor = "#ffb100";
    } else {
        icon = "🌚";
        circleColor = "#8570a5";
    }

    lightDarkModeElement.textContent = icon;

    document.body.classList = mode;

    document.documentElement.style.setProperty("--circle-color", circleColor);
};

const handleModeToggle = function () {
    const mode = readMode();

    let nextMode;

    if (mode === "light") {
        nextMode = "dark";
    } else {
        nextMode = "light";
    }

    applyMode(nextMode);

    saveMode(nextMode);
};

lightDarkModeElement.addEventListener("click", handleModeToggle);

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.

const readLocalStorage = function () {
    const stringData = localStorage.getItem("blogs");

    const data = JSON.parse(stringData);

    return data || [];
};

const readMode = function () {
    const mode = localStorage.getItem("mode") || "dark";

    return mode;
};

const saveMode = function (mode) {
    localStorage.setItem("mode", mode);
};

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.

const storeLocalStorage = function (data) {
    const allBlogs = readLocalStorage();

    allBlogs.push(data);

    const stringData = JSON.stringify(allBlogs);

    localStorage.setItem("blogs", stringData);
};

applyMode(readMode());

// ! Use the following function whenever you need to redirect to a different page
let redirectURL = "";

const redirectPage = function (url) {
    redirectURL = url;
    location.assign(url);
};
