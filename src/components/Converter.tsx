"use client"

import { useState } from "react"

const Converter = () => { 
        const [sats , setSats] = useState<number>(1)

        return (
            <div className="grid place-items-center mt-[45px]">
                <div className="justify-center flex">
                <input type="text" className='text-[45px] border-none outline-none bg-transparent text-center px-4 py-4 ' value={sats} onChange={(e : any) => { 
                    setSats(e.target.value)
                }}   />
                </div>

                <div className="mt-4">
                    <span className="font-semibold"> {sats} sats  </span>
                </div>
           </div>
        )

        
}

export default Converter  