import Post from "./Post"
import classes from './PostList.module.css'
import NewPost from "./NewPost";
function PostList(){
    return(
        <>
        <NewPost/>
        <ul className={classes.posts}>
            <Post author="Joywin" body = "This is my post"/>
            <Post author="Chris" body = "This is my post"/>
            <Post author="Canon" body = "This is my post"/>
            <Post author="Joswin" body = "This is my post"/>
        </ul>
        </>
    )
}

export default PostList;