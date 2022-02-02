import React from 'react';
import Input from "./MyInput";
import Select from "./UI/Select";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <Input
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Поиск..."
            />

        </div>
    );
};

export default PostFilter;