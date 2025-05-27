const fragmento = document.createDocumentFragment();
const body = document.querySelector("body");
const template = document.createElement("template");
body.innerHTML = "";


const  apiRequest = async()=>{
    try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        body.innerHTML="";
        // console.log(data)
        // console.log(data.results[0].name.first)
        // console.log(data.results[0].gender)
        // console.log(data.results[0].email)
        // console.log(data.results[0].location.city)
        // console.log(data.results[0].picture.large)

        if(data) loadUser(data)
    } catch (error) {
        console.log("There was an error : ", error)
    }
}

const loadUser = async (data)=>{
    try {
        if(data){
            template.innerHTML=`
               <div class="profile">
            <div class="container">
                <div class="background-image">
                    <img class="profile-picture" src="${data.results[0].picture.large}"></img>
                </div>
                <div class="personal-info">
                    <h1>${data.results[0].name.title} ${data.results[0].name.first}</h1>
                    <p href="" class="city">${data.results[0].location.city}</p>
                    <p href="" class="country">${data.results[0].location.country}</p>
                    <p class="email">${data.results[0].email}</p>
                </div>
            </div>
            <div class="footer">
                <p>${data.results[0].login.username}</p>
                <button class="reload-button" onclick="apiRequest()">Reload</button>
            </div>
        </div>
            `
        }
        const cloneTemplate = template.content.cloneNode(true);
            fragmento.appendChild(cloneTemplate);
            body.appendChild(fragmento)
    } catch (error) {
        console.log("There was an error: ", error)
    }
}


document.addEventListener("DOMContentLoaded", () => {
    apiRequest()
});