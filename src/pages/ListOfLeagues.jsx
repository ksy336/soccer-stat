import React, {useMemo, useState} from 'react';
import PostList from "../components/PostList";
import Input from "../components/MyInput";
import Select from "../components/UI/Select";

const ListOfLeagues = () => {
    const [posts, usePosts] = useState([
        {id: 1, title: "Competition", body: "Здесь вы увидите список лиг/соревнований по футболу"},
        {id: 2, title: "Teams", body: "Здесь вы увидите список команд"},
        {id: 3, title: "Matches for leagues", body: "Здесь вы увидите список матчей лиги"},
        {id: 4, title: "Matches for teams", body: "Здесь вы увидите список матчей команды"}
    ]);
    const [title, setTitle] = useState("");
    const [selected, setSelected] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const sortPosts = (sort) => {
        setSelected(sort);
    }

    const sortedPost = useMemo(() => {
        if(selected) {
            return [...posts].sort((a, b) => a[selected].localeCompare(b[selected]));
        }
        return posts;
    }, [selected, posts]);

    const searchedAndSortedPosts = useMemo(() => {
        return sortedPost.filter(post => post.title.toLowerCase().includes(searchQuery));
    }, [searchQuery, sortedPost]);
    return (
        <div>
            {searchedAndSortedPosts.length
                ?
                <PostList posts={searchedAndSortedPosts} />
                :
                <h1>
                    Посты не найдены!
                </h1>
            }


            <hr style={{margin: '15px 0'}}/>
            <div>
                <Input
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Поиск..."
                />
                <Select
                    value={selected}
                    onChange={sortPosts}
                    defaultValue="Поиск"
                    options={[
                        {value: "title", name: "По названию"},
                        {value: "body", name: "По описанию"}
                    ]}/>
            </div>
        </div>

    );
};

export default ListOfLeagues;