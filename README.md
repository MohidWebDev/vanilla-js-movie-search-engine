# vanilla-js-movie-search-engine
Dynamic DOM Manipulation: Employs document.createElement, appendChild, and innerHTML to transform raw API data into visual UI elements in real-time.

Asynchronous Data Integration: Implements an async function utilizing the fetch API to retrieve data from the OMDB REST service, ensuring the interface remains responsive during network requests.

Responsive Layout Design: Uses CSS Flexbox (flex-wrap: wrap) to create a fluid, multi-column grid that automatically adjusts movie cards based on the screen width.

Input Lifecycle Management: Features an optimized user flow that clears previous results upon new searches and resets the input field after a successful query.

Defensive API Logic: Incorporates conditional checks (data.Response === "True") to handle "No results found" scenarios and try-catch blocks to manage potential network or server-side failures.
