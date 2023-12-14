function searchArtist(event) {
    const artistId = document.getElementById('artistNameInput').value.trim();
    fetchData(artistId);
  }

  function handleEnter(event) {
    if (event.key === 'Enter') {
      const artistId = document.getElementById('artistNameInput').value.trim();
      fetchData(artistId);
    }
  }

  function fetchData(artistId) {
    fetch(`/search?query=${artistId}`)
      .then(response => response.json())
      .then(data => {
        // Redirect to searchPage.html with query parameter
        window.location.href = `searchPage?artistId=${artistId}`;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        const artistDataDiv = document.getElementById('artistData');
        artistDataDiv.innerHTML = '<p>No artists match your result</p>';
      });
  }

  document.getElementById('artistNameInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      const artistId = event.target.value.trim();
      fetchData(artistId);
    }
  });