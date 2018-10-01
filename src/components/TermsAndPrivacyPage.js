import React from 'react';
import MenuBar from './MenuBar';

const TermsAndPrivacyPage = () => (
    <div>
        <MenuBar />
        <div className="terms_container">
            <h1>Terms of Use and Privacy Policy</h1>
            <h2>Terms of Use</h2>
            <p>
                As of September 7, 2018
            </p>
            <p>
                The Institute for Social Engagement, a registered 501(c)(3) nonprofit, runs Vote Remote (voteremote.us).
            </p>
            <p>
                We provide our service to facilitate your ability to register to vote and vote by absentee ballot. 
            </p>
            <p>
                We provide as accurate information as we can, but we can't guarantee 100% accuracy. We're also not election lawyers, so don't use our information as legal advice.
            </p>
            <p>
                We may make changes to these terms from time to time to better reflect how our service is run.
            </p>
            <h2>Privacy Policy</h2>
            <p>
                As of September 7, 2018
            </p>
            <p>
            We use your information to provide you with our service, including but not limited to election reminders and notices of events related to voter registration.
            </p>
            <p>
            We use third-party service providers to provide elements of our service. Generally, they are only given the information needed to provide their elements of our service, and they do not use that information for other purposes.
            </p>
            <p>
            One of our third-party service providers is Vote.org, which provides several of our registration and absentee ballot tools. Their privacy policy also applies to your data, and it can be viewed at <a href="https://www.vote.org/privacy/">https://www.vote.org/privacy/</a>.
            </p>
            <p>
            We do not otherwise share your information with third parties except if required by law.
            </p>
            <p>
            Usage Data: We automatically collect certain information about your device, such as information about your web browser and your IP address, so that we better understand our website traffic and can improve our service. We use cookies and analytics tools such as Google Analytics. You can learn more about Google Analytics' privacy policy at <a href="http://www.google.com/policies/privacy/partners">http://www.google.com/policies/privacy/partners</a>.
            </p>
            <p>
            Children's Privacy: Since our site is designed for use by voters, we do not knowingly collect the personal information of children under 13 years old.
            </p>
            <p>
            Changes to This Policy: We may make changes to this policy from time to time to better reflect how our service is run.
            </p>
            <p>
            Contact Us: For more information about our privacy practices, please contact <a href="mailto:privacy@voteremote.us">privacy@voteremote.us</a>.
            </p>
        </div>
    </div>
)

export default TermsAndPrivacyPage;