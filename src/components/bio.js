import React from "react"

const Bio = () => {
  const bioItems = {
    experience: {
      label: "EXPERIENCE",
      items: [
        {
          position: "Coding Bootcamp",
          company: "neue fische GmbH",
          city: "Hamburg",
          duration: "2019, 3 months",
        },
        {
          position: "Controller",
          company: "Otto GmbH & Co KG",
          city: "Hamburg",
          duration: "2017-2019",
        },
        {
          position: "Supply Chain Manager",
          company: "Zitra GmbH",
          city: "Hamburg",
          duration: "2015-2017",
        },
      ],
    },
    education: {
      label: "EDUCATION",
      items: [
        {
          position: "Master of Arts",
          company: "Fulda University of Applied Science",
          city: "Fulda",
          duration: "2012-2015",
        },
        {
          position: "Exchange Semester",
          company: "Sungkyunkwan University",
          city: "Seoul, South Korea",
          duration: "2011",
        },
        {
          position: "Bachelor of Arts",
          company: "Fulda University of Applied Science",
          city: "Fulda",
          duration: "2009-2012",
        },
      ],
    },
  }

  return (
    <div className="text-xl md:text-2xl my-3">
      <div>{bioItems.experience.label}</div>
      <div>
        {bioItems.experience.items.map(item => (
          <div key={item.position}>
            {item.position} {item.company} {item.city} {item.duration}
          </div>
        ))}
      </div>
      <div>{bioItems.education.label}</div>
      <div>
        {bioItems.education.items.map(item => (
          <div key={item.position}>
            {item.position} {item.company} {item.city} {item.duration}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Bio
