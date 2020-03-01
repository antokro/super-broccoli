import React from "react"
import Layout from "../components/layout"
import Content from "../components/content"
import SubStage from "../components/subStage"
import Copy from "../components/Copy"
import Bio from "../components/Bio"

const About = () => (
  <>
    <Layout>
      <SubStage headline="About" />
      <Content>
        <Copy>A little intro about myself</Copy>
      </Content>
      <Content headline="Bio">
        <Bio />
      </Content>
    </Layout>
  </>
)

export default About
