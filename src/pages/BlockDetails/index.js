import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import './BlockDetails.css'
import Footer from '../../components/Footer'

const BlogDetails = () => {
  const { slug } = useParams()
  const [blog, setBlog] = useState(null)

  useEffect(() => {
    if (!slug) return

    fetch(`https://www.sirsonite.in/sirsonite-d/omkaradmin/api/blog/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('API 👉', data)


        if (data.success && data.data) {
          setBlog(data.data)
        } else {
          setBlog(false)
        }
      })
      .catch(console.error)
  }, [slug])

  if (blog === null) {
    return <h2 style={{ textAlign: 'center' }}>Loading...</h2>
  }

  if (blog === false) {
    return (
      <h2 style={{ textAlign: 'center', padding: '100px' }}>Blog not found ❌</h2>
    )
  }

  return (
    <div>
      <Link to='/blog' className='bd-back'> ← Back to All Articles
      </Link>
      <div className='bd-hero'>
        <img src={blog.image || '/default.jpg'} alt={blog.heading} />
        <div className='bd-hero-overlay'>
          <span className='bd-tag'>Blog</span>
          <h1 className='bd-title'>{blog.heading}</h1>
          <div className='bd-meta'>
            <span>{blog.date}</span>
            <span>•</span>
            <span>Omkar Consultancy Team</span>
          </div>
        </div>
      </div>
      <div className='bd-page'>
        <section className='bd-section'>
          <div className='bd-container'>
            <div className='bd-article'>
              <p>
                {blog.short}
              </p>
            </div>
            <aside className='bd-sidebar'>
              <div className='bd-card'>
                <h3>Need Expert Guidance?</h3>
                <p>
                  Get personalized support from our ISO experts.
                </p>
                <Link to='/ContactUs' className='bd-btn'> Contact Us Today
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default BlogDetails
