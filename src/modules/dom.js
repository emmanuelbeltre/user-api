const userCardFragment = document.createDocumentFragment();
const userCardTemplate = document.createElement("template");

const loadUser = (data) => {
  try {
    userCardTemplate.innerHTML = `
      <div class="profile">
        <div class="container">  
          <div class="background-image">
            <img class="profile-picture" src="${data.results[0].picture.large}"></img>
          </div>
          <div class="personal-info">
            <h1>${data.results[0].name.title} ${data.results[0].name.first}</h1>
            <p class="city">${data.results[0].location.city}</p>
            <p class="country">${data.results[0].location.country}</p>
            <p class="email">${data.results[0].email}</p>
          </div>
        </div>
        <div class="footer">
          <p>${data.results[0].login.username}</p>
          <button class="reload-button">Reload</button>
        </div>
      </div>
    `;
    const clonedCard = userCardTemplate.content.cloneNode(true);
    userCardFragment.appendChild(clonedCard);
    const appContainer = document.getElementById("app");
    appContainer.appendChild(userCardFragment);
  } catch (error) {
    console.error("There was an error loading the user card:", error);
  }
};

export { loadUser };