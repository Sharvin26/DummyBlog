import React, { useState, useEffect } from "react";
import PostLists from "../components/PostLists";
import data from "../db.json";

function PostPage() {
    const [posts, setposts] = useState([]);
    useEffect(() => {
        setposts(data["posts"]);
    }, []);

    return (
        <div>
            <PostLists posts={posts} />
        </div>
    );
}

export default PostPage;
