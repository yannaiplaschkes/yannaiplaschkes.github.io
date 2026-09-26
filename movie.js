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
} else {
    document.getElementById("movie-title").textContent = "Film not found";
}