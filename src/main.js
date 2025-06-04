import * as User from "./modules/dom.js"
import * as ApiRequest from "./modules/api.js"

const app = document.getElementById("app");


ApiRequest.apiRequest(app).then(data => {
  if (data) User.loadUser(data);
});



document.addEventListener("click", (e)=>{
    if(e.target.classList.contains("reload-button")){
        ApiRequest.apiRequest(app).then(data =>{
            if (data) User.loadUser(data)
        });
    }
})
