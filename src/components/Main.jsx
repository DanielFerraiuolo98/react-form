import { useState } from "react";
import posts from "../posts";
import Card from "../Card";

function Main() {
    const [blog, setBlog] = useState(posts);

    function deletePost(id) {
        setBlog(blog.filter((el) => el.id !== id));
    }

    return (
        <>
            <main className="main-container">
                {blog.map(post => (
                    <div className="card-container" key={post.id}>
                        <Card
                            title={post.name}
                            image={post.image}
                            tags={post.tags}
                            content={post.content}
                            published={post.published}
                            onDelete={() => deletePost(post.id)}
                        />
                    </div>
                ))}
            </main>
        </>
    );
}

export default Main;
