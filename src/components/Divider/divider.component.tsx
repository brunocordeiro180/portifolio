import React, { ReactPropTypes } from 'react'

type Props = {
  isCentered?: boolean,
  className?: string
}

export const Divider = ({isCentered=true, className}: Props) => {
  return (
    <div className={`${className} h-1 w-20 border-amber-400 rounded-full bg-amber-400 ${isCentered ? 'mx-auto' : ''}`} />
  )
}