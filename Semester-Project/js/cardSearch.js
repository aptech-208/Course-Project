<<<<<<< HEAD
let currentCategory = 'all';

function setCategory(cat, btn) {
    let buttons = document.getElementsByClassName("btn");
    for (let b of buttons) { b.classList.remove("active"); }
    btn.classList.add("active");

    currentCategory = cat;
    runFilters();
}

function runFilters() {
    let searchInput = document.getElementById("searchField").value.toLowerCase();
    let cards = document.getElementsByClassName("card");

    for (let card of cards) {
        let title = card.querySelector("h3").innerText.toLowerCase();
        let brand = card.getAttribute("data-brand");

        // Check Category Match
        let matchCategory = (currentCategory === 'all' || brand === currentCategory);
        // Check Search Match
        let matchSearch = title.includes(searchInput);

        // Only show if BOTH match
        if (matchCategory && matchSearch) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }
=======
let currentCategory = 'all';

function setCategory(cat, btn) {
    let buttons = document.getElementsByClassName("btn");
    for (let b of buttons) { b.classList.remove("active"); }
    btn.classList.add("active");

    currentCategory = cat;
    runFilters();
}

function runFilters() {
    let searchInput = document.getElementById("searchField").value.toLowerCase();
    let cards = document.getElementsByClassName("card");

    for (let card of cards) {
        let title = card.querySelector("h3").innerText.toLowerCase();
        let brand = card.getAttribute("data-brand");

        // Check Category Match
        let matchCategory = (currentCategory === 'all' || brand === currentCategory);
        // Check Search Match
        let matchSearch = title.includes(searchInput);

        // Only show if BOTH match
        if (matchCategory && matchSearch) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }
>>>>>>> e04afb23c4adc869706a5e07f07f632eec3d4634
}