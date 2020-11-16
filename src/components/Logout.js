import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogout from 'react-google-login';

function Logout() {
const onSuccess = () => {
    alert('Logout Successful');
  };
   
  return(
  <div>
    <GoogleLogout
      clientId="632398293150-vcd926s2uh0qmi3h6uut1pc8vs8vrj56.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={onSuccess}
      onFailure={onSuccess}
    />
    </div>
  );
}

export default Logout;