import React from "react"

const Content = ({ headline, children }) => {
  const heading = headline ? (
    <h2 className="font-display text-4xl text-sb-turquoise text-center">
      {headline}
    </h2>
  ) : null

  return (
    <section className="px-10 py-10 md:px-0 w-100 md:w-1/2 md:mx-auto">
      {heading}
      {children}
    </section>
  )
}

export default Content
