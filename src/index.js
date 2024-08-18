import "./style.css";
import loadFontAwesome from './javascript/icons.js';

loadFontAwesome();


const tab_swtiches = document.querySelectorAll(".tab_switch");
const content_page = document.querySelectorAll(".content");

tab_swtiches.forEach((tab,index) => {

    tab.addEventListener("click", (e) => {
        tab_swtiches.forEach((tab) => {
            tab.classList.remove("active");
        });
        tab.classList.add("active");

        content_page.forEach((content) => {
            content.classList.add("hidden");
        });
        content_page[index].classList.remove("hidden");
    });
});