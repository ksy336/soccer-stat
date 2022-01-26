import React from 'react';
import ListOfLeagues from "./ListOfLeagues";


const PostList = ({posts}) => {
    if(!posts.length) {
        return (
            <h1>Posts not found</h1>
        )
    }
    return (
        <div>
            <h1 style={{textAlign: "center"}}>Спортивная статистика</h1>
            {posts.map(post =>
                <ListOfLeagues post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;