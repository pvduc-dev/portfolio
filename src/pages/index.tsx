import * as React from "react"
import Header from "../components/layout/Header"
import Seo from "../components/layout/SEO"
import ContactCard from "../components/contact/ContactCard"
import ContactForm from "../components/contact/ContactForm"
import SkillList from "../components/skill/SkillList"
import Card from "../components/contact/Card";

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
          className="bg-cover h-screen bg-no-repeat pt-[4.5rem]"
          style={{backgroundImage: 'url(static/portfolio-banner.svg)'}}
        >
          <div
            className="container"
          >
            <article
              className="mt-8 lg:mt-[12rem]"
            >
              <h3 className="text-[#E5E7EB]">
                Hello, i 'm Pv Duc
              </h3>
              <h1
                className="mt-2 text-[#E5E7EB]"
              >
                Web&nbsp;
                <span
                  className="text-primary"
                >
                  Developer
                </span>
              </h1>
              <h4
                className="mt-6 text-[#E5E7EB]"
              >
                High level experience in web design and development knowledge, producing quality work.
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
              className="my-6 text-center text-[#5A6DFF]"
            >
              Skills
            </h2>
            <SkillList/>
          </div>
        </section>
        <section
          id="contact"
          className="py-12 bg-[#171D4F]"
        >
          <div
            className="container"
          >
            <h2
              className="my-8 text-center text-[#E5E7EB]"
            >
              Contact
            </h2>
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            >
              <Card/>
              <Card/>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default IndexPage
