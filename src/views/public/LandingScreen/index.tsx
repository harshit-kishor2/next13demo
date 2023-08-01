import { yesteryear } from '@tourism/utils/localfonts'
import { cn } from '@tourism/utils/utils'
import React from 'react'

function LandingScreen() {
  return (
    <div className='flex justify-center items-center h-[50vh] bg-white custom-image bg-cover bg-center bg-no-repeat  mb-10'>
      <div className='absolute top-0 left-0 right-0 bottom-[50vh] bg-black/50 z-[1]' />
      <div className='p-5 text-white z-[2] text-center'>
        <p className='py-1 text-xs'>{'travel'}</p>
        <h2 className={cn(['text-6xl font-bold', yesteryear.className])}>
          {'Welcome'}
        </h2>
      </div>
    </div>
  )
}

export default LandingScreen
