import * as React from "react"
import Header from "../components/layout/Header"
import Seo from "../components/layout/SEO"
import ContactCard from "../components/contact/ContactCard"
import ContactForm from "../components/contact/ContactForm"
import SkillList from "../components/skill/SkillList"

const IndexPage = () => {

  return (
    <>
      <Seo
        title="Portfolio"
        description="Hello, i 'm Pv Duc. High level experience in web design and development knowledge, producing quality work."
      />
      <Header />
      <main>
        <section
          id="hello"
          className="bg-banner bg-cover h-screen bg-no-repeat pt-[4.5rem]"
        >
          <div
            className="container"
          >
            <article
              className="mt-8 lg:mt-[12rem]"
            >
              <h3>
                Hello, i 'm Pv Duc
              </h3>
              <h1
                className="mt-2"
              >
                Web&nbsp;
                <span
                  className="text-primary"
                >
                  Developer
                </span>
              </h1>
              <h4
                className="mt-6"
              >
                High level experience in web design and development knowledge, producing quality work.
                <a href="https://res.cloudinary.com/pv-duc/image/upload/v1636895705/picture.png"></a>
              </h4>
            </article>
          </div>
        </section>
        <section
          id="skills"
          className="my-12"
        >
          <div
            className="container"
          >
            <h2
              className="my-6 text-center text-primary"
            >
              Skills
            </h2>
            <SkillList/>
          </div>
        </section>
        <section
          id="contact"
          className="py-12 bg-primary"
        >
          <div
            className="container"
          >
            <h2
              className="my-8 text-center text-white"
            >
              Contact
            </h2>
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-32"
            >
              <ContactForm/>
              <div
                data-sal="slide-right"
                data-sal-delay="300"
              >
                <ContactCard/>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default IndexPage
