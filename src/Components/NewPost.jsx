import classes from './NewPost.module.css';
import { useState } from 'react';
function NewPost(props) {
    const [body, setBody] = useState('0/200');
    function changeHandler(event) {
        setBody(event.target.value);
    }
    return (
        <form className={classes.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={(event) => {
                    changeHandler(event),
                    props.onChangeBody(event)
                }} />
            </p>
            <p>{body.length}/200</p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={props.onChangeAuthor} />
            </p>
        </form>
    );
}

export default NewPost;