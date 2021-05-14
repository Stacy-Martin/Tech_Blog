const newFormHandler = async (event) => {
  event.preventDefault();
  console.log('function called')
  const title = document.querySelector('#post-name').value;
  const body = document.querySelector('#post-body').value;
  if (title && body) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ title, body }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create post');
    }
  }
};

const editButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

      document.location.replace(`/editPost/${id}`);
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete post');
    }
  }
};

document
  .querySelector('.new-post-form')
  // console.log(document.querySelector('.new-post-form')) PascalCase CONSTANT_CASE 
  .addEventListener('submit', newFormHandler);

let editBtn = document.querySelector('.editButton')

if(editBtn){
  editBtn.addEventListener('click', editButtonHandler);
}  
let deleteBtn = document.querySelector('.deleteButton')
if(deleteBtn){
   deleteBtn.addEventListener('click', delButtonHandler);
}
 