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
            location.href = "../search/search.html?search=" + searchString;
        }
    }
}

// display search text
function displaySearchText() {
    let search = location.search;
    let searchWords = search.split("+");
    let searchText = "";
    searchWords.forEach(function () {
        searchText = searchWords.join(" ");
    });
    // remove the '?search=' part
    searchText = searchText.substring(8);
    document.getElementById("searchText").innerHTML = searchText;
}

window.addEventListener("load", function () {
    displaySearchText();
})