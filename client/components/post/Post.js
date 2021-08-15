import "./Post.css";

function Post() {
  return (
    <div className="post">
      <img
        className="post-image"
        src="https://images.wallpaperscraft.com/image/sea_rocks_moss_132634_800x600.jpg"
        alt=""
      />
      <div className="post-info">
        <div className="post-categories">
          <span className="post-category">Music</span>
          <span className="post-category">Life</span>
        </div>
        <span className="post-title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>
        <hr />
        <span className="post-date">1 minute ago</span>
      </div>
      <p className="post-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
}

export default Post;
