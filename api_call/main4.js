const API_call = document.querySelector('.apicall');


function helperMethod(method, url){
 const promise = new Promise((resolve,reject)=> {
    const xhr = new XMLHttpRequest();
    xhr.open(method,url);
    xhr.responseType = 'json';
    xhr.send();

    xhr.onload = ()=> {
        if(xhr.status === 200){
            resolve(xhr.response)
        } else {
            reject(xhr.response)
        }
    }
 })
 
 return promise;
}

async function fetchUsingXHRAndAsyncAwait(){

    const response = await helperMethod('GET', "https://jsonplaceholder.typicode.com/posts");
    displayResults(response)
    console.log('====================================');
    console.log(response);
    console.log('====================================');





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
}

 fetchUsingXHRAndAsyncAwait();