import "./Write.css";

function Write() {
  return (
    <div className="write">
      <img
        className="write-image"
        src="https://images.wallpaperscraft.com/image/mountains_valley_twilight_140586_3840x2400.jpg"
        alt=""
      />
      <form className="write-form">
        <div className="write-form-group">
          <label htmlFor="file-input" />
          <i className="write-icon fas fa-plus"></i>
          <input type="file" id="file-input" style={{ display: "none" }} />
          <input
            className="write-input"
            type="text"
            placeholder="Title"
            autoFocus={true}
          />
        </div>
        <div className="write-form-group">
          <textarea
            className="write-text"
            placeholder="Tell your surreal story..."
            rows="10"
            cols="50"
            type="text"
          />

          <button className="write-submit">Publish my story</button>
        </div>
      </form>
    </div>
  );
}

export default Write;
