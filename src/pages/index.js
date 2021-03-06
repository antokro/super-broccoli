import React from "react"
import Stage from "../components/stage"
import Layout from "../components/layout"
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
      <Content headline="TECHNOLOGIES I WORKED WITH">
        <Skill
          content={[
            "javascript ES6",
            "typescript",
            "html5",
            "css3",
            "tailwind",
            "sass",
            "react.js",
            "vue.js",
            "angular",
            "gatsby.js",
            "Node.js",
            "MongoBD",
          ]}
        />
      </Content>
    </Layout>
  </>
)

export default IndexPage
