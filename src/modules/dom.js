const fragmento = document.createDocumentFragment();
const template = document.createElement("template");

const loadUser = (data) => {
  try {
    template.innerHTML = `
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
    const cloneTemplate = template.content.cloneNode(true);
    fragmento.appendChild(cloneTemplate);
    const app = document.getElementById("app");
    app.appendChild(fragmento);
  } catch (error) {
    console.log("There was an error: ", error);
  }
};

export { loadUser };