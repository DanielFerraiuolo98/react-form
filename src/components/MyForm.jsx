import { useState } from "react";

const initialBlog = {
    title: "",
    image: "",
    description: "",
};

function MyForm() {
    const [blog, setBlog] = useState(initialBlog);
    const [blogList, setBlogList] = useState([]);

    function handleInput(e) {
        const value =
            e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setBlog({ ...blog, [e.target.name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setBlogList([...blogList, blog]);
        setBlog(initialBlog);
    }

    return (
        <section className="my-4">
            <h2>Work with htmlForms</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="blogTitle" className="form-label">
                        Titolo
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="blogTitle"
                        value={blog.title}
                        onChange={handleInput}
                        name="title"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="blogImage" className="form-label">
                        URL immagine
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="blogImage"
                        value={blog.image}
                        onChange={handleInput}
                        name="image"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="blogDescription" className="form-label">
                        Descrizione
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="blogDescription"
                        value={blog.description}
                        onChange={handleInput}
                        name="description"
                    />
                </div>
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="userPremium"
                        name="premium"
                        onChange={handleInput}
                    />
                    <label className="form-check-label" htmlFor="userPremium">
                        Check me out
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </section>
    );
}

export default MyForm;


