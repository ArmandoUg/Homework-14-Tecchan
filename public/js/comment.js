const commentform = async function(event) {
    event.preventDefault();
    const postid = document.querySelector('#post-id');
    const comment = document.querySelector('#comment-body').value.trim();
    console.log(comment);
    if (comment) {
        const response =

        await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ postid, comment }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            // document.location.replace('/dashboard');
            document.location.reload();
          } else {
            alert('Failed to create comment');
          };
    }
}
const commentbutton = document.querySelector('.cmt');
commentbutton.addEventListener('click', commentform);