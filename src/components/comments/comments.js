import React, { useState } from "react";
import { CommentSection } from 'react-comments-section/dist/index.js';
import 'react-comments-section/dist/index.css';
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithRedirect, signOut } from "firebase/auth";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { useEffect } from "react";
import Button from "@restart/ui/esm/Button";
import "./comments.css";
import CommentInput from "./comment-input/comment-input";

const commentInputFunc = (props) => {
    return <CommentInput parentId={props.parentId}
        cancellor={props.cancellor}
        value={props.value} edit={props.edit}
        submit={props.submit} handleCancel={props.handleCancel} />
}

const Comments = ({ user, commentsDb }) => {
    const db = getFirestore();
    const auth = getAuth();
    const docComments = doc(db, "comments", "comments");
    const [comment, setComment] = useState(commentsDb[0].comments);

    useEffect(() => {
        async function updateDb() {
            await updateDoc(docComments, {
                comments: comment
            });
        }
        updateDb();
    }, [comment]);

    const login = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    }

    let userId = "";
    let avatarUrl = "";
    let name = "";
    if (user !== null) {
        userId = auth.currentUser.uid;
        avatarUrl = auth.currentUser.photoURL;
        name = auth.currentUser.displayName;
    }

    const loginButton = user ? null : (<Button className="btn-log" onClick={login}>Sign in With Google Account</Button>);
    const logOutButton = user ? (<Button className="btn-log" onClick={() => signOut(auth)}>Sign out</Button>) : null;

    return (
        <React.Fragment>
            <div className="comments-container">
                <h2>Секція з коментарями</h2>
                {loginButton}
                {logOutButton}
                <div className="commentSection">
                    <CommentSection
                        currentUser={userId && { userId: userId, avatarUrl: avatarUrl, name: name }} commentsArray={comment}
                        setComment={setComment} customInput={commentInputFunc} />
                </div>
            </div>
        </React.Fragment>

    );
}

export default Comments;
