import React from "react"

export default props => {
  return (
    <>
      <a
        href={props.url}
        className="w-1/3 rounded overflow-hidden shadow-lg card mx-4"
      >
        <div style={{ height: 200 }}>
          <img
            className={`mt-10 mx-auto w-2/3 ${props.w}`}
            src={props.img}
            alt="Sunset in the mountains"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.heading}</div>
          <p className="text-gray-700 text-base">{props.txt}</p>
        </div>
      </a>
    </>
  )
}
