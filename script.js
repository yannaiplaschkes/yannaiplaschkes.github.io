const myMovies = [
    {
        title: "The Life of a Chair",
        year: "2026",
        genre: "Experimental",
        status: "released",
        info: "More than just wood. No music, no dialogue—just a chair and nature.",
        posterUrl: "the-life-of-a-chair.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=oc_jo4OjmtA",
        trailerUrl: "https://www.youtube.com/watch?v=4YybBfvTX3M",
        letterboxdUrl: "https://letterboxd.com/film/the-life-of-a-chair/",
        tmdbUrl: "https://www.themoviedb.org/movie/1658367-the-life-of-a-chair/"
    },
    {
        title: "Untitled Second Film",
        year: "TBA",
        genre: "Project In Progress",
        status: "upcoming",
        info: "Currently in development...",
        posterUrl: "",
        youtubeUrl: "",
        trailerUrl: "",
        letterboxdUrl: "",
        tmdbUrl: ""
    }
];

const movieGrid = document.getElementById("movie-grid");

function displayMovies() {
    movieGrid.innerHTML = "";
    
    myMovies.forEach(movie => {
        const card = document.createElement("div");
        
        if (movie.status === "upcoming") {
            card.className = "movie-card upcoming-card";
            card.innerHTML = `
                <div>
                    <span class="badge">In Production</span>
                    <h3>${movie.title}</h3>
                    <div class="movie-meta">${movie.genre}</div>
                    <p class="movie-info">${movie.info}</p>
                </div>
            `;
        } else {
            card.className = "movie-card";
            card.innerHTML = `
                <div class="card-content">
                    <img src="${movie.posterUrl}" alt="${movie.title} Poster" class="movie-poster">
                    <div class="movie-details">
                        <h3>${movie.title}</h3>
                        <div class="movie-meta">${movie.year} • ${movie.genre}</div>
                        <p class="movie-info">${movie.info}</p>
                        <div class="movie-links">
                            <a href="${movie.youtubeUrl}" target="_blank" class="movie-btn btn-watch">Watch Full Film</a>
                            <a href="${movie.trailerUrl}" target="_blank" class="movie-btn btn-trailer">Watch Trailer</a>
                        </div>
                        <div class="database-links">
                            <a href="${movie.letterboxdUrl}" target="_blank" class="db-link">Letterboxd</a>
                            <a href="${movie.tmdbUrl}" target="_blank" class="db-link">TMDB</a>
                        </div>
                    </div>
                </div>
            `;
        }
        movieGrid.appendChild(card);
    });
}

displayMovies();
