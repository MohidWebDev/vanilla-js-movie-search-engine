const movieTitleRef = document.querySelector("#movie-title");
const displayMovieRef = document.querySelector("#display-movie");

async function movieSearch() {
  const movieTitle = movieTitleRef.value;

  displayMovieRef.innerHTML = "Fetching data...";

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=97ee378&s=${movieTitle}`,
    );

    const data = await response.json();

    displayMovieRef.innerHTML = "";

    if (data.Response === "True") {
      data.Search.forEach((movie) => {
        const divItemsRef = document.createElement("div");

        const imageRef = document.createElement("img");
        imageRef.src = movie.Poster;
        imageRef.style.width = "10rem";

        const h4Ref = document.createElement("h4");
        h4Ref.innerHTML = movie.Title;

        divItemsRef.appendChild(imageRef);
        divItemsRef.appendChild(h4Ref);
        displayMovieRef.appendChild(divItemsRef);
      });
    } else {
      displayMovieRef.innerHTML = "No movies found.";
    }
  } catch (error) {
    displayMovieRef.innerHTML = "Failed to fetch data. Please try again.";
  }

  movieTitleRef.value = "";
}
