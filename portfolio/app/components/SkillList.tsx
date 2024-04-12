/* eslint-disable @next/next/no-page-custom-font */
export const SkillList = () => {
  return (
    <section
      id='skills'
      className='font-Montserrat pt-12 md:pt-24 lg:pt-32 mx-16'
    >
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=optional'
      />
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=optional'
      />
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=optional'
      />
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=optional'
      />
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=optional'
      />
      <div className='space-y-4 text-center md:space-y-0 md:text-left md:grid md:gap-4 lg:grid-cols-2 lg:gap-8'>
        <div className='space-y-2'>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-normal my-4'>
            My Skills
          </h2>
        </div>
      </div>
      <div className='space-y-4 text-center md:space-y-0 md:text-left md:grid md:gap-4 lg:grid-cols-2 lg:gap-8'>
        <div className='space-y-2'>
          <p className='text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-black md:w-[500px] font-thin mt-4'>
            I&apos;m experienced in a variety of frontend technologies and
            design tools.
          </p>
        </div>
        <div className='grid grid-cols-2 items-start justify-center gap-4 md:grid-cols-3 md:justify-end'>
          <div className='flex flex-col items-center justify-center space-y-1'>
            <span className='material-symbols-outlined'>html</span>
            <p className='text-xs font-thin'>html</p>
          </div>
          <div className='flex flex-col items-center justify-center space-y-1'>
            <span className='material-symbols-outlined'>css</span>
            <p className='text-xs font-thin'>CSS</p>
          </div>
          <div className='flex flex-col items-center justify-center space-y-1'>
            <span className='material-symbols-outlined'>javascript</span>
            <p className='text-xs font-thin'>javascript/typescript</p>
          </div>
          <div className='flex flex-col items-center justify-center space-y-1'>
            <span className='material-symbols-outlined'>code_blocks</span>
            <p className='text-xs font-thin'>react</p>
          </div>
          <div className='flex flex-col items-center justify-center space-y-1'>
            <span className='material-symbols-outlined'>database</span>
            <p className='text-xs font-thin'>postgreSQL</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillList;
