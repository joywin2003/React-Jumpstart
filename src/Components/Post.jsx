

function Post(props){
    return(
        <div>
            <h1>My name is {props.author}</h1>
            <p>{props.body}</p>
        </div>
    )
}

export default Post;