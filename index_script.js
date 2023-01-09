// search box function
function searchBox() {
    const searchIcon = document.getElementById("searchIcon");
    const searchBox = document.getElementById("searchBox");
    const searchInput = document.getElementById("inp");
    if (searchIcon.className === "fa fa-search") {
        searchIcon.style.transition = "all 0.3s ease 0s";
        searchIcon.className = "fa fa-close";
        searchIcon.style.transform = "rotate(90deg)";

        searchBox.style.width = 10 + "rem";

        searchInput.disabled = false;
        searchInput.focus();
    } else {
        searchBox.style.width = 0 + "rem";
        searchIcon.style.transform = "rotate(0deg)";

        setTimeout(function () {
            searchIcon.style.transition = "all 0s";
            searchIcon.className = "fa fa-search";
        }, 190);

        searchInput.disabled = true;
        searchInput.value = "";
    }
}

function search(ele) {
    if (event.key === 'Enter') {
        // split the search string into an array of words
        let searchWords = ele.value.split(" ");
        let searchString = "";
        searchWords.forEach(function () {
            // joint with'+' to make a search string
            searchString = searchWords.join("+");
        });
        // search the string if the search box is not empty
        if (searchString !== "") {
            location.href = "./search/search.html?search=" + searchString;
        }
    }
}

// reveal function
function reveal() {
    const scroller = document.querySelector(".main");
    let distance = scroller.scrollTop;
    let offset = 120;
    console.log(distance);
    const content = document.querySelectorAll(".hidden");
    for (let i = 0; i < content.length; i++) {
        let height = content[i].parentElement.getBoundingClientRect().height;
        if (distance >= height * i - offset) {
            content[i].classList.add("show");
            if (i - 1 >= 0) {
                // content[i - 1].classList.remove("show");
            }
        } else {
            content[i].classList.remove("show");
        }
    }
}

// check scroll
document.querySelector(".main").addEventListener("scroll", reveal);
window.addEventListener("load", function () {
    document.querySelector(".first_section").classList.add("show");
});

// expand element function
function expand(ele) {
    const element = document.querySelector(ele);
    if (element.classList.contains("expand")) {
        element.classList.remove("expand");
    } else {
        element.classList.add("expand");
    }
}

// move left function
function moveLeft(ele) {
    const element = document.querySelector(ele);
    element.style.transform = "translateX(-30%)";
    element.style.transition = "all 1s ease 0s";
}

//add img function
function addImg(ele, img){
    const element = document.querySelector(ele);
    const image = document.createElement("img");
    image.src = img;
    img = img.split("/");
    img = img[img.length - 1];
    image.alt = img;
    // image.setAttribute("width", "90%");
    image.setAttribute("height", "100%");
    element.appendChild(image);
}

// remove img function
function removeImg(ele){
    const element = document.querySelector(ele);
    // fade out
    element.style.opacity = "0";

    element.removeChild(element.lastChild);

    // fade in
    element.style.opacity = "1";
}

// transition function
function transition(ele, img) {
    const element = document.querySelector(ele);
    element.style.transition = "all 1s ease 0s";
    element.style.transform = "translateX(0%)";
    element.style.opacity = "1";
    addImg(ele, img);
}

// fade in function
function fadeIn(ele) {
    element = document.querySelector(ele);
    element.style.opacity = "1";
    element.style.transition = "all 1s ease 0s";

}

// expand first section after 1.6 second of page load
setTimeout(function () {
    expand(".first_section");
    // add image after expand
    addImg(".iPhone", "./assets/img/iphone14-2.gif");
    // wait then move left
    setTimeout(function () {
        // moveLeft(".iPhone");
        // remove image after move left
        setTimeout(function () {
            removeImg(".iPhone");
            addImg(".iPhone", "./assets/img/iphone14_multi.png");
            fadeIn(".first_info");
        }, 1000);
        // change image
    }, 3000);
}, 1600);





// addImg(".iPhone", "./assets/img/iphone14.gif")

// const iPhone = document.querySelector(".iPhone");
// const iPhoneImg = document.createElement("img");
// iPhoneImg.src = "./assets/img/iphone14.gif";
// iPhoneImg.alt = "iPhone 14";
// iPhoneImg.setAttribute("loop", "false");
// iPhoneImg.setAttribute("width", "60%");
// iPhoneImg.setAttribute("height", "60%");
// iPhone.appendChild(iPhoneImg);