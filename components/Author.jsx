/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'

const Author = ({ author }) => {
  return (
    <div className='text-center mt-20 mb-8 p-10 relative bg-white rounded-lg'>
      <div className='absolute left-0 right-2 -top-8'>
        <Image
          src={post.photo.url}
          alt='author-image'
          height= "50px"
          width= "50px"
          className='align-middle rounded-full bg-black border-b-8 border-black'
        />
        <h3 className='text-black'> {post.name} </h3>
        <h4 className='text-lg text-black'> {post.bio} </h4>
      </div>
    </div>
  )
}

export default Author