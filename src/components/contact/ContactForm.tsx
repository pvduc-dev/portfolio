import * as React from 'react';

import TextField from '../shared/TextField';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {
  function captchaChangeHandler(data) {
  }
  return (
    <form method="POST">
      <TextField label="Your name" />
      <TextField label="Your email" />
      <TextField label="Subjects" />
      <TextField label="Your message" />
      <div
        className="mt-4"
      >
        <ReCAPTCHA
          sitekey={process.env.GATSBY_RECAPTCHA_KEY}
          onChange={captchaChangeHandler}
        />
      </div>
    </form>
  );
};

export default ContactForm;
