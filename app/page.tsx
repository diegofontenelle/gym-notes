import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
        <div className='flex flex-col gap-8 mx-auto padding-4'>
          <div className='flex flex-col gap-2'>
            <p className='text-xl'>
              Access your <span className='font-semibold'>gym trains and notes</span> anywhere, no app, no internet required *
            </p>
          </div>

        <div className='flex flex-col gap-4'>
            <p className='text-base'>
              Create a training session to get started or use one of <Link id="cta-secondary" href="templates" className='text-blue-400'>ours</Link>.
            </p>

            <div className='flex'>
              <button id="cta-primary" className='px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm'>
                <Link href="create/session">
                  New session
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
