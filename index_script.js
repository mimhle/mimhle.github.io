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
    }
    else {
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

function reveal() {
    const reveals = document.querySelectorAll(".hidden");

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementBottom = reveals[i].getBoundingClientRect().bottom;
        let elementVisible = 10;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("show");
        } else if (elementTop > windowHeight || elementBottom < 0) {
            reveals[i].classList.remove("show");
        }
    }
}

window.addEventListener("load", reveal);
window.addEventListener("scroll", reveal);