const commentHandler = async () =>{
    // event.preventDefault();
    const commentBody = document.querySelector(".postComments").value
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