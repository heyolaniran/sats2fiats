import Image from 'next/image'
import logo from  "@/assets/orangelightning.svg"
import Converter from '@/components/Converter'

export default function Home() {



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
   

      <div className="grid place-content-center mb-4">
        <Image
          className="grid place-items-center dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src={logo}
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />

        <Converter />
      </div>


   

    </main>
  )
}
