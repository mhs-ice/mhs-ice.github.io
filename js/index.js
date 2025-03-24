function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
    document.getElementById("overlay").classList.toggle("active");
}
function toggleLeftSidebar() {
    document.getElementById("left-sidebar").classList.toggle("active");
    document.getElementById("left-overlay").classList.toggle("active");
}




let currentReviewIndex = 0;
const reviews = document.querySelectorAll(".review");

function showReview(index) {
    // Hide all reviews
    reviews.forEach((review) => review.classList.remove("active"));
    // Show the current review
    reviews[index].classList.add("active");
}

function nextReview() {
    currentReviewIndex = (currentReviewIndex + 1) % reviews.length; // Loop to the first review after the last
    showReview(currentReviewIndex);
}

function prevReview() {
    currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length; // Loop to the last review before the first
    showReview(currentReviewIndex);
}

// Show the first review initially
showReview(currentReviewIndex);


// Global Search Functionality
const searchInput = document.getElementById("searchInput");
const searchIcon = document.getElementById("searchIcon");
const searchForm = document.getElementById("searchForm");

// Function to perform search
function performSearch() {
    const searchQuery = searchInput.value.trim().toLowerCase(); // Get the search query in lowercase

    // Clear previous highlights
    const searchableElements = document.querySelectorAll("[data-searchable]");
    searchableElements.forEach((element) => {
        element.querySelectorAll(".highlight").forEach((highlight) => {
            highlight.outerHTML = highlight.innerHTML; // Remove highlight spans
        });
    });

    if (searchQuery === "") return; // Exit if the search query is empty

    // Search for the keyword in all searchable elements
    let firstMatch = null;
    searchableElements.forEach((element) => {
        const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
        let hasMatch = false;

        while (walker.nextNode()) {
            const node = walker.currentNode;
            const parent = node.parentElement;

            if (parent.tagName === "SCRIPT" || parent.tagName === "STYLE") continue; // Skip script and style tags

            const content = node.textContent;
            const regex = new RegExp(`(${searchQuery})`, "gi"); // Case-insensitive global search

            if (regex.test(content)) {
                hasMatch = true;
                const highlightedContent = content.replace(regex, '<span class="highlight">$1</span>');
                const span = document.createElement("span");
                span.innerHTML = highlightedContent;
                node.replaceWith(span); // Replace text node with highlighted content
            }
        }

        // Scroll to the first match
        if (!firstMatch && hasMatch) {
            firstMatch = element;
            firstMatch.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
}

// Trigger search on input
searchInput.addEventListener("input", performSearch);

// Trigger search on icon click
searchIcon.addEventListener("click", performSearch);

// Prevent form submission
searchForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting
    performSearch(); // Perform the search
});
