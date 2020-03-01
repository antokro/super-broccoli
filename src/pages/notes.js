import React from "react"
import Layout from "../components/layout"
import Content from "../components/content"
import SubStage from "../components/subStage"
import List from "../components/List"
import Copy from "../components/Copy"

const Notes = () => {
  const links = [
    { tag: "a", link: "https://tailwindcss.com/", label: "Tailwind" },
    { tag: "a", link: "https://www.gatsbyjs.org/", label: "Gatsby" },
    { tag: "a", link: "https://reactjs.org/", label: "React" },
  ]

  const contribution = [
    {
      tag: "a",
      link: "https://www.flaticon.com/authors/smashicons",
      label: "Smashicons",
    },
    {
      tag: "a",
      link: "https://www.flaticon.com/authors/pixel-perfect",
      label: "Pixel perfect",
    },
    {
      tag: "a",
      link: "https://www.flaticon.com/authors/vectors-market",
      label: "Vectors Market",
    },
  ]
  return (
    <>
      <Layout>
        <SubStage headline="NOTES" />
        <Content headline="LINKS">
          <Copy>
            Below are some cool projects that I used to create this site. Soon I
            will write some more about my experience in using them.
          </Copy>
          <List array={links} />
        </Content>
        <Content headline="ICONS">
          <Copy>
            <div>
              Icons made by
              <br />
              <List array={contribution} />
              <br />
              from{" "}
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </div>
          </Copy>
        </Content>
      </Layout>
    </>
  )
}

export default Notes
