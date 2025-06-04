const apiRequest = async (app) => {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    app.innerHTML = "";
    return data;
  } catch (error) {
    console.log("There was an error : ", error);
  }
};

export { apiRequest };