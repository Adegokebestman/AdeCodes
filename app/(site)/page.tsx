import { Hero } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="overflow-hidden">
    <Hero />
    <div className='mt-12 padding-x padding-y max-width'>
      <div className=' '>
        <h1 className='uppercase text-white font-bold text-lg'>latest drops</h1>
        </div>

    </div>

    </main>
  )
}
