const post = [
    {title: 'Post One', body: 'This is Post One'},
    {title: 'Post Two', body: 'This is Post Two'}
]

function getPost(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        })
        document.body.innerHTML = output;
    }, 2000)
}
function createPost(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000)
}
getPost()

createPost({title: 'Post Three', body: 'This is Post Three'}, getPost);