import React from 'react'

export default function Card({title}) {
  return (
    <div className="absolute inset-0 h-full w-full rounded-2xl w-full items-center justify-center">{title}</div>
  )
}
