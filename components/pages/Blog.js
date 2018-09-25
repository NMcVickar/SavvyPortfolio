import Post from '../Post';

export default function Blog(state){
    return state
        .posts
        .map(Post)
        .join('')
    // `
    // <div id=content>
    //   <div class="container">
    //     <h1>Welcome to My Blog</h1>
    //     <h2>Here you can find some updates and notes on my progress</h2>
    //     <h3>Feel free to take a look around</h3>
    //   </div>
    // </div>
    // `
    ;
}
