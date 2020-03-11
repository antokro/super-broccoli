import React from "react"

const Bio = () => {
  const bioItems = {
    experience: {
      label: "EXPERIENCE",
      items: [
        {
          position: "Junior Developer",
          company: "EDEKA Digital GmbH",
          city: "Hamburg",
          duration: "2019 - today",
        },
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

  const Label = ({ label }) => (
    <div className="text-2xl text-sb-orange mb-6 mt-12 font-display">
      {label}
    </div>
  )

  const Item = ({ position, company, city, duration }) => (
    <div className="flex border-sb-dark-grey border-b-2 border-solid mb-3">
      <div className="w-1/2 p-3">
        <div className="text-2xl text-sb-yellow uppercase">{position}</div>
        <div className="p-3 text-xl">{duration}</div>
      </div>
      <div className="w-1/2 p-3 text-xl">
        {company}, {city}
      </div>
    </div>
  )

  return (
    <div className="text-xl md:text-2xl my-3">
      <Label label={bioItems.experience.label} />
      <div className="flex flex-col my-3">
        {bioItems.experience.items.map(item => (
          <Item
            key={item.position}
            position={item.position}
            company={item.company}
            city={item.city}
            duration={item.duration}
          />
        ))}
      </div>
      <Label label={bioItems.education.label} />
      <div className="flex flex-col my-3">
        {bioItems.education.items.map(item => (
          <Item
            key={item.position}
            position={item.position}
            company={item.company}
            city={item.city}
            duration={item.duration}
          />
        ))}
      </div>
    </div>
  )
}

export default Bio
