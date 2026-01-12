const API_call = document.querySelector('.apicall');

//fetchUsingXHR
function fetchUsingXHR(){
    const xhr = new XMLHttpRequest ;
    xhr.open('GET','https://jsonplaceholder.typicode.com/posts');
    xhr.responseType ='json';
    xhr.send();

    xhr.onload = () =>{
        if(xhr.status ===200){
          displayResults(xhr.response);
        }
        else {
            console.log('err occured')
        }
    }
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


fetchUsingXHR();

