import React from "react"
import Layout from "../components/layout"
import Content from "../components/content"
import SubStage from "../components/subStage"

const About = () => (
  <>
    <Layout>
      <SubStage headline="About" />
      <Content headline="About about">
        <div>
          This should be a text about myself with some info about where I'm from
          what I like, where I worked etc.
        </div>
      </Content>
    </Layout>
  </>
)

export default About
