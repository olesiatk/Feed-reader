const URL_Users = 'https://jsonplaceholder.typicode.com/users';
const URL_Posts = 'https://jsonplaceholder.typicode.com/posts';

export const putUser = ({ username, password }) => fetch(URL_Users, {
  method: 'POST',
  body: { username, password }
})
  .then(response => response.json())
    .then(result => result.id);

export const getPosts = ({ userId }) => fetch(`${URL_Posts}?userId=${userId}`)
  .then(response => response.json())
    .then(result => console.log(result));

export const putPost = ({ userId, title, body }) => fetch(URL_Posts, {
  method: 'POST',
  body: { userId, title, body }
})
  .then(response => response.json());

export const deletePost = ({ postId }) => fetch(`${URL_Posts}/${ postId }`, {
  method: 'DELETE',
})
  .then(response => response.json());