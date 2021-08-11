import "./Setting.css";
import Sidebar from "../../components/sidebar/Sidebar";

function Settings() {
  return (
    <div className="settings">
      <div className="setting-wrapper">
        <div className="setting-title">
          <span className="setting-update-title">Update Your Account</span>
          <span className="setting-delete-title">Delete Your Account</span>
        </div>
        <form className="setting-form">
          <label>Profile Picture</label>
          <div className="setting-dp">
            <img
              src="https://images.wallpaperscraft.com/image/puppy_dog_cup_106508_960x544.jpg"
              alt=""
            />
            <label htmlFor="setting-file-input">
              <i className="setting-dp-icon fas fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="abc" />
          <label>Email</label>
          <input type="email" placeholder="abc@e-mail.com" />
          <label>Password</label>
          <input type="password" placeholder="Enter Password" />
          <button className="setting-submit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Settings;
