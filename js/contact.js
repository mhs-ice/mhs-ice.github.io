function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
    document.getElementById("overlay").classList.toggle("active");
}
function toggleLeftSidebar() {
    document.getElementById("left-sidebar").classList.toggle("active");
    document.getElementById("left-overlay").classList.toggle("active");
}




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



document.addEventListener("DOMContentLoaded", function() {
    const recentPostsContainer = document.getElementById("recentPosts");

    // Convert blogData object into an array and sort by date (newest first)
    const postsArray = Object.entries(blogData).map(([id, post]) => ({
        id,
        ...post,
        dateObj: new Date(post.date) // Convert date string to Date object for sorting
    }));

    // Sort by date (newest first)
    postsArray.sort((a, b) => b.dateObj - a.dateObj);

    // Get the 3 most recent posts
    const recentPosts = postsArray.slice(0, 3);

    // Display them in the sidebar
    if (recentPosts.length > 0) {
        recentPosts.forEach(post => {
            const postElement = document.createElement("div");
            postElement.className = "recent-post-item";
            postElement.innerHTML = `
                <div class="recent-post-title">${post.title}</div>
                <div class="recent-post-date">${post.date}</div>
            `;
            
            // Make the post clickable (redirect to blog.html with the post ID)
            postElement.addEventListener("click", () => {
                window.location.href = `blog.html?post=${post.id}`;
            });
            
            recentPostsContainer.appendChild(postElement);
        });
    } else {
        recentPostsContainer.innerHTML = "<p>No recent posts yet.</p>";
    }
});