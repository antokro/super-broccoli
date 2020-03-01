import React from "react"

const List = ({ array }) => {
  return (
    <div className="h-32 w-100 mb-6">
      <ul className="text-lg md:text-xl">
        {array.map(item => (
          <li key={item.label} className="p-3 text-sb-orange my-3">
            {item.tag === "a" ? (
              <a href={item.link}>🔗 {item.label}</a>
            ) : (
              <span>{item.label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List
