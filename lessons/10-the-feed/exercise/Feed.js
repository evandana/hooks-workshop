import React, { useState, useEffect } from "react"
import FeedPost from "app/FeedPost"
import { loadFeedPosts, subscribeToNewFeedPosts } from "app/utils"

// SOLUTION
// import FeedFinal from './Feed.final'
// export default FeedFinal

export default Feed

const postCountIncrement = 3;

function Feed() {

  const [time, setTime] = useState(Date.now());
  const [posts, setPosts] = useState(null);
  const [postCountLimit, setPostCountLimit] = useState(postCountIncrement);
  const [newPosts, setNewPosts] = useState(null);
  
  useEffect(() => {
    return subscribeToNewFeedPosts(time, newPosts => {
      setNewPosts(newPosts);
    });
  }, [time]);

  useEffect(() => {
    let isCurrent = true;
    loadFeedPosts(time, postCountLimit)
      .then( posts => {
        if (isCurrent) {
          setPosts(posts)
        }
      })
      return () => { isCurrent = false; };
  }, [time, postCountLimit]);

  const handleViewMore = () => setPostCountLimit(postCountLimit + postCountIncrement);

  const handleShowNewPosts = () => {
    const updatedPosts = [...newPosts, ...posts];
    setPosts(updatedPosts);
    setNewPosts([]);
    setPostCountLimit(postCountLimit + newPosts.length);
    setTime(Date.now());
  };

  return (
    <div className="Feed">
      {newPosts && newPosts.length ? (
        <div className="Feed_button_wrapper">
          <button
            onClick={handleShowNewPosts}
            className="Feed_new_posts_button icon_button"
            >
            View {newPosts.length} New Post{newPosts.length > 1 ? 's' : ''}
          </button>
        </div>
      ) : (
        ''
      )}

      {posts ? (
        posts.map( post => (
          <FeedPost key={post.id} post={post} />
        ))
      ) : (
        <div>Loading Posts...</div>
      )}

      <div className="Feed_button_wrapper">
        <button
          className="Feed_new_posts_button icon_button"
          onClick={handleViewMore}
          >View {postCountIncrement} More</button>
      </div>
    </div>
  )
}