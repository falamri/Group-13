const explorePage = [
  {artwork_id: 1, title :"Art 1",description:"This is my art that I am talking about",buying_price:20,posted_date:"2023-12-19T21:00:00.000Z",image_url:"../images/Art_Examples/1.jpeg",auction_price:10,type:"vintage",period:"18",size:"small",type:"painting",artist_id:1},
  {artwork_id: 2, title :"Art 2",description:"my beautiful art",buying_price:30,posted_date:"2023-12-20T21:00:00.000Z",image_url:"../images/Art_Examples/2.jpeg",auction_price:20,type:"modern",period:"19",size:"medium",type:"photography",artist_id:2},
  {artwork_id: 3, title :"Art 3",description:"what an art",buying_price:40,posted_date:"2023-12-21T21:00:00.000Z",image_url:"../images/Art_Examples/3.jpeg",auction_price:30,type:"vintage",period:"20",size:"large",type:"sclupture",artist_id:3},
  {artwork_id: 4, title :"Art 4",description:"I painted this a while ago",buying_price:50,posted_date:"2023-12-22T21:00:00.000Z",image_url:"../images/Art_Examples/4.jpeg",auction_price:40,type:"modern",period:"18",size:"small",type:"painting",artist_id:4},
  {artwork_id: 5, title :"Art 5",description:"the most precious art to my heart",buying_price:60,posted_date:"2023-12-23T21:00:00.000Z",image_url:"../images/Art_Examples/5.jpeg",auction_price:50,type:"vintage",period:"19",size:"medium",type:"photography",artist_id:5}
]
const vitagePage = [
  {artwork_id:1,title:"Art 1",description:"This is my art that I am talking about",buying_price:20,posted_date:"2023-12-19T21:00:00.000Z",image_url:"../images/Art_Examples/1.jpeg",auction_price:10,type:"vintage",period:"18",size:"small",type:"painting",artist_id:1},
  {artwork_id:2,title:"Art 2",description:"my beautiful art",buying_price:30,posted_date:"2023-12-20T21:00:00.000Z",image_url:"../images/Art_Examples/2.jpeg",auction_price:20,type:"modern",period:"19",size:"medium",type:"photography",artist_id:2},
  {artwork_id:3,title:"Art 3",description:"what an art",buying_price:40,posted_date:"2023-12-21T21:00:00.000Z",image_url:"../images/Art_Examples/3.jpeg",auction_price:30,type:"vintage",period:"20",size:"large",type:"sclupture",artist_id:3},
  {artwork_id:4,title:"Art 4",description:"I painted this a while ago",buying_price:50,posted_date:"2023-12-22T21:00:00.000Z",image_url:"../images/Art_Examples/4.jpeg",auction_price:40,type:"modern",period:"18",size:"small",type:"painting",artist_id:4},
  {artwork_id:5,title:"Art 5",description:"the most precious art to my heart",buying_price:60,posted_date:"2023-12-23T21:00:00.000Z",image_url:"../images/Art_Examples/5.jpeg",auction_price:50,type:"vintage",period:"19",size:"medium",type:"photography",artist_id:5}
]
const poetryPage = [
  {artwork_id:1,title:"Art 1",description:"This is my art that I am talking about",buying_price:20,posted_date:"2023-12-19T21:00:00.000Z",image_url:"../images/Art_Examples/1.jpeg",auction_price:10,type:"vintage",period:"18",size:"small",type:"painting",artist_id:1},
  {artwork_id:2,title:"Art 2",description:"my beautiful art",buying_price:30,posted_date:"2023-12-20T21:00:00.000Z",image_url:"../images/Art_Examples/2.jpeg",auction_price:20,type:"modern",period:"19",size:"medium",type:"photography",artist_id:2},
  {artwork_id:3,title:"Art 3",description:"what an art",buying_price:40,posted_date:"2023-12-21T21:00:00.000Z",image_url:"../images/Art_Examples/3.jpeg",auction_price:30,type:"vintage",period:"20",size:"large",type:"sclupture",artist_id:3},
  {artwork_id:4,title:"Art 4",description:"I painted this a while ago",buying_price:50,posted_date:"2023-12-22T21:00:00.000Z",image_url:"../images/Art_Examples/4.jpeg",auction_price:40,type:"modern",period:"18",size:"small",type:"painting",artist_id:4},
  {artwork_id:5,title:"Art 5",description:"the most precious art to my heart",buying_price:60,posted_date:"2023-12-23T21:00:00.000Z",image_url:"../images/Art_Examples/5.jpeg",auction_price:50,type:"vintage",period:"19",size:"medium",type:"photography",artist_id:5}
]

  function createCard(title, image_url, buying_price) {
    return `
    <div class="card" onclick="window.location.href = '/artworkDetails'">
        <img src="${image_url}" class="card-img-top" alt="Card Image 1">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <h5 class="card-title">Price: ${buying_price}</h5>
        </div>
    </div>
    `;
  }

  function renderCards(data) {
    const cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML = " "; // Clear previous content

    data.forEach(item => {
      const cardHtml = createCard(item.title, item.image_url, item.buying_price);
      cardContainer.innerHTML += cardHtml;
    });
  }
  function renderCards2(data) {
    const cardContainer = document.getElementById("cardContainer2");
    cardContainer.innerHTML = " "; // Clear previous content

    data.forEach(item => {
      const cardHtml = createCard(item.title, item.image_url, item.buying_price);
      cardContainer.innerHTML += cardHtml;
    });
  }
  function renderCards3(data) {
    const cardContainer = document.getElementById("cardContainer3");
    cardContainer.innerHTML = " "; // Clear previous content

    data.forEach(item => {
      const cardHtml = createCard(item.title, item.image_url, item.buying_price);
      cardContainer.innerHTML += cardHtml;
    });
  }

  renderCards(explorePage);
  renderCards2(vitagePage);
  renderCards3(poetryPage);
