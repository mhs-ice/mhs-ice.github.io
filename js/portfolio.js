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












// JavaScript for Load More Button
const loadMoreBtn = document.getElementById("load-more-btn");
const portfolioItems1 = document.querySelectorAll(".portfolio-item");
let visibleItems = 9; // Number of items initially visible

// Function to show more items
function showMoreItems() {
    for (let i = visibleItems; i < visibleItems + 3; i++) {
        if (portfolioItems1[i]) {
            portfolioItems1[i].classList.remove("hidden");
        }
    }
    visibleItems += 3;

    // Hide the button if all items are visible
    if (visibleItems >= portfolioItems1.length) {
        loadMoreBtn.style.display = "none";
    }
}

// Event listener for the Load More button
loadMoreBtn.addEventListener("click", showMoreItems);

// Initially hide the button if there are no more items to load
if (portfolioItems1.length <= 9) {
    loadMoreBtn.style.display = "none";
}






// JavaScript for Portfolio Details Section
const portfolioItems2 = document.querySelectorAll(".portfolio-item"); // All portfolio items
const portfolioDetails2 = document.getElementById("portfolio-details"); // Detailed section
const detailsContent2 = document.getElementById("details-content"); // Content area inside detailed section

// Function to load details based on the category
function loadDetails(category) {
    let content = "";

    // Dynamic content based on the category
    switch (category) {
// ----------------------------Flyer Design--------------------------
        case "flyer-design":
            content = `
        <h2 class="details-title">Flyer Design</h2>
        <p class="details-description">
            Eye-catching and effective flyer designs tailored to your brand’s message. From bold visuals to clean layouts, I create promotional materials that grab attention and communicate your event, product, or service with impact. Perfect for print and digital distribution.
        </p>
        <div class="project-showcase">
            <div class="project">
                <h3 class="project-title">Shop Advertisement Flyer</h3>
                <img src="Collection/Flyer/Shop Advertisement flyer.png" alt="Shop Advertisement flyer" class="project-image">
                <p class="project-description">
                    <b>"Boost Your Sales with Eye-Catching Flyers!"</b>
Promote your shop with bold designs that attract customers and drive foot traffic.
                </p>
                <a href="https://example.com" class="project-link" target="_blank">View Project</a>
            </div>
            <div class="project">
                <h3 class="project-title">Home Sale Flyer</h3>
                <img src="Collection/Flyer/elegant home for sale (Flyer).png" alt="" class="project-image">
                <p class="project-description">
                    A sleek, high-impact real estate flyer designed to showcase properties with clarity and appeal. Combines striking visuals, organized layouts, and persuasive copy to attract potential buyers and highlight key features.
                </p>
                <a href="https://example.com" class="project-link" target="_blank">View Project</a>
            </div>
            <div class="project">
                <h3 class="project-title">CCTV Service Flyer</h3>
                <img src="Collection/Flyer/Untitled Design.png" alt="" class="project-image">
                <p class="project-description">
                    Eye-catching promotional flyers for surveillance and security services. Designed to communicate reliability, technology, and peace of mind through bold visuals, structured layouts, and clear call-to-actions. Ideal for security companies looking to attract residential or commercial clients.
                </p>
                <a href="https://example.com" class="project-link" target="_blank">View Project</a>
            </div>
            <div class="project">
                <h3 class="project-title">Medical Service Flyer</h3>
                <img src="Collection/Flyer/Medical FLyer.png" alt="" class="project-image">
                <p class="project-description">
                    Professional, trustworthy flyers designed for healthcare providers, clinics, and medical campaigns. Clean layouts with a balance of warmth and authority ensure critical information (services, specialists, or health tips) is communicated clearly while maintaining patient comfort.
                </p>
                <a href="https://example.com" class="project-link" target="_blank">View Project</a>
            </div>
            <div class="project">
                <h3 class="project-title">Conference Flyer</h3>
                <img src="Collection/Flyer/Conference FLyer.png" alt="" class="project-image">
                <p class="project-description">
                    High-impact flyers that turn events into must-attend occasions. Designed to communicate key details (speakers, agenda, venue) with bold typography, dynamic layouts, and strategic visuals that reflect the conference’s professionalism or creativity.
                </p>
                <a href="https://example.com" class="project-link" target="_blank">View Project</a>
            </div>
            <div class="project">
                <h3 class="project-title">Nail Service Flyer</h3>
                <img src="Collection/Flyer/Nail Service FLyer.png" alt="" class="project-image">
                <p class="project-description">
                    Vibrant, stylish flyers designed to showcase nail artistry and salon promotions. Combines bold colors, elegant typography, and high-quality imagery to highlight services (manicures, pedicures, nail art) and drive bookings.
                </p>
                <a href="https://example.com" class="project-link" target="_blank">View Project</a>
            </div>
            <div class="project">
                <h3 class="project-title">Workshop Flyer</h3>
                <img src="Collection/Flyer/Workshop FLyer.png" alt="" class="project-image">
                <p class="project-description">
                    Engaging and informative flyers designed to boost workshop attendance. Whether it’s a corporate training, creative masterclass, or community event, these flyers highlight key details (date, speaker, benefits) with clear visuals and persuasive copy to drive registrations.
                </p>
                <a href="https://example.com" class="project-link" target="_blank">View Project</a>
            </div>
            <div class="project">
                <h3 class="project-title">Party Invitation Flyer</h3>
                <img src="Collection/Flyer/Party Invitation.png" alt="" class="project-image">
                <p class="project-description">
                    Bring the celebration to life before it even begins! My eye-catching party flyers create buzz and excitement for any event - from birthday bashes to corporate mixers. These designs combine playful typography, energetic color schemes, and irresistible visuals to guarantee your guests RSVP "yes!"
                </p>
                <a href="https://example.com" class="project-link" target="_blank">View Project</a>
            </div>
            <div class="comment">
                <h2>There are many others design. A lot of designs has not been added here. More contents will be added later.</h2>
            </div>
        </div>
        <div class="skills-used">
            <h3 class="skills-title">Skills Used</h3>
            <ul class="skills-list">
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>Canva</li>
                <li>InDesign</li>
            </ul>
        </div>
        <div class="testimonials">
            <h3 class="testimonials-title">Testimonials</h3>
            <div class="testimonial">
                <p class="testimonial-text">
                    "The flyer designs exceeded our expectations! They perfectly captured our brand’s vibe and drove real customer engagement. Highly recommend!"
                </p>
                <p class="testimonial-author">- John Doe, Client</p>
            </div>
            <div class="testimonial">
                <p class="testimonial-text">
                    "Working with Mehedi was seamless. The attention to detail and creative concepts made our promotion stand out. Will definitely collaborate again!"
                </p>
                <p class="testimonial-author">- Mike T., Small Business Owner</p>
            </div>
        </div>
        <div class="cta">
            <p class="cta-text">Interested in working together? Let's connect!</p>
            <a href="https://www.freelancer.com/u/mhs547061?sb=t" target="_blank" class="cta-button">Contact Me</a>
        </div>
    `;
            break;


// ----------------------------Social Media Post------------------
        case "social-media-post":
            content = `
        <h2 class="details-title">Social Media Post</h2>
        <p class="details-description">
            I create visually stunning designs for branding, marketing materials for social media. Here are some of my recent works:
        </p>
        <div class="project-showcase">
            <div class="project">
                <h3 class="project-title">Coffee Shop Insta Post</h3>
                <img src="Collection/Insta Post/Coffee Shop Instagram Post.jpg" alt="Insta Post" class="project-image">
                <p class="project-description">
                    A modern and minimalist Instagram Post for a Coffee Shop.
                </p>
                <a href="https://example.com" class="project-link" target="_blank">View Project</a>
            </div>
            <div class="project">
                <h3 class="project-title">Football Match Banner</h3>
                <img src="Collection/Insta Post/Football Match.png" alt="Football Match Banner" class="project-image">
                <p class="project-description">
                    A vibrant and engaging Football Match Banner for a Football Tournament.
                </p>
                <a href="https://example.com" class="project-link" target="_blank">View Project</a>
            </div>
            <div class="project">
                <h3 class="project-title">Marketing Poster</h3>
                <img src="Collection/Insta Post/Untitled Design.png" alt="Football Match Banner" class="project-image">
                <p class="project-description">
                    Designed high-impact marketing collateral—brochures, flyers, social media graphics, and ad campaigns—that captivate audiences and amplify brand messaging.
                </p>
                <a href="https://example.com" class="project-link" target="_blank">View Project</a>
            </div>
            <div class="project">
                <h3 class="project-title">Boxing Match</h3>
                <img src="Collection/Insta Post/Instagram Post.png" alt="Boxing Match Poster" class="project-image">
                <p class="project-description">
                    Designed a high-impact fight night poster to hype Middleweight Fights, blending bold typography, dynamic imagery, and gritty textures to capture the raw intensity of the ring. Strategically highlighted headliners, ticket details, and sponsors to drive buzz and sell-out crowds
                </p>
                <a href="https://example.com" class="project-link" target="_blank">View Project</a>
            </div>
            <div class="project">
                <h3 class="project-title">Medical Service</h3>
                <img src="Collection/Insta Post/Medical Service Instagram Post.png" alt="Marketing Poster" class="project-image">
                <p class="project-description">
                    Created an informative and visually engaging poster to promote Free Allergy Testing. Balanced clarity and empathy with clean layouts, accessible typography, and soothing color palettes to communicate critical healthcare information effectively. 
                </p>
                <a href="https://example.com" class="project-link" target="_blank">View Project</a>
            </div>
        </div>

        
            <div class="comment">
                <h2>There are many others design. A lot of designs has not been added here. More contents will be added later.</h2>
            </div>
        </div>
        <div class="skills-used">
            <h3 class="skills-title">Skills Used</h3>
            <ul class="skills-list">
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>Canva</li>
                <li>InDesign</li>
            </ul>
        </div>
        <div class="testimonials">
            <h3 class="testimonials-title">Testimonials</h3>
            <div class="testimonial">
                <p class="testimonial-text">
                    "The flyer designs exceeded our expectations! They perfectly captured our brand’s vibe and drove real customer engagement. Highly recommend!"
                </p>
                <p class="testimonial-author">- John Doe, Client</p>
            </div>
            <div class="testimonial">
                <p class="testimonial-text">
                    "Working with Mehedi was seamless. The attention to detail and creative concepts made our promotion stand out. Will definitely collaborate again!"
                </p>
                <p class="testimonial-author">- Mike T., Small Business Owner</p>
            </div>
        </div>
        <div class="cta">
            <p class="cta-text">Interested in working together? Let's connect!</p>
            <a href="https://www.freelancer.com/u/mhs547061?sb=t" target="_blank" class="cta-button">Contact Me</a>
        </div>
    `;
            break;


// -----------------------Poster Design------------------------------
        case "poster":
            content = `
        <h2 class="details-title">Poster Design</h2>
        <p class="details-description">
            Eye-catching, purposeful poster designs that command attention and communicate messages with impact. Whether for events, promotions, or awareness campaigns, each poster is crafted with striking visuals, balanced typography, and strategic layouts to engage audiences and drive action.
        </p>
        <div class="project-showcase">
            <div class="project">
                <h3 class="project-title">Sales Poster</h3>
                <img src="Collection/Poster/Untitled Design.png" alt="Sales Poster" class="project-image">
                <p class="project-description">
                    High-converting sales posters designed to stop scrolling and spark action. Combines persuasive copy, bold visuals, and strategic layouts to highlight promotions, discounts, and product benefits—driving urgency and boosting sales.
                </p>
                <a href="https://example.com" class="project-link" target="_blank">View Project</a>
            </div>
            <div class="project">
                <h3 class="project-title">Travel Poster</h3>
                <img src="Collection/Poster/Travel Poster.jpg" alt="Travel Poster" class="project-image">
                <p class="project-description">
                    Wanderlust-inspiring posters that transport viewers to breathtaking destinations. Combining vibrant visuals, evocative typography, and a sense of adventure, each design captures the essence of a location—turning dream trips into booked itineraries.
                </p>
                <a href="https://example.com" class="project-link" target="_blank">View Project</a>
            </div>
            <div class="project">
                <h3 class="project-title">Marketing Poster</h3>
                <img src="Collection/Poster/Marketing Poster.png" alt="Football Match Banner" class="project-image">
                <p class="project-description">
                    Designed high-impact marketing collateral—brochures, flyers, social media graphics, and ad campaigns—that captivate audiences and amplify brand messaging.
                </p>
                <a href="https://example.com" class="project-link" target="_blank">View Project</a>
            </div>
            <div class="project">
                <h3 class="project-title">Boxing Match</h3>
                <img src="Collection/Insta Post/Instagram Post.png" alt="Boxing Match Poster" class="project-image">
                <p class="project-description">
                    Designed a high-impact fight night poster to hype Middleweight Fights, blending bold typography, dynamic imagery, and gritty textures to capture the raw intensity of the ring. Strategically highlighted headliners, ticket details, and sponsors to drive buzz and sell-out crowds
                </p>
                <a href="https://example.com" class="project-link" target="_blank">View Project</a>
            </div>
            <div class="project">
                <h3 class="project-title">Meeting Poster</h3>
                <img src="Collection/Poster/Meeting Poster.png" alt="Meeting Poster" class="project-image">
                <p class="project-description">
                    Professionally crafted posters that transform corporate gatherings into must-attend events. Combining clear information hierarchy with engaging visuals, these designs boost registration while maintaining brand integrity.
                </p>
                <a href="https://example.com" class="project-link" target="_blank">View Project</a>
            </div>
        </div>

        
            <div class="comment">
                <h2>There are many others design. A lot of designs has not been added here. More contents will be added later.</h2>
            </div>
        </div>
        <div class="skills-used">
            <h3 class="skills-title">Skills Used</h3>
            <ul class="skills-list">
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>Canva</li>
                <li>InDesign</li>
            </ul>
        </div>
        <div class="testimonials">
            <h3 class="testimonials-title">Testimonials</h3>
            <div class="testimonial">
                <p class="testimonial-text">
                    "The flyer designs exceeded our expectations! They perfectly captured our brand’s vibe and drove real customer engagement. Highly recommend!"
                </p>
                <p class="testimonial-author">- John Doe, Client</p>
            </div>
            <div class="testimonial">
                <p class="testimonial-text">
                    "Working with Mehedi was seamless. The attention to detail and creative concepts made our promotion stand out. Will definitely collaborate again!"
                </p>
                <p class="testimonial-author">- Mike T., Small Business Owner</p>
            </div>
        </div>
        <div class="cta">
            <p class="cta-text">Interested in working together? Let's connect!</p>
            <a href="https://www.freelancer.com/u/mhs547061?sb=t" target="_blank" class="cta-button">Contact Me</a>
        </div>
    `;
            break;

// ------------------------------Banner Design-----------------------
        case "banner":
            content = `
        <h2 class="details-title">Banner Design</h2>
        <p class="details-description">
           High-impact banners that grab attention and drive action—whether for digital ads, trade shows, or retail promotions. Designed for maximum visibility, brand consistency, and conversion, blending bold visuals with clear messaging.
        </p>
        <div class="project-showcase">
            <div class="project">
                <h3 class="project-title">Travel Banner</h3>
                <img src="Collection/Banner/travel banner.png" alt="Travel Banner" class="project-image">
                <p class="project-description">
                   Stunning travel banners that spark wanderlust and inspire bookings. Designed for airlines, hotels, and tourism brands, these visuals combine breathtaking destinations with irresistible offers—turning viewers into travelers.
                </p>
                <a href="https://example.com" class="project-link" target="_blank">View Project</a>
            </div>
            <div class="project">
                <h3 class="project-title">Restaurant Banner</h3>
                <img src="Collection/Banner/restaurant banner.png" alt="Restaurant Banner" class="project-image">
                <p class="project-description">
                   Appetizing banners that make customers stop scrolling and start dining—perfect for promotions, events, or grand openings. Combining mouthwatering food photography with bold offers to drive foot traffic and online orders.
                </p>
                <a href="https://example.com" class="project-link" target="_blank">View Project</a>
            </div>
            <div class="project">
                <h3 class="project-title">Silver Jubilee Banner</h3>
                <img src="Collection/Banner/Silver Jubilee.png" alt="Silver Jubilee Banner" class="project-image">
                <p class="project-description">
                    Created a Silver Jubilee Banner of our Department ICE of University of Rajshahi.
                </p>
                <a href="https://example.com" class="project-link" target="_blank">View Project</a>
            </div>
            <div class="project">
                <h3 class="project-title">About Me Banner</h3>
                <img src="Collection/Banner/About Me Banner.png" alt="About Me Banner" class="project-image">
                <p class="project-description">
                    A personal and professional introduction that captures your unique story—perfect for LinkedIn, portfolios, or speaker profiles. Blends authenticity with strategic branding to make a memorable first impression.
                </p>
                <a href="https://example.com" class="project-link" target="_blank">View Project</a>
            </div>
           
        </div>

        
            <div class="comment">
                <h2>There are many others design. A lot of designs has not been added here. More contents will be added later.</h2>
            </div>
        </div>
        <div class="skills-used">
            <h3 class="skills-title">Skills Used</h3>
            <ul class="skills-list">
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>Canva</li>
                <li>InDesign</li>
            </ul>
        </div>
        <div class="testimonials">
            <h3 class="testimonials-title">Testimonials</h3>
            <div class="testimonial">
                <p class="testimonial-text">
                    "The flyer designs exceeded our expectations! They perfectly captured our brand’s vibe and drove real customer engagement. Highly recommend!"
                </p>
                <p class="testimonial-author">- John Doe, Client</p>
            </div>
            <div class="testimonial">
                <p class="testimonial-text">
                    "Working with Mehedi was seamless. The attention to detail and creative concepts made our promotion stand out. Will definitely collaborate again!"
                </p>
                <p class="testimonial-author">- Mike T., Small Business Owner</p>
            </div>
        </div>
        <div class="cta">
            <p class="cta-text">Interested in working together? Let's connect!</p>
            <a href="https://www.freelancer.com/u/mhs547061?sb=t" target="_blank" class="cta-button">Contact Me</a>
        </div>
    `;
            break;


// ---------------------------------PDF Design------------------------------

case "pdf-design":
    content = `
        <h2 class="details-title">PDF Design</h2>
        <p class="details-description">
            Professionally crafted PDFs for reports, brochures, and presentations—optimized for digital and print. Clean layouts, engaging visuals, and seamless navigation.
        </p>
        <div class="project-showcase">
            <!-- Project 1 -->
            <div class="project">
                <h3 class="project-title">Peace Pointer</h3>
                <img src="Collection/PDF/Peace Pointer.png" alt="Peace Pointer" class="project-image">
                <p class="project-description">
                    A peace pointer article with data visualizations, branded themes, and print-ready formatting.
                </p>
                <a href="Collection/PDF/PEACE POINTERS.pdf" class="project-link" target="_blank">View PDF</a>
            </div>

            <!-- Project 2 -->
            <div class="project">
                <h3 class="project-title">Article Report</h3>
                <img src="Collection/PDF/Report Thumb.png" alt="Article Report PDF" class="project-image">
                <p class="project-description">
                    A sleek report pdf with high-res images, interactive links, and mobile-friendly design.
                </p>
                <a href="Collection/PDF/LM-024.pdf" class="project-link" target="_blank">View PDF</a>
            </div>

            <!-- Project 3 -->
            <div class="project">
                <h3 class="project-title">Printable & Fillable PDF</h3>
                <img src="Collection/PDF/Form PDF.png" alt="Form PDF" class="project-image">
                <p class="project-description">
                    A printable and Fillable PDF design with checkable box,textbox and buttons.
                </p>
                <a href="Collection/PDF/Main.pdf" class="project-link" target="_blank">View PDF</a>
            </div>
        </div>

        <div class="comment">
            <h2>More PDF designs (eBooks, resumes, flyers) will be added soon.</h2>
        </div>

        <div class="skills-used">
            <h3 class="skills-title">Skills Used</h3>
            <ul class="skills-list">
                <li>Adobe InDesign (Master Pages)</li>
                <li>Illustrator (Vector Graphics)</li>
                <li>Acrobat (Hyperlinks, Forms)</li>
                <li>Photoshop (Image Retouching)</li>
            </ul>
        </div>

        <div class="testimonials">
            <h3 class="testimonials-title">Testimonials</h3>
            <div class="testimonial">
                <p class="testimonial-text">
                    "The PDF brochure was flawless—clients loved the interactive elements and print quality!"
                </p>
                <p class="testimonial-author">- Jane R., Marketing Director</p>
            </div>
        </div>

        <div class="cta">
            <p class="cta-text">Need a custom PDF? Let’s create something amazing!</p>
            <a href="https://www.freelancer.com/u/mhs547061?sb=t" target="_blank" class="cta-button">Contact Me</a>
        </div>
    `;
    break;


        // Add more cases for other categories as needed
        default:
            content = `<h2 class="details-title">No Details Available</h2>`;
    }

    // Insert the content into the details section
    detailsContent2.innerHTML = content;
}

// Function to open the detailed section
function openDetails(category) {
    loadDetails(category); // Load content based on the category
    portfolioDetails2.style.display = "flex"; // Show the detailed section
}

// Function to close the detailed section
function closeDetails() {
    const portfolioDetails = document.getElementById("portfolio-details");
    portfolioDetails.style.display = "none"; // Hide the detailed section
}

// Add click event listener to the close button
document.querySelector(".close-details").addEventListener("click", closeDetails);

// Add click event listeners to portfolio items
portfolioItems2.forEach((item) => {
    item.addEventListener("click", () => {
        const category = item.getAttribute("data-category"); // Get the category from the data attribute
        openDetails(category); // Open the detailed section with the corresponding content
    });
});



document.addEventListener("DOMContentLoaded", function () {
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