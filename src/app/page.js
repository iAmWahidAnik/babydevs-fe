'use client'
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import Link from 'next/link'

export default function Home () {
  return (
    <div className='common-width backdrop-blur-md bg-white/30 text-white rounded-b-sm p-5'>
      <div className='flex items-center'>
        <div className='flex flex-col justify-between min-h-[calc(100vh-310px)] w-full'>
          <p className='text-cente text-5xl uppercase russo'>
            elevate your <br /> Online Presence
          </p>
          <p className='text-cente text-xl lexend'>
            Whether it is a Wordpress Website, Custom Software or E-Commerce,
            get an elegant website or software with a great user interface.
          </p>

          <div className=''>
            <button className='px-5 py-2 rounded bg-white/20 shadow-lg sour hover:tracking-widest transition-all duration-500'>
              services →
            </button>
          </div>
        </div>
        <div className=' w-full'>
          <div className='text-center'>
            {/* <button className='p-20 rounded-full bg-white/20 shadow-lg sour hover:rotate-180 transition-all duration-500'>
              p
            </button> */}
            <Link href={"/portfolio"}>
              <button>
                <Player
                  src='https://lottie.host/551847e2-d146-46f3-ae9f-a2c2d6f8890f/zioAkWZkav.json'
                  className='player h-72'
                  loop
                  autoplay
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
