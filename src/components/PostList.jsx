import React from 'react';
import ListOfLeagues from "./ListOfLeagues";

const PostList = ({posts}) => {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>Спортивная статистика</h1>
            {posts.map(post =>
                <ListOfLeagues post={post} key={post.id} />
            )}
        </div>
    );
};

export default PostList;