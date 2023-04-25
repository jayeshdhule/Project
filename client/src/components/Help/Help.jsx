import React from 'react';

import "./Help.scss";

const Help = () => {
    return(
        // <h1 style={{color:"white"}}>Help page</h1>
    <div className="help">
    <header>
    <h1>Help Page</h1>
  </header>

  <main>
    <section>
      <h2>How do I create an account?</h2>
      <p>
          1. Go to the Quotify's homepage.<br/>
          2. Look for a "Sign Up" or "Create Account". It's usually located in the top right corner of the webpage.<br/>
          3. Click on the "Sign Up" or "Create Account".<br/>
          4. Fill in the registration form with your personal details such as name, email address, password, and date of birth.<br/>
          5. Choose a username or handle that you want to use on the social media webpage. This is the name that will be displayed on your profile and used to identify you.<br/>
          6. Read the terms of service and privacy policy carefully, then check the box to agree to them.<br/>
          7. Click the "Submit" or "Create Account" button to complete the registration process.<br/>
          8. Some social media webpages may require you to verify your email address by clicking on a link sent to your email inbox.<br/>
          <br/>
          Once you have completed these steps, you should be able to access your new account on the social media webpage and start using its features.<br/>
        </p>
    </section>
    {/* <section>
      <h2>What should I do if I forgot my password?</h2>
      <p>
        1. Go to the login page of the social media webpage.<br/>
        2. Click on the "Forgot Password" or "Reset Password" link. This is usually located below the login form.<br/>
        3. Enter the email address associated with your account and click on the "Reset Password" button.<br/>
        4. The social media webpage will send you an email with instructions on how to reset your password. Follow the instructions carefully.<br/>
        5. In some cases, you may be asked to answer security questions or provide additional information to verify your identity.<br/>
        6. Once you have verified your identity, you will be prompted to create a new password. Choose a strong and unique password that you have not used before.<br/>
        7. Confirm your new password by typing it in again, and then click on the "Save" or "Reset" button.<br/>
        After you have reset your password, you should be able to log in to your account on the social media webpage with your new password. If you continue to have trouble logging in or resetting your password, contact the customer support team of the social media webpage for further assistance.<br/>
      </p>         
    </section> */}

    <section>
      <h2>Contact Us</h2>
      <p>If you have any questions or concerns, please contact us using the information below:</p>
        <li>Email: quotifysupport@socialmedia.com</li>
        <li>Phone: +91 0000000000</li>
        <li>Address: 123 Main St, Maharastara, India</li>
    </section>
    
  </main>
  <p style={{color:"grey"}}>&copy; 2023 Quotify.</p>
    </div>
    )
};

export default Help;