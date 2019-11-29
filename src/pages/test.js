import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { useState } from "react"
import AccordianSection from "../components/accordian"

const TestPage = ({ data }) => {
  // This approach is if you only want max one section open at a time. If you want multiple
  // sections to potentially be open simultaneously, they can all be given their own `useState`.
  const [expanded, setExpanded] = useState(0)

  return (
    <>
      <SEO title="Thanks" />
      <div className="page-content">
        <h2>About the Ecosystem Support Program</h2>
        <div className="accordian-container">
          <AccordianSection
            key={0}
            i={0}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="What is the difference between “Ecosystem Support Program” and “Ethereum Grants Program”?"
          >
            <p>
              The Ecosystem Support Program is an expansion of the original
              Ethereum Grants Program which mainly focused on financial support.
              The Ecosystem Support Program was created to leverage Ethereum
              Foundation resources to increase the Ethereum ecosystem’s capacity
              to self-sustain and thrive. Awarding grants continues to be an
              important tool for us; but impact often takes more than just
              money, so we’ve expanded the range of support we provide. Our goal
              is to take an individual approach to each project, working
              together to establish realistic goals and offering support
              targeted to facilitate those goals.
            </p>
          </AccordianSection>
          <AccordianSection
            key={1}
            i={1}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="What can Ecosystem Support help with?"
          >
            <p>
              To give you an idea of what the Ecosystem Support Program can do
              for you, here is a non-exhaustive list some of the ways we have
              helped other applicants.
            </p>
            <p>We have:</p>
            <ul>
              <li>Awarded grants</li>
              <li>Provided feedback and direction on a project</li>
              <li>
                Facilitated collaborations with other teams and individuals
              </li>
              <li>Found mentors and advisors</li>
              <li>
                Connected projects to community members in the same geographical
                area
              </li>
              <li>
                Connected projects to others working in the same topic area
              </li>
              <li>
                Facilitated project participation in events (hackathons,
                conferences, etc.) to meet the community, showcase work, and get
                feedback
              </li>
              <li>Provided introduction to other funding programs</li>
            </ul>
            <p>
              We are still expanding the scope of our support, so if what you’re
              looking for is not on this list, please get in touch and let us
              know what you need!
            </p>
          </AccordianSection>
          <AccordianSection
            key={3}
            i={3}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="Who can apply?"
          >
            <p>
              Newcomers to Ethereum, established projects, and past grantees are
              all welcome and encouraged to reach out. Whether you’re facing a
              specific challenge and don’t know who to ask or where to go, or
              know exactly what you need and hope we can help you access it,
              feel free to submit an inquiry. The best way to find out if the
              Ecosystem Support Program is a good fit for your project is
              through a two-way conversation.
            </p>
            <p>
              <strong>What types of projects are you interested in?</strong>{" "}
              Some previous areas of focus have been 2.0 clients, state
              channels, scaling/layer 2, zero knowledge proofs and more - but
              we’re always open to new ideas. If you think your project will
              make Ethereum better for everyone, we want to hear about it!
            </p>
            <p>
              <strong>Are you open to enterprise?</strong> Of course! We are
              happy to work with for-profit entities that are contributing to
              the Ethereum ecosystem, although enterprise projects are likely to
              be better suited to receive non-financial support such as
              mentorship, introductions to domain experts, or facilitated
              collaborations.
            </p>
          </AccordianSection>
          <AccordianSection
            key={4}
            i={4}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="What happens after an inquiry is submitted?"
          >
            <p>
              You’ll be assigned a guide, who will be a consistent point of
              contact to help you navigate the process. There will be an initial
              conversation and peer review to determine whether the program is a
              good fit for your project and what types of support might be most
              appropriate. If it seems like a fit, you’ll enter the next phase
              of formally applying for a grant, exploring other resources, or
              both. Whichever track(s) you embark on, your guide will be with
              you every step of the way.
            </p>
            <Img
              className="process-img"
              fluid={data.file.childImageSharp.fluid}
              alt="Ecosystem Support Program Process"
            />
            <p>
              <strong>
                How long will it take before I hear back from you?
              </strong>{" "}
              You should hear from us within about two weeks after you get in
              touch. If your inquiry progresses to a grant application, the
              overall process may take a few weeks to a few months depending on
              the scope and complexity of your project.
            </p>
            <p>
              <strong>Is my application confidential?</strong> Any information
              you provide may be shared in the peer-review process, so be
              mindful of what you decide to include.
            </p>
            <p>
              <strong>Can grants be paid out in ETH?</strong> We can provide
              payment in ETH or Fiat currency.
            </p>
          </AccordianSection>
        </div>
        <div className="helpful-links">
          <h2>Helpful links</h2>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://ethereum.org"
              >
                ethereum.org
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://blog.ethereum.org"
              >
                blog.ethereum.org
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://weekinethereumnews.com"
              >
                weekinethereumnews.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "esp-process.png" }) {
      childImageSharp {
        fluid(maxWidth: 540) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default TestPage
