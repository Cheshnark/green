import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../useFetch';

function BlogEntry() {
const {id} = useParams();
const {data:blog, pending, error} = useFetch('http://localhost:8000/blog/' + id);

  return (
    <div className="entry">
            {pending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (                
              <div className="entry-content">
                      <img src={blog.url} alt="blog-img" />
                      <h1 className='about-content-text02-h1'>{blog.title}</h1>
                      <p>{blog.body}</p>
              </div>
            )}
      </div>
  )
}

export default BlogEntry