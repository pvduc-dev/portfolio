import * as React from 'react';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';

import TextField from '../shared/TextField';
import ReCAPTCHA from 'react-google-recaptcha';
import Button from '../shared/Button';

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const ContactForm = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  function captchaChangeHandler(data) {}

  function nameChangeHandler(value: string): void {
    console.log(value)
    setName(value);
  }

  function emailChangeHandler(value: string): void {
    setEmail(value);
  }

  function subjectChangeHandler(value: string): void {
    setSubject(value);
  }

  function messageChangeHandler(value: string): void {
    setMessage(value);
  }

  async function submitHandler(
    $event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    $event.preventDefault();
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact-us',
          name: name,
          email: email,
          subject: subject,
          message: message
        })
      });
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <form
      onSubmit={submitHandler}
    >
      <input type="hidden" name="form-name" value="contact" />
      <TextField
        label="Your name"
        name="name"
        value={name}
        onChange={nameChangeHandler}
      />
      <TextField
        label="Your email"
        name="email"
        value={email}
        onChange={emailChangeHandler}
      />
      <TextField
        label="Subjects"
        name="subject"
        value={subject}
        onChange={subjectChangeHandler}
      />
      <TextField
        label="Your message"
        name="message"
        value={message}
        onChange={messageChangeHandler}
      />
      <div className="mt-4">
        <ReCAPTCHA
          sitekey={process.env.GATSBY_RECAPTCHA_KEY}
          onChange={captchaChangeHandler}
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default ContactForm;
