// Select Elements
const galleryImages = document.querySelectorAll(".gallery .image img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery .image");

let currentIndex = 0;

// =======================
// Open Lightbox
// =======================
galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        showImage();
        lightbox.classList.add("active");
    });
});

// Display Current Image
function showImage() {
    lightboxImg.src = galleryImages[currentIndex].src;
}

// Close Lightbox
closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

// Close when clicking outside image
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove("active");
    }
});

// =======================
// Next Image
// =======================
nextBtn.addEventListener("click", () => {
    currentIndex++;

    if (currentIndex >= galleryImages.length) {
        currentIndex = 0;
    }

    showImage();
});

// =======================
// Previous Image
// =======================
prevBtn.addEventListener("click", () => {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = galleryImages.length - 1;
    }

    showImage();
});

// =======================
// Keyboard Navigation
// =======================
document.addEventListener("keydown", (e) => {

    if (!lightbox.classList.contains("active")) return;

    if (e.key === "ArrowRight") {
        nextBtn.click();
    }

    if (e.key === "ArrowLeft") {
        prevBtn.click();
    }

    if (e.key === "Escape") {
        lightbox.classList.remove("active");
    }

});

// =======================
// Image Filtering
// =======================
filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Active Button
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        galleryItems.forEach(item => {

            if (filter === "all") {
                item.style.display = "block";
            }

            else if (item.classList.contains(filter)) {
                item.style.display = "block";
            }

            else {
                item.style.display = "none";
            }

        });

    });

});