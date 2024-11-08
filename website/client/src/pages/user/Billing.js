import React from 'react';
import 'styles/Billing.css'; // Create and import this CSS file for styling
import Navbar from 'components/Navbar';
import { Link } from 'react-router-dom';
function Billing() {
  return (
    <>
    <Navbar />
    <div className="billing-page">
      <div className="sidebar">
        <ul>
          <li>  <Link to="/account" className="link">Profile</Link></li>
          <li>  <Link to="/ChangePassword" className="link">Login</Link></li>
          <li className="active"><Link to="/Billing" className="link">Billing</Link></li>
        </ul>
      </div>
      <div className="billing-content">
        <h2>Billing</h2>
        <div className="billing-details">
          <p><strong>Subscription type:</strong> <span className="highlight">ANNUAL MEMBER</span></p>
          <p><strong>Subscription renewal:</strong> <span className="highlight">8/8/2024</span></p>
          <p>
            <strong>Payment type:</strong>
            <button className="edit-payment-btn">Edit Payment Method</button>
          </p>
          <p>
            <strong>Cancel subscription:</strong>
            <button className="cancel-btn">Cancel</button>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Billing;
