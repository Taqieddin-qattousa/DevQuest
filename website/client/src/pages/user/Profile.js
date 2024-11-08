import Navbar from 'components/Navbar';
import React, { useState } from 'react';
import 'styles/Profile.css'; // Make sure to create and import a CSS file for styling
import { Link } from 'react-router-dom';


function ProfilePage() {

  const [name, setName] = useState('Morty Smith');
  const [country, setCountry] = useState('Palestine');
  const [bio, setBio] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut velit imperdiet, vulputate sapien eu, maximus tellus. Nam tellus sem, condimentum et rhoncus a, interdum.'
  );

  return (
   <>
    <Navbar />

    <div className="profile-page">
      <div className="sidebar">
        <ul>
          <li className="active">Profile</li>
          
          <li>
          <Link to="/changepassword" className="link">Login</Link>
         </li>
          <li> <Link to="/Billing" className="link">Billing</Link></li>
        </ul>
      </div>
      
      <div className="profile-content">
        <div className="profile-header">
          <div className="profile-avatar">
            <img src="https://via.placeholder.com/100" alt="Avatar" />
            <button className="update-btn">Update</button>
            <button className="remove-btn">Remove</button>
          </div>
        </div>
        <form className="profile-form">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="country">Country</label>
          <select
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="Palestine">Palestine</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            {/* Add more countries as needed */}
          </select>

          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>

          <div className="form-buttons">
            <button type="submit" className="save-btn">Save Changes</button>
            <button type="button" className="cancel-btn">Cancel</button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default ProfilePage;
