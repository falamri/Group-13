const User = [
    { ID: "201943050", Profilepic: "../images/Art_Examples/img-Qesw0hQpjdJF8WVViryEg.jpeg", Name: "Fares", Status: "Log out"},
  ];
  

function profilepic (Profilepic, Name){
return `
<img src="${Profilepic}" class="rounded float-start ps-5 pt-5" alt="Artistic image" width="400px">
<p class="pt-5"></p>
<h3 class="pt-5">${Name}</h3>
`}

function renderProfile(data) {
    const cardContainer = document.getElementById("profilePicture");
    const profileHtml = profilepic(User.Profilepic, User.Name);
    cardContainer.innerHTML = profileHtml;
  }

  renderProfile(User);
