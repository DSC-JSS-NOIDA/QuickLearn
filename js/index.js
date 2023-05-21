

let category = document.getElementsByClassName('category');

const selectBtn = document.querySelectorAll(".btn-style");
const contributionBtn = document.querySelector(".contribution-btn");

for (let i = 0; i < category.length; i++) {

    category[i].querySelector('.btn-style').addEventListener('click', () => {

        contributionBtn.style.backgroundColor = "white";
        contributionBtn.style.color = "black";
        for (let j = 0; j < category.length; j++) {
            selectBtn[j].style.backgroundColor = "white";
            selectBtn[j].style.color = "black";
        }
        selectBtn[i].style.backgroundColor = "#6940d3";
        selectBtn[i].style.color = "white";

        for (let i = 0; i < category.length; i++) {
            let x = category[i].querySelector('.select-option');
            x.style.display = "none";
        }

        let x = category[i].querySelector('.select-option');
        x.style.display = "block";

    })
}

const Body = document.getElementsByTagName("body");
const para = document.getElementById("mainParagraph");
const List = document.querySelectorAll("#contactList > li");
const icon1 = document.getElementById("darkSwitch1");
const icon2 = document.getElementById("darkSwitch1");
const sidebar = document.getElementById("sidebar");
const List2 = document.querySelectorAll("button.link-dark");
const list = document.getElementById("categoryList")
const text = document.getElementById("categoryText");
const hr = document.getElementsByClassName("catHr");
const head = document.getElementById("contriHead");
const List3 = document.querySelectorAll("li.font");
const $points = document.querySelectorAll("div.points");
console.log(List2);

function dark_mode() {
    var isDarkModeEnabled = document.body.classList.contains("dark");
  
    if (isDarkModeEnabled) {
      document.body.classList.remove("dark");
      localStorage.setItem("darkModeEnabled", "false");
    }else {
      document.body.classList.add("dark");
      localStorage.setItem("darkModeEnabled", "true");
    }
}

if (Number(sessionStorage.getItem("switch"))) {
    if (window.location.href.includes("index.html")) {
        icon1.classList.toggle("fa-sun");
        Body[0].classList.toggle("dark");
        para.classList.toggle("dark-para");
        for (i = 0; i < List.length; i++) {
            List[i].classList.toggle("dark-list");
        }
    }
    else {
        icon2.classList.toggle("fa-sun");
        Body[0].classList.toggle("dark");
        sidebar.classList.toggle("dark-side-bar");
        for (i = 0; i < List2.length; i++) {
            List2[i].classList.toggle("dark-list-2");
        }
        text.classList.toggle("dark-text");
        for (i = 0; i < hr.length; i++) {
            hr[i].classList.toggle("dark-hr");
        }
        head.classList.toggle("dark-head");
        for (i = 0; i < List3.length; i++) {
            List3[i].classList.toggle("dark-list-3");
        }
        for (i = 0; i < $points.length; i++) {
            $points[i].classList.toggle("dark-points");
        }
    }
}

function copy(id){
    const text = document.getElementById(id.slice(0,id.length-1)).innerText;
    document.getElementById(id).innerText = "Copied";
    const elem = document.createElement('textarea');
    elem.value = text;
    document.body.appendChild(elem);
    navigator.clipboard.writeText(elem.value);
    document.body.removeChild(elem);
}



