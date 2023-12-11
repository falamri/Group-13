// import React, { useState } from 'react';

// function Card({ artwork }) {
//   const handleClick = () => {
//     // Redirect to artwork details page when card is clicked
//     window.location.href = `/artwork/${artwork.id}`;
//   };

//   return (
//     <div className="card" onClick={handleClick}>
//       {/* Render your card content here */}
//       <img src={artwork.imageURL} alt={artwork.title} />
//       <h3>{artwork.title}</h3>
//       <p>Artist: {artwork.artistName}</p>
//       <p>Price: {artwork.price}</p>
//     </div>
//   );
// }

// function CardContainer({ artworks }) {
//   return (
//     <div className="scrolling-wrapper d-flex flex-row" id="cardContainer">
//       {artworks.map((artwork) => (
//         <Card key={artwork.id} artwork={artwork} />
//       ))}
//     </div>
//   );
// }

// // Fetch data and render cards
// function App() {
//   const [artworks, setArtworks] = useState([]);

//   // Fetch artwork data using useEffect or componentDidMount
//   useEffect(() => {
//     // Replace this with your actual API call to the Express backend
//     fetch('/api/artworks') // This route should be set up on your Express server to fetch artwork data
//       .then((response) => response.json())
//       .then((data) => setArtworks(data))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   return <CardContainer artworks={artworks} />;
// }

// export default App;

async function fetchUserIDs() {
    console.log("here")
    const response = await fetch('/data/user');
    const data = await response.json();

    const tableBody = document.getElementById('userIDTable').getElementsByTagName('tbody')[0];

    data.forEach(({ user_id }) => {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.textContent = user_id;
        row.appendChild(cell);
        tableBody.appendChild(row);
    });
}

