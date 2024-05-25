// this is the code i tried to use to make the api call before watching thr youtube tutorial, but it didnt work.

//     make an API call to a quotes API.
//     const searchCategoty = "knowledge";
//     let ApiKey = "+UvFMQ0H7BEfzOZTg3ScIQ==9gTPYWLmMUxnzr4U";
//     let ApiUrl = `https://api.api-ninjas.com/v1/quotes?category=${searchCategory}`;

//     to make the Api call
//     const options = {
//         method: "GET",
//         headers: {
//             "X-Api-Key": ApiKey,
//             "content-type": "application/json"
//         },
//     };


//     fetch(ApiUrl, options)
//         .then(response => {
//             if(!response.ok){
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             return response.json();//this is error handling
//         })
//         .then(data => {
//             console.log(data);
//             document.getElementById("quote").innerHTML = data[0].quote;
//             document.getElementById("author").innerHTML = data[0].author;

//         })
//         .catch(error=> console.error(error));
//     this didnt work.

//     solution from the API ninja site
//     var category = knowledge;
//     $.ajax({
//         method: "GET",
//         url: "https://api.api-ninjas.com/v1/quotes?category=knowledge",
//         headers: {"X-Api-Key" : "+UvFMQ0H7BEfzOZTg3ScIQ==9gTPYWLmMUxnzr4U"},
//         contentType: "application/json",
//         success: function(result){
//             console.log(result);
//         },
//         error: function ajaxError(jqXHR){
//             console.error("Error: ", jqXHR.responseText);
//         }
//     });

//     to randomize the quotes that get called.
//     let random = Math.random(data.id);

//     function fetchNewQuote() {
//         fetch(ApiUrl, options)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error(`HTTP error!: ${response.status}`);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 quote.innerHTML = data[0].quote;
//                 author.innerHTML = data[0].author;
//             })
//             .catch(error => console.error(error));
//         the fetch method above is a promise based fetch api that also handles errors explicitly by checking for Http response statuses.

//         var category = "knowledge";
//         $.ajax({
//             method: "GET",
//             url: "https://api.api-ninjas.com/v1/quotes?category=knowledge",
//             headers: {"X-Api-Key" : "+UvFMQ0H7BEfzOZTg3ScIQ==9gTPYWLmMUxnzr4U"},
//             contentType: "application/json",
//             success: function(result){
//                 console.log(result);
//             },
//             error: function ajaxError(jqXHR){
//                 console.error("Error: ", jqXHR.responseText);
//             }
//         });
//         this method for api calls is for Jquery and it works if you have jquery as part of your folders. it supports older browsers that do not support fetch api.
//     }


//     let quote = document.getElementById("quote");
//     let author = document.getElementById("author");


//     //when you click on the new quote button, new information should be displayed in .info-container h2
//     let quoteButton = document.getElementById("new-quote");
//     quoteButton.addEventListener("click", function () {
//         quote.innerHTML = "Loading...";
//         author.innerHTML = "";

//         fetchNewQuote();

//     });
//     fetchNewQuote();

//     when you click on tweet button, you sould be redirected to twitter 