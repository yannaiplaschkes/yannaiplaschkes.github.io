const params = new URLSearchParams(window.location.search);
const slug = params.get("movie");
const movie = myMovies.find(m => m.slug === slug);

if (movie) {
    document.title = `${movie.title} | Yannai Plaschkes`;
    document.getElementById("movie-title").textContent = movie.title;
    document.getElementById("movie-meta").textContent =
        `${movie.year} • ${movie.genre}${movie.runtime ? " • " + movie.runtime : ""}`;
    document.getElementById("movie-description-text").textContent = movie.description;

    const gallery = document.getElementById("movie-gallery");
    movie.galleryPhotos.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = movie.title;
        gallery.appendChild(img);
    });

    const bts = document.getElementById("bts-gallery");
    movie.behindTheScenes.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = `${movie.title} behind the scenes`;
        bts.appendChild(img);
    });

    document.getElementById("movie-closing-text").textContent = movie.closingNote;

    document.getElementById("movie-links").innerHTML = `
        <a href="${movie.youtubeUrl}" target="_blank" class="movie-btn btn-watch">Watch Full Film</a>
        <a href="${movie.trailerUrl}" target="_blank" class="movie-btn btn-trailer">Watch Trailer</a>
    `;

    document.getElementById("database-links").innerHTML = `
        <a href="${movie.letterboxdUrl}" target="_blank" class="db-link">Letterboxd</a>
        <a href="${movie.tmdbUrl}" target="_blank" class="db-link">TMDB</a>
    `;
} else {
    document.getElementById("movie-title").textContent = "Film not found";
}
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
let currentGalleryImages = [];
let currentIndex = 0;

function openLightbox(imagesList, index) {
    currentGalleryImages = imagesList;
    currentIndex = index;
    lightboxImg.src = currentGalleryImages[currentIndex];
    lightbox.classList.add("active");
}

function showNext() {
    currentIndex = (currentIndex + 1) % currentGalleryImages.length;
    lightboxImg.src = currentGalleryImages[currentIndex];
}

function showPrev() {
    currentIndex = (currentIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
    lightboxImg.src = currentGalleryImages[currentIndex];
}

document.addEventListener("click", (e) => {
    const galleryEl = e.target.closest(".photo-gallery");
    if (e.target.tagName === "IMG" && galleryEl) {
        const imagesInThisGallery = Array.from(galleryEl.querySelectorAll("img")).map(img => img.src);
        const clickedIndex = imagesInThisGallery.indexOf(e.target.src);
        openLightbox(imagesInThisGallery, clickedIndex);
    }
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove("active");
    }
});

document.querySelector(".lightbox-close").addEventListener("click", () => {
    lightbox.classList.remove("active");
});

document.querySelector(".lightbox-next").addEventListener("click", (e) => {
    e.stopPropagation();
    showNext();
});

document.querySelector(".lightbox-prev").addEventListener("click", (e) => {
    e.stopPropagation();
    showPrev();
});

document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;
    if (e.key === "Escape") lightbox.classList.remove("active");
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
});
