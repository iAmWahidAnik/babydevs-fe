import Image from 'next/image'
import Link from 'next/link'
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaTelegramPlane
} from 'react-icons/fa'
import { RiMailOpenLine } from 'react-icons/ri'

const Footer = () => {
  return (
    <div className='common-width backdrop-blur-md bg-white/30 text-white rounded-t-sm mt-5'>
      <div className='flex flex-col lg:flex-row gap-5 items-center justify-between p-5'>
        <div className='max-w-[300px]'>
          <Link href={'/'}>
            <Image
              width={50}
              height={50}
              src={'https://i.ibb.co.com/fY813Fk/babydevs1.png'}
            ></Image>
          </Link>
          {/* <p className='text-sm'>Empowering businesses with cutting-edge software and web solutions. innovation meets expertise to turn your ideas into reality. Your growth is our mission.</p> */}
          <div className='mt-2'>
            <p className='text-sm lexendLight'>
              Innovation meets expertise to turn your ideas into reality. Your
              growth is our mission.
            </p>
          </div>
        </div>

        <ul className='flex gap-5'>
          <Link href={'/'}>
            <li>
              <FaFacebookF />
            </li>
          </Link>
          <Link href={'/services'}>
            <li>
              <FaLinkedinIn />
            </li>
          </Link>
          <Link href={'/services'}>
            <li>
              <RiMailOpenLine />
            </li>
          </Link>
          <Link href={'/portfolio'}>
            <li>
              <FaInstagram />
            </li>
          </Link>
          <Link href={'/about'}>
            <li>
              <FaWhatsapp />
            </li>
          </Link>
          <Link href={'/contact'}>
            <li>
              <FaTelegramPlane />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Footer
