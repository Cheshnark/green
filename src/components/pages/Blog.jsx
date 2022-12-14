import React from "react";
import CardComponent from "../CardComponent";
import useFetch from "../useFetch";
import { Link } from "react-router-dom";

const Blog = () => {

    const {data, error, pending} = useFetch('https://green-server-production.up.railway.app/blog');

    return(
        <div className="blog">

            {error && <div>{error}</div>}
            {pending && <div>Loading...</div> }
            {data && (
                <div>
                    <div className="blog-parallax">
                        <h1>Le Blog</h1>
                    </div>  
                        <div className="blog-card">
                        <ul>
                        {data.map( blog => {
                            return(
                                <Link to={`/blog/${blog._id}`} style={{ textDecoration: 'none', color:'black' }}>
                                    <li key={blog._id}><CardComponent blog={blog} /></li>                            
                                </Link>
                            );
                        })
                        }
                        </ul>
                    </div>
                </div>
            )}

        </div>
    )

};

export default Blog;