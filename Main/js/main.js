const explorePage = [
    { title: "Card 1", image: "../images/Art_Examples/img-Qesw0hQpjdJF8WVViryEg.jpeg",price: "10$" },
    { title: "Card 2", image: "../images/Art_Examples/img-Qesw0hQpjdJF8WVViryEg.jpeg",price: "15$" },
    { title: "Card 3", image: "../images/Art_Examples/img-YVBpJVY7ehdLcUH2UKvkk.jpeg",price: "20$" },
    { title: "Card 4", image: "../images/Art_Examples/img-Qesw0hQpjdJF8WVViryEg.jpeg",price: "15$" },
    { title: "Card 5", image: "../images/Art_Examples/img-YVBpJVY7ehdLcUH2UKvkk.jpeg",price: "15$" },

  ];
  const vitagePage = [
    { title: "Card 1", image: "../images/Art_Examples/img-Qesw0hQpjdJF8WVViryEg.jpeg",price: "10$" },
    { title: "Card 2", image: "../images/Art_Examples/img-Qesw0hQpjdJF8WVViryEg.jpeg",price: "15$" },
    { title: "Card 3", image: "../images/Art_Examples/img-YVBpJVY7ehdLcUH2UKvkk.jpeg",price: "20$" },
    { title: "Card 4", image: "../images/Art_Examples/img-Qesw0hQpjdJF8WVViryEg.jpeg",price: "15$" },
    { title: "Card 5", image: "../images/Art_Examples/img-YVBpJVY7ehdLcUH2UKvkk.jpeg",price: "15$" },

  ];
  const poetryPage = [
    { title: "Card 1", image: "../images/Art_Examples/img-Qesw0hQpjdJF8WVViryEg.jpeg",price: "10$" },
    { title: "Card 2", image: "../images/Art_Examples/img-Qesw0hQpjdJF8WVViryEg.jpeg",price: "15$" },
    { title: "Card 3", image: "../images/Art_Examples/img-YVBpJVY7ehdLcUH2UKvkk.jpeg",price: "20$" },
    { title: "Card 4", image: "../images/Art_Examples/img-Qesw0hQpjdJF8WVViryEg.jpeg",price: "15$" },
    { title: "Card 5", image: "../images/Art_Examples/img-YVBpJVY7ehdLcUH2UKvkk.jpeg",price: "70$" },

  ];

  function createCard(title, image, price) {
    return `
    <div class="card">
        <img src="${image}" class="card-img-top" alt="Card Image 1">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <h5 class="card-title">Price: ${price}</h5>
        </div>
    </div>
    `;
  }

  function renderCards(data) {
    const cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML = ""; // Clear previous content

    data.forEach(item => {
      const cardHtml = createCard(item.title, item.image, item.price);
      cardContainer.innerHTML += cardHtml;
    });
  }
  function renderCards2(data) {
    const cardContainer = document.getElementById("cardContainer2");
    cardContainer.innerHTML = ""; // Clear previous content

    data.forEach(item => {
      const cardHtml = createCard(item.title, item.image, item.price);
      cardContainer.innerHTML += cardHtml;
    });
  }
  function renderCards3(data) {
    const cardContainer = document.getElementById("cardContainer3");
    cardContainer.innerHTML = ""; // Clear previous content

    data.forEach(item => {
      const cardHtml = createCard(item.title, item.image, item.price);
      cardContainer.innerHTML += cardHtml;
    });
  }

  renderCards(explorePage);
  renderCards2(vitagePage);
  renderCards3(poetryPage);
