const commentform = async function(event) {
    event.preventDefault();
    const postid = document.querySelector('#postid').value.trim();
    const comment = document.querySelector('textarea[name="comment-body"]').value;
    if (comment) {
        const response =
        await fetch(`/api/comment`, {
            method: 'POST',
            body: JSON.stringify({ postid, comment }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            alert('Failed to create comment');
          };
    }
}
const commentbutton = document.querySelector('.cmt');
commentbutton.addEventListener('click', commentform);