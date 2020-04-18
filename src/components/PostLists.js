import React from "react";

function PostLists(props) {
    return (
        <div style={{ margin: 20 }}>
            {props.posts.map((post) => (
                <div className="card mt-4" key={post.id}>
                    <h2 className="card-header">{post.title}</h2>

                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">
                            @{post.author}
                        </h6>
                        <blockquote className="blockquote mb-0">
                            <p>{post.body}</p>
                        </blockquote>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PostLists;
