import React from 'react';

const ListOfLeagues = (props) => {

    return (
        <div className="post-container">
            <div className="post">
                <header></header>
                <div className="post_content">
                    <strong> {props.post.title}</strong>
                    <div className="post__body">{props.post.body}</div>
                </div>
                <div className="post__btns"/>
            </div>

        </div>
    );
};

export default ListOfLeagues;