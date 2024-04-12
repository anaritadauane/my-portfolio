/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id='about-me'
      className='font-Montserrat pt-12 md:pt-24 lg:pt-32 mx-16'
    >
      <div className='text-center p-12'>
        <h1 className='text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tighter'>
          ANA CHIMUCO.
        </h1>
        <p className='text-xs font- sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl tracking-wide text-black font-thin'>
          Developer. Creator.
        </p>
      </div>
      <div className='container flex flex-col md:flex-row items-center justify-center md:justify-between'>
        <div className='max-w-[600px] text-center md:text-left md:mr-4'>
          <p className='text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-black border-black md:border-r font-thin m-r-12'>
            I'm an aspiring <strong>full-stack/front-end engineer</strong> based
            in Mozambique wanting to start a career in the tech industry. My
            passion lies in building innovative solutions for real-world
            problems ensuring that satisfy all the user needs.
          </p>
        </div>
        <div className='text-center md:text-left mt-4 md:mt-0'>
          <h1 className='text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-thin'>
            OPEN TO WORK
          </h1>
        </div>
      </div>
      <div className='mt-8 sm:text-start text-center'>
        <Link
          href={""}
          className='text-sm sm:text-sm md:text-sm lg:text-l xl:text-xl hover:underline no-underline font-thin'
        >
          Scroll down for more
        </Link>
      </div>
    </section>
  );
};

export default Hero;
