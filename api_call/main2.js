const API_call = document.querySelector('.apicall');


//fetchUsingAsync&Await

async function fetchUsingAsyncAwait(){
    const response = await  fetch('https://jsonplaceholder.typicode.com/posts',{
        method :'GET',
    })

    const result = await response.json();
    displayResults(result);

}




function displayResults(posts){
    API_call.innerHTML = posts
    .map(
        (postItem) =>`
        <div class="postItem">
        <h3>${postItem.title}</h3>
        <p>${postItem.body}</p>
        </div>`
    ).join(' ');

}

fetchUsingAsyncAwait();