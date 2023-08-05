import classes from './Post.module.css';

function Post(props){
    return(
        <div className={classes.post}>
            <h1 className={classes.author}>My name is {props.author}</h1>
            <p className={classes.text}>{props.body}</p>
        </div>
    )
}

export default Post;