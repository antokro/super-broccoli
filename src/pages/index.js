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
        <Skill
          headline="LANGUAGES"
          content={["javascript ES6", "typescript", "html5", "css3"]}
        />
        <Skill
          headline="LIBRARIES"
          content={["react", "vue", "gatsby", "tailwind", "sass"]}
        />
        <Skill headline="OTHER TECHNOLOGIES" content={["Node.js", "MongoBD"]} />
      </Content>
    </Layout>
  </>
)

export default IndexPage
