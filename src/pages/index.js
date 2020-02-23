import React from "react"
import Stage from "../components/stage"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "../components/content"
import Hello from "../components/hello"
import Skill from "../components/skill"
import Seperator from "../components/seperator"

const IndexPage = () => (
  <>
    <Layout>
      <Stage />
      <Content>
        <Hello />
      </Content>
      <Seperator />
      <Content headline="WHAT I CAN DO">
        <Skill headline="LANGUAGES" content={["javascript", "typescript"]} />
        <Skill headline="FRAMEWORKS" content={["react", "vue"]} />
        <Skill headline="OTHER" content={["gatsby", "tailwind"]} />
      </Content>
    </Layout>
  </>
)

export default IndexPage
