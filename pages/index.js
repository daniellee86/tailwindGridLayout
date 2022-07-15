import Head from 'next/head'
// import Image from 'next/image'


export default function Home() {
  return (
    <div className='grid place-items-center min-h-screen' >
      <Head>
        <title>Tailwind Grid</title>
        <meta name="Tailwind Grid" content="Tailwind Grid Layout" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='p-4 max-w-5xl grid gap-4 sm:grid-cols-2 sm:p-8 md:grid-cols-4'>
        <h1 className='text-4xl font-extrabold sm:col-span-2 sm:grid sm:gap-4 sm:grid-cols-2 md:col-span-3 md:text-5xl md:grid-cols-3'>
          <span className='md:col-span-2'>MEET THE TEAM.</span>
        </h1>
        <p className='sm:row-start-2 sm:col-start-2 sm:self-center md:col-start-1 md:col-span-2 md:pr-12'>
          Sunt ad nisi enim consectetur eiusmod cillum sunt. 
          Fugiat labore magna elit nulla eiusmod. 
          Mollit pariatur nisi enim minim occaecat dolor mollit 
          sunt fugiat.
        </p>
        <div className='  bg-blue-500 sm:h-auto sm:square'> <img className='h-full object-cover' src='1.jpg' alt=''/> </div>
        <div className='  bg-blue-500 sm:h-auto sm:square'> <img className='h-full object-cover' src='2.jpg' alt=''/> </div>
        <div className='  bg-pink-500 sm:h-auto sm:square'> <img className='h-full object-cover' src='3.jpg' alt=''/> </div>
        <div className='  bg-blue-500 sm:h-auto sm:square md:col-start-2'> <img className='h-full object-cover' src='8.jpg' alt=''/></div>
        <div className='  bg-pink-500 sm:h-auto sm:square'> <img className='h-full object-cover' src='4.jpg' alt=''/> </div>
        <div className='  bg-blue-500 sm:h-auto sm:square'> <img className='h-full object-cover' src='5.jpg' alt=''/> </div>
        <div className='  bg-blue-500 sm:h-auto sm:square'> <img className='h-full object-cover' src='6.jpg' alt=''/> </div>
        <div className='  bg-pink-500 sm:h-auto sm:square'> <img className='h-full object-cover' src='7.jpg' alt=''/></div>
        <p className='self-center md:text-lg md:col-span-2 md:text-center md:px-4'>Aliquip ipsum mollit occaecat occaecat voluptate 
        aliquip ad laboris irure Lorem mollit voluptate non.
        </p>
      </div>

   

    </div>
  )
} 
