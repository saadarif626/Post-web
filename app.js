document.getElementById('postForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const timestamp = new Date().toLocaleString();

    const postContainer = document.createElement('div');
    postContainer.classList.add('post');
    postContainer.innerHTML = `
        <h5>${title} <small class="text-muted">by ${username} on ${timestamp}</small></h5>
        <p>${description}</p>
        <button class="btn btn-warning btn-sm edit-btn">Edit</button>
        <button class="btn btn-danger btn-sm delete-btn">Delete</button>
    `;

    document.getElementById('postsContainer').appendChild(postContainer);

   
    document.getElementById('postForm').reset();


    postContainer.querySelector('.edit-btn').addEventListener('click', function () {
        const newTitle = prompt('Edit Post Title:', title);
        const newDescription = prompt('Edit Post Description:', description);
        if (newTitle) {
            title = newTitle;
            postContainer.querySelector('h5').innerHTML = `${newTitle} <small class="text-muted">by ${username} on ${timestamp}</small>`;
        }
        if (newDescription) {
            description = newDescription;
            postContainer.querySelector('p').innerText = newDescription;
        }
    });

    postContainer.querySelector('.delete-btn').addEventListener('click', function () {
        postContainer.remove();
    });
});