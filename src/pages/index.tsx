import * as React from "react"
import Header from "../components/layout/Header"
import Seo from "../components/layout/SEO"
import ContactCard from "../components/contact/ContactCard"
import ContactForm from "../components/contact/ContactForm"

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
          className="bg-banner bg-auto h-screen bg-no-repeat pt-[4.5rem]"
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
              </h4>
            </article>
          </div>
        </section>
        <section
          className=""
          id="about-me"
        >
          <div
            className="container"
          >
            <h2
              className="my-6 text-center text-primary"
            >
              About me
            </h2>
            <div
              className="flex flex-wrap"
            >
              <div
                data-sal="slide-up"
                data-sal-delay="300"
                data-sal-easing="ease"
                className="w-full lg:w-1/2 flex justify-center"
              >
                <article>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad possimus quae quisquam ratione similique tenetur ut. Aspernatur consectetur expedita ipsa natus numquam omnis perferendis vero voluptatibus. Alias corporis cupiditate dolor earum, eius eos expedita facilis fugiat illo ipsa laboriosam magnam maiores molestiae officia possimus qui quibusdam sed sint soluta suscipit? Animi architecto assumenda autem, beatae eos exercitationem nulla perferendis praesentium quas soluta suscipit ut, voluptates. Blanditiis dignissimos earum laudantium placeat.</p>
                </article>
              </div>
            </div>
          </div>
        </section>
        <section
          className="my-12"
        >
          <div
            className="container"
          >
            <h2
              className="my-6 text-center text-primary"
            >
              Skill
            </h2>
          </div>
        </section>
        <section
          id="contact"
          className="my-12"
        >
          <div
            className="container"
          >
            <h2
              className="my-6 text-center text-primary"
            >
              Contact
            </h2>
            <div
              className="flex flex-wrap"
            >
              <div
                data-sal="slide-up"
                data-sal-delay="300"
                data-sal-easing="ease"
                className="w-full lg:w-1/2"
              >
                <ContactCard/>
              </div>
              <div
                className="w-full lg:w-1/2"
              >
                <ContactForm/>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default IndexPage
