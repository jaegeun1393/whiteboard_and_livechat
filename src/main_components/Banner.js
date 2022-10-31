import React from 'react';
import { IoIosArrowForward } from 'react-icons/io'
import bannerImg from '../Assets/images/hero.webp';

function Banner() {
    return (
        <section className=' bg-gradient-to-r from-sky-100 to-white brightness-[0.95] overflow-hidden'>
            <div className="container max-w-full relative mx-auto pt-20 min-h-[600px]" >
                <div className='flex'>
                    <div className=" lg:max-w-[1080px] relative mx-auto flex flex-col md:flex-row">
                        <div className='flex-1 mx-5 sm:mx-[50px] pt-11 pb-16 relative z-20 text-center md:text-left'>
                            <h2 className='text-3xl sm:text-4xl md:text-[50px] font-bold leading-10 sm:leading-[55px]'>Find Trusted College Students to Tutor  You</h2>
                            <p className='mb-10 mt-5 text-[17px] text-[#161b2bad]'>Pay as you go tutoring at a $20/hour rate. Plus, you can try for free!</p>
                            <p className='font-semibold'>Tell us more about yourself</p>
                            <div className='mt-4 text-[17px] flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
                                <button type="button" class="text-blue-600 hover:ring-2 hover:ring-blue-600 hover:box-border px-7 h-[71px] bg-blue-200 whitespace-nowrap outline-none font-semibold rounded-2xl bg-opacity-30">
                                    <span>I am a Parent/Guardian</span>
                                    <IoIosArrowForward className='inline-block ml-0.5' />
                                </button>
                                <button type="button" class="text-blue-600 hover:ring-2 hover:ring-blue-600 hover:box-border px-7 h-[71px] bg-blue-200 whitespace-nowrap outline-none font-semibold rounded-2xl bg-opacity-30">
                                    <span>I am a Student</span>
                                    <IoIosArrowForward className='inline-block ml-0.5' />
                                </button>
                            </div>
                        </div>
                        <div className='flex-1'>
                            {/* mobile banner image */}
                            <img src={bannerImg} alt="" className='object-cover object-center w-full h-full md:hidden ' />

                            <span className=''>
                                {/* desktop banner image */}
                                <img src={bannerImg} alt="" className='absolute object-cover md:-right-44 lg:-right-[290px] -bottom-7 object-bottom hidden md:block' />
                            </span>
                        </div>
                    </div>
                </div>
            </div>


            {/* Brand Logo */}
        </section >
    );
}

export default Banner;