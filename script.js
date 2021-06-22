/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
    { quote: `"You miss 100% of the shots you don't take."`,
     source:' Wayne Gretzky',
     citation: `https://blog.hubspot.com/sales/famous-quotes`,
     year: ' 1991'
  }  ,
    
  { quote: `"Our time is limited, so don't waste it living someone else's life.`,
   source: 'Steve Jobs',
    citation: ` https://ew.com/`,
  }  ,
    
  { quote: `"There are people here that work more on upgrading their phones than upgrading their minds`,
    source:'Gary Vaynerchuck',
    year: ' 2018'
  } ,
    
  { quote: `"I never lose. I either win or learn"`,
    source:'Nelson Mandela',
    citation: `oxfordreference.com`,
    year: ' 2003'
  },
    
  {quote: `"There is no 'i' in team but there is in win."`,
    source:'Micheal Jordan',
    citation: 'The Last Dance',
    tag: "Sports & Fitness (genre)",
    year: ' 2020'
  } ,
    
  {quote: `"I think it is possible for ordinary people to choose to be extraordinary."`,
    source:'Elon Musk',
    citation: ` inc.com`,
    year: ' 2008'
  }  ,
  
  {quote: `"I love a success story, but even more than a success story; I like a dude who f***s his life up and gets his life together again story."`,
  source:'Joe Rogan',
  citation: ' The Joe Rogan Experiance Podcast',
  year: ' 2016'
}  

]


/***
 * `getRandomQuote` function random cycle 
***/


  function getRandomQuote() {
   let num = Math.floor(Math.random() * quotes.length );

    console.log(num); /* for debugging making sure it logs number*/

    for(i=num;i <= quotes.length; i++ )
    {
      let randomQuote = quotes[num];
      return randomQuote; 
    }

  }
 
/***
 * `printQuote` function with changing background on click for extra credit
***/

function printQuote() {

  let randomQuote = getRandomQuote();
 
  let newDisplay = `<p class="quote"> ${randomQuote.quote}
 <p class="source"> ${randomQuote.source}`
 
 if(randomQuote.citation){
   newDisplay +=
   `<span class="citation">${randomQuote.citation}</span>`;
 }
 
 if(randomQuote.year){
   newDisplay +=
   `<span class="year">${randomQuote.year}</span>`
 }
 
 if(randomQuote.tag){
   newDisplay +=
   `<span class="tag">${randomQuote.tag}</span>`
 }

 newDisplay += "</p>"
 

 document.body.style.backgroundColor = divchange(); // changes background on click, interval set down below 
 return document.getElementById('quote-box').innerHTML = newDisplay;
  
 }


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

 document.getElementById('load-quote').addEventListener("click", printQuote, false); 

/* CHANGES WEBPAGE COLOR AUTOMATICALLY EVERY 4 SECONDS */

setInterval(() => {
  printQuote();
} , 4000 )

let k= 0;
function divchange() {
  let divtag = document.getElementById("body1");
  let bgcolor = ["purple","yellow","blue","brown"];
  divtag.style.backgroundColor = bgcolor[k];
  k=(k+1)%bgcolor.length;
}
setInterval(divchange, 4000);