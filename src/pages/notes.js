import React from "react"
import Layout from "../components/layout"
import Content from "../components/content"
import SubStage from "../components/subStage"

const Notes = () => (
  <>
    <Layout>
      <SubStage headline="Notes" />
      <Content headline="Notes Notes">
        <div>Links Projects etc.</div>
      </Content>
    </Layout>
  </>
)

export default Notes
