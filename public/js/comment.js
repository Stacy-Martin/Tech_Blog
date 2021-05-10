const commentHandler = async () =>{
    const commentBody = document.querySelector("#commentBody").value
    const postId = parseInt(document.querySelector(".singlePost").dataset.id);
    console.log(commentBody)
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
        alert('Failed to create post');
      }
    }


document
  .querySelector('.comment-btn')
  .addEventListener('click', commentHandler);