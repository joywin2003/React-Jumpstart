import Post from "./Post"
import classes from './PostList.module.css'
import NewPost from "./NewPost";
import { useState } from 'react';
import Modal from "./Modal";

function PostList() {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuther] = useState('');

    function changeBodyHandler(event) {
        setEnteredBody(event.target.value);
    }
    function changeauthorHandler(event) {
        setEnteredAuther(event.target.value);
    }
    return (
        <>
            <Modal>
                <NewPost
                    onChangeBody={changeBodyHandler}
                    onChangeAuthor={changeauthorHandler} 
                    />
            </Modal>
                <ul className={classes.posts}>
                    <Post author={enteredAuthor} body={enteredBody} />
                    <Post author="Chris" body="This is my post" />
                    <Post author="Canon" body="This is my post" />
                    <Post author="Joswin" body="This is my post" />
                </ul>
        </>
    )
}

export default PostList;