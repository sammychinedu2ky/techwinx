import React from 'react';
import PostCarousel from '../components/PostCarousel';
import PostCard from '../components/PostCard';

const AI = () => {
  return (
    <section className="section">
      <style>
        {`
          
        `}
      </style>
      <div className="py-4">
        <h3 className="center"><span aria-label = "jsx-a11y" role = "img">🤖</span> AI</h3>
        <PostCarousel>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </PostCarousel>
      </div>
    </section>
  )
}

export default AI;