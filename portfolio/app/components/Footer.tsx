import Link from "next/link";

export const Footer = () => {
  return (
    <footer className='font-Montserrat pt-12 md:pt-24 lg:pt-32 mx-16 py-10 border-t border-black mt-10'>
      <div className='container flex flex-col items-center gap-4 px-4 text-center md:px-6 md:flex-row md:justify-between lg:gap-6'>
        <div className='flex items-center gap-2 text-sm font-semibold md:order-2 md:gap-4 lg:text-base'>
          <Link
            className='flex h-6 items-center rounded-full hover:underline'
            href='#'
          >
            LinkedIn
            <span className='sr-only'>LinkedIn</span>
          </Link>
          <Link
            className='flex h-6 items-center rounded-full hover:underline'
            href='#'
          >
            GitHub
            <span className='sr-only'>GitHub</span>
          </Link>
        </div>
        <div className='text-xs text-black md:text-sm font-thin'>
          © Ana Chimuco. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
