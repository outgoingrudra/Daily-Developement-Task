import React, { use } from 'react'

export default function SlugDemo({params}) {
    const {slug} = use(params)
    console.log(slug);
    

  return (
    <div>SlugDemo</div>
  )
}
