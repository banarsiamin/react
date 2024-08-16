import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillMail, AiFillEnvironment, AiFillPhone} from 'react-icons/ai'


export default function Footer() {
  return (
    
            <section id="footer" className='mt-5 rounded bg-black py-8 px-8'>
            <div className='text-white md:text-center'>
                <h1 className='font-medium text-lg'>Contact Me</h1>
                <p>Wanna talk anything?</p>

                <ul className='md:flex justify-center gap-4'>
                <li className='flex items-center gap-2'>
                    <AiFillMail />
                    <p>banarsiamin@gmail.com</p>
                </li>
                <li className='flex items-center gap-2'>
                    <AiFillEnvironment />
                    <p>Kab. Tegal</p>
                </li>
                <li className='flex items-center gap-2'>
                    <AiFillPhone/>
                    <p>+91-977053-4045</p>
                </li>
                </ul>

                <div className='flex text-xl text-white gap-4 mt-2 md:justify-center'>
                <AiFillLinkedin /> 
                <AiFillGithub />
                <AiFillInstagram />
                </div>

                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>

                <p className="text-center text-sm text-gray-300 sm:text-center">
                © 2023
                <a href="https://indiainfotech.com"> Amin Khan</a>. All Rights Reserved.
                </p>

            </div>
            
            </section>
  )
}
