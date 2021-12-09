import { getAuth } from "@firebase/auth";
import React from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import 'react-comments-section/dist/index.css';

const CommentInput = ({ cancellor, parentId, value, edit, submit, handleCancel }) => {
    const [text, setText] = useState("");
    const auth = getAuth();
    const [user] = useAuthState(auth);

    const handleChange = (e) => {
        const inputText = e.target.value;
        setText(inputText);
    }

    const onSumbit = (e) => {
        submit(cancellor, text, parentId, edit, setText);
    }

    const onCancel = (e) => {
        e.preventDefault();
        setText('');
    }

    return (
        <form className="_CXD_f">
            <div className="_27hXc">
                <img src={user === null ? "https://thumbs.dreamstime.com/b/cat-avatar-illustration-cartoon-45383590.jpg" : user.photoURL}
                    style={
                        {
                            width: 38,
                            height: 38,
                            borderRadius: 38 / 2
                        }
                    }
                    alt="Icon"
                />
            </div>
                <input
                    className="_1blCt"
                    value={text}
                    onChange={handleChange}
                    disabled={user === null}
                    placeholder={user === null ? "You need to sign in" : "Type here"}
                />
                <div className="_9-5lp">
                    <button
                        className="_3oc4k"
                        onClick={onSumbit}
                        type='button'
                        value={text}
                        disabled={!text}
                        style={!text ? { backgroundColor: '#84dcff' } : { backgroundColor: '#30c3fd' }}
                    >
                        Post
                    </button>
                    <button
                        className="_36TCS btn-cancel"
                        onClick={onCancel}
                        disabled={user === null}
                    >
                        Cancel
                    </button>
                </div>
        </form>
    );
}

export default CommentInput;