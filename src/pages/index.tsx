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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#171D4F" fill-opacity="1" d="M0,96L48,96C96,96,192,96,288,117.3C384,139,480,181,576,176C672,171,768,117,864,112C960,107,1056,149,1152,170.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <section
          id="contact"
          className="py-3 bg-[#171D4F]"
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
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default IndexPage
