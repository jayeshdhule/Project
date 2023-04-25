import React from 'react';

import "./Privacy.scss";

const Privacy = () => {
    return(
        // <h1 style={{color:"white"}}>Privacy page</h1>
        <div className="privacy">
        <header>
		<h1>Privacy Policy</h1>
	    </header>
	    <main>
		<h2>Introduction</h2>
		<p>Thank you for considering our social media website. Protecting your privacy is very important to us, and we take the responsibility of safeguarding your personal information seriously. This Privacy Policy describes how we collect, use, and protect your information when you use our website. By using our website, you consent to the practices described in this Privacy Policy.</p>

		<h2>Information we collect</h2>
		<p>When you use our social media website, we may collect the following types of information:</p>
	
			<li >Personal information such as your name, email address, and contact details.</li>
			<li >Information about your usage of our website, including your IP address, browser type, and device information.</li>
			<li >Any other information you choose to share with us, such as your interests, preferences, or content you post on our website.</li>
			<li >Other information relevant to customer surveys and/or offers</li>

		<h2>Children's Privacy:</h2>
		<p>Our website is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately so that we can delete the information.</p>

		<h2>Changes to this Privacy Policy:</h2>
		<p>We may update this Privacy Policy from time to time. If we make any material changes, we will notify you by email or by posting a notice on our website. We encourage you to review this Privacy Policy periodically to stay informed about our information practices.</p>

	</main>
	
    <p style={{color:"grey"}}>&copy; 2023 Quotify.</p>
  
    </div>
    )
    };
export default Privacy;