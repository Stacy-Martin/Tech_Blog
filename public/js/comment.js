const commentHandler = async () =>{
    // event.preventDefault();
    const commentBody = document.querySelector("#commentBody").value
    const postId = parseInt(document.querySelector(".singlePost").dataset.id);
    console.log({body: commentBody, post_id: postId});
    const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({body: commentBody, post_id: postId}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
          console.log("commentBody", commentBody)
        // document.location.replace('/profile');
      } else {
        alert('Failed to post comment');
      }
    };
    // const newFormHandler = async (event) => {
    //     console.log('function called')
    //     const title = document.querySelector('#post-name').value;
    //     const body = document.querySelector('#post-body').value;
    //     if (title && body) {
    //       const response = await fetch(`/api/posts`, {
    //         method: 'POST',
    //         body: JSON.stringify({ title, body }),
    //         headers: {
    //           'Content-Type': 'application/json',


document
  .querySelector('.comment-btn')
  .addEventListener('click', commentHandler);



  
  
//   const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id');
//       const response = await fetch(`/api/posts/${id}`, {
//         method: 'DELETE',
//       });
//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to delete post');
//       }
//     }
//   };
  
//   document
//     .querySelector('.post-list')
//     .addEventListener('click', delButtonHandler);