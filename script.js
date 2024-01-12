const buttonEl = document.getElementById("btn");

const quoteEl = document.getElementById("quote");

const authorEl = document.getElementById("author")

const apiKey = "F5LKoapjGng0e3C9WEwU0g==rskUwA55t4MtE38n";

const apiURL = "https://api.api-ninjas.com/v1/quotes?category=success";

const options = {
  method : "GET",
  headers : {
    "X-Api-Key" : apiKey
  }
}

async function getQuote()
{

  try 
  {
    buttonEl.innerHTML = "Loading..."
    buttonEl.disabled = true;
    quoteEl.innerHTML = "Updating..."
    authorEl.innerHTML = "Updating..."
    const response = await fetch(apiURL, options);
    const data =  await response.json();
    quoteEl.innerText = data[0].quote;
    authorEl.innerText = `~ ${data[0].author}`; 
    buttonEl.innerHTML = "Get a quote"
    buttonEl.disabled = false; 
  } catch (error) 
  {
    document.querySelector('.quote').innerHTML = `An error happend ,Try again later`;
    authorEl.style.display = "none";
    buttonEl.innerHTML = "Get a quote"
    buttonEl.disabled = false; 
  }
}
getQuote();
buttonEl.addEventListener("click", getQuote);