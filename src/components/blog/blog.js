import React, { useState } from 'react'
import { blogList } from 'components/_data';
import BlogCard from 'components/blog/blog-card';
import Divider from 'components/ui/divider';

const Blog = () => {
  const [myIdx, setMyIdx] = useState(0)
  const [news] = useState(blogList[myIdx]);
  const [newsList] = useState(blogList);

  return (
    <div className="blog">
      <article className="blog__article">
        <h1 className="blog__title">{news.title}</h1>
        <p className="blog__articleparagraph">
          { news.desc }
        </p>
      </article>

      <aside className="blog__aside">
        <img className="blog__asideImg" src={news.imgUrl} />
      </aside>
      
      <Divider bg="bg_black" justify="center" />


      <div className="blog__more">
        <h1 className="blog__moreTitle">Plus d'actualités</h1>
        <Divider bg="bg_black" justify="initial" />
        {newsList.map((item, idx) => (
          <BlogCard blogItem={item} key={idx} />
        ))}
      </div>
    </div>
  )
}

export default Blog
