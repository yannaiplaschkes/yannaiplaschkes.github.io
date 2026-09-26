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
            card.style.cursor = "pointer";
            card.innerHTML = `
                <div class="card-content">
                    <img src="${movie.posterUrl}" alt="${movie.title} Poster" class="movie-poster">
                    <div class="movie-details">
                        <h3>${movie.title}</h3>
                        <div class="movie-meta">${movie.year} • ${movie.genre} • ${movie.runtime}</div>
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

            card.addEventListener("click", (e) => {
                if (e.target.closest("a")) return; 
                window.location.href = `movie.html?movie=${movie.slug}`;
            });
        }
        movieGrid.appendChild(card);
    });
}

displayMovies();
