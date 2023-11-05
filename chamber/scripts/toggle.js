const darkSwitch = document.querySelector(".switch");
const checkbox = document.querySelector(".switch input");
darkSwitch.addEventListener("click", () => {
    const header = document.querySelector("header");
    if (checkbox.checked == true) {
        header.classList.toggle("dark");
        document.body.classList.toggle("dark");
        

    }
    else {
        header.classList.remove("dark");
        document.body.classList.remove("dark");
    }
});