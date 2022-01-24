import React from 'react'
import PrintBroadsheet from '../components/finalbroadsheet.jsx'

function printSheet() {
    return (
        <div className="w-full h-screen">
            <h2 className="text-tprimary text-2xl font-bold text-center p-5">Result Broadsheet</h2>
            <PrintBroadsheet/>
            <div className="h-1/4 flex flex-col items-center justify-center">
               <button className="w-8/12 md:w-8/12 bg-bprimary text-white px-1 py-4 lg:w-6/12 font-semibold rounded-lg">Print Reciept</button>
            </div>
            {/* <div className="h-3/4 flex flex-col items-center justify-center">
                <button className="w-8/12 md:w-8/12 bg-bprimary text-white px-1 py-4 lg:w-6/12 font-semibold rounded-lg">Print Reciept</button>
            </div> */}
            
        </div>
    )
}

export default printSheet