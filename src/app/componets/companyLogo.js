"use client"
import React from 'react'
import Image  from 'next/image'

export default function CompanyLogo(){
    return(
        <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
            <div className="mx-auto py-4" style={{background: '#fff !important', padding: '5px', width: '100%' }}>
              <Image src="/images/client/titandef.svg" width={150} height={50} alt="Titandef" />
            </div>

            <div className="mx-auto py-4" style={{background: '#fff !important', padding: '5px', width: '100%'}}>
              <Image src="/images/client/trendTonik.png" width={150} height={24} alt="" />
            </div>

            <div className="mx-auto py-4" style={{background: '#fff !important', padding: '5px', width: '100%'}}>
              <Image src="/images/client/kotharihyundai.png" width={150} height={24} alt="" />
            </div>

            <div className="mx-auto py-4" style={{background: '#fff !important', padding: '5px', width: '100%'}}>
              <Image src="/images/client/crystal-honda.png" width={150} height={24} alt="" />
            </div>

            <div className="mx-auto py-4" style={{background: '#fff !important', padding: '5px', width: '100%'}}>
              <Image src="/images/client/uppl.png" width={150} height={24} alt="" />
            </div>

            <div className="mx-auto py-4" style={{background: '#fff !important', padding: '5px', width: '100%'}}>
              <Image src="/images/client/atc.png" width={150} height={24} alt="" />
            </div>
            <div className="mx-auto py-4" style={{background: '#fff !important', padding: '5px', width: '100%'}}>
              <Image src="/images/client/Intellimation.png" width={150} height={24} alt="" />
            </div>
            <div className="mx-auto py-4" style={{background: '#fff !important', padding: '5px', width: '100%'}}>
              <Image src="/images/client/KJBF.png" width={150} height={24} alt="" />
            </div>

            {/*<div className="mx-auto py-4" style={{background: '#fff !important', padding: '5px', width: '100%'}}>
              <Image src="/images/client/shopify.svg" width={150} height={24} alt="" />
            </div>*/}
        </div>
    )
}
