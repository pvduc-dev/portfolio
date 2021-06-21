import * as React from "react"
import Header from "../components/layout/Header"

const IndexPage = () => {

  return (
    <>
      <Header />
      <section
        className="bg-banner h-screen pt-[90px]"
      >
        <div
          className="max-w-6xl mx-auto"
        >
          <p
            className="mt-[12rem] text-lg font-bold"
          >
            Hello, I 'm Pv Duc
          </p>
          <p
            className="mt-4 font-bold text-6xl"
          >
            Web&nbsp;
            <span
              className="text-primary"
            >
             Developer
          </span>
          </p>
          <p
            className="mt-4 w-[30rem]"
          >
            High level experience in web design and development knowledge, producing quality work.
          </p>
        </div>
      </section>
      <section>
        <div
          className=""
        >
          <form
            name="contact-form"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input name="name" placeholder="Your Name" type="text" />
            <input name="email" placeholder="name@name.com" type="email" />
            <textarea name="message" />
            <button>Send</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default IndexPage
