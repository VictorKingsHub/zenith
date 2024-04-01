import Image from 'next/image'
import React from 'react'

const Review = () => {
  return (
    <div className='flex flex-row '>
      <h1 className='center'>CLIENT'S REVIEW</h1>
      <div className='client_comment'>
        <div className="client">
          <Image src="/mma.png" alt='mma' width={100} height={100} className="rounded-full"/>
          <h5 className='pt-2 font-bold'>Client's name</h5>
          <p className='pt-1 leading-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aliquam id tempore voluptate incidunt animi, et dicta sequi? Alias, consequuntur fugit. Eius, minus neque repellat corrupti ut quam? Neque, eos!</p>
        </div>
      </div>
      <div className='client_comment'>
        <div className="client">
          <Image src="/mma.png" alt='mma' width={100} height={100} className="rounded-full" />
          <h5 className='pt-2 font-bold'>Client's name</h5>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aliquam id tempore voluptate incidunt animi, et dicta sequi? Alias, consequuntur fugit. Eius, minus neque repellat corrupti ut quam? Neque, eos!</p>
        </div>
      </div>
      <div className='client_comment'>
        <div className="client">
          <Image src="/mma.png" alt='mma' width={100} height={100} className="rounded-full" />
          <h5 className='pt-2 font-bold'>Client's name</h5>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aliquam id tempore voluptate incidunt animi, et dicta sequi? Alias, consequuntur fugit. Eius, minus neque repellat corrupti ut quam? Neque, eos!</p>
        </div>
      </div>
      <div className='client_comment'>
        <div className="client ">
          <div >
            <Image src="/mma.png" alt='mma' width={100} height={100} className="rounded-full" />
          </div>
          <h5 className='pt-2 font-bold'>Client's name</h5>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aliquam id tempore voluptate incidunt animi, et dicta sequi? Alias, consequuntur fugit. Eius, minus neque repellat corrupti ut quam? Neque, eos!</p>
        </div>
      </div>
    </div>
  )
}

export default Review
