import React, {useState} from "react";
import ListOfLeagues from "./components/ListOfLeagues";
import "./styles/App.css";
import PostList from "./components/PostList";
import MyInput from "./components/MyInput";
import MyButton from "./components/UI/MyButton";
import Select from "./components/UI/Select";

function App() {
    const [posts, usePosts] = useState([
        {id: 1, title: "Competition", body: "Здесь вы увидите список лиг/соревнований по футболу"},
        {id: 2, title: "Teams", body: "Здесь вы увидите список команд"},
        {id: 3, title: "Matches for leagues", body: "Здесь вы увидите список матчей лиги"},
        {id: 4, title: "Matches for teams", body: "Здесь вы увидите список матчей команды"}
    ]);
    const [title, setTitle] = useState("");
    const addNewPost = () => {

    }
  return (
    <div className="App">

        <form>
            <MyInput
                value={title}
                type="text"
                placeholder="Name of post"
                />
                <MyInput type="text" placeholder="Post's description"/>
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
        <PostList posts={posts} />
        <hr style={{margin: '15px 0'}}/>
        <div>
            <Select
                defaultValue="Сортировка"
                options={[
                    {value: "title", name: "По названию"},
                    {value: "body", name: "По описанию"}
                ]}/>
        </div>
    </div>
  );
}

export default App;
