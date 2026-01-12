const API_call = document.querySelector('.apicall');

function fetchmethod() {
  fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET' })
    .then((response) => {
      if (!response.ok) throw new Error('Network error');
      return response.json();
    })
    .then((results) => {
      console.log(results);
      displayResults(results);
    })
    .catch((err) => console.error(err));
}

function displayResults(posts) {
  if (!API_call) return;
  API_call.innerHTML = posts
    .map(
      (postItem) => `
        <div class="postItem">
          <h3>${postItem.title}</h3>
          <p>${postItem.body}</p>
        </div>`
    )
    .join('');
}

fetchmethod();


