import React from 'react'

export default function Button(props) {
  return (
    <>
        <a href={props.href} className="button">{props.content}</a>
    </>
  )
}
