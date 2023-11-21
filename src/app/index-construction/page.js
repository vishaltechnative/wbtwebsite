"use client"
import React, { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"

const Navbar = dynamic(()=>import('../componets/Navbar/navbar'));
const Footer = dynamic(()=>import('../componets/Footer/footer'));
const Switcher = dynamic(()=>import('../componets/switcher'));
const CookieModal = dynamic(()=>import('../componets/cookieModal'));

const CompanyLogo = dynamic(()=>import('../componets/companyLogo'));
const TeamData = dynamic(()=>import('../componets/team'));
const BlogTwo = dynamic(()=>import('../componets/blogTwo'));

import {HiOutlineCog6Tooth} from "react-icons/hi2"
import {LiaRulerCombinedSolid} from "react-icons/lia"
import {TbBuildingSkyscraper,TbBuildingMonument} from "react-icons/tb"
import {MdKeyboardArrowRight} from "react-icons/md"

import ModalVideo from 'react-modal-video'
import "../../../node_modules/react-modal-video/css/modal-video.css";

import CountUp from 'react-countup';

export default function Construction(){
    const [isOpen, setOpen] = useState(false)

    const aboutData = [
        {
            icon:LiaRulerCombinedSolid,
            title:"Project Planning",
            desc:"One disadvantage of Lorum Ipsum is that in Latin frequently than others"
        },
        {
            icon:TbBuildingSkyscraper,
            title:"Qualified Specialists",
            desc:"One disadvantage of Lorum Ipsum is that in Latin frequently than others"
        },
        {
            icon:TbBuildingMonument,
            title:"Constant Maintenance",
            desc:"One disadvantage of Lorum Ipsum is that in Latin frequently than others"
        },
        {
            icon:HiOutlineCog6Tooth,
            title:"Warranty Service",
            desc:"One disadvantage of Lorum Ipsum is that in Latin frequently than others"
        },
    ]

    const projectData = [
        {
            image:'/images/construction/1.jpg',
            title:"Serenity Apartments",
            name:"Branding"
        },
        {
            image:'/images/construction/2.jpg',
            title:"The Landscape House",
            name:"Mockup"
        },
        {
            image:'/images/construction/3.jpg',
            title:"New Build Family Home",
            name:"Abstract"
        },
        {
            image:'/images/construction/4.jpg',
            title:"Private and Social Apartments",
            name:"Books"
        },
        {
            image:'/images/construction/5.jpg',
            title:"Apartment Complex",
            name:"V-card"
        },
        {
            image:'/images/construction/6.jpg',
            title:"Construction Engineering",
            name:"Photography"
        },
    ]
    return(
        <>
        <Navbar/>

        <section className="relative md:h-screen py-36 flex items-center bg-center overflow-hidden bg-cover" style={{backgroundImage:"url('/images/construction/bg.jpg')"}}>
            <div className="absolute inset-0 bg-white/30 dark:bg-slate-900/60"></div>
            <div className="container relative z-1">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div className="lg:col-span-8 md:col-span-7 md:order-1 order-2">
                        <div className="md:me-6">
                            <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white">Start building <br /> your dream home</h4>
                            <p className="text-slate-900 dark:text-white/75 text-lg max-w-xl">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>

                            <div className="mt-6">
                                <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Contact Us</Link>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4 md:col-span-5 md:text-center md:order-2 order-1">
                        <Link href="#" onClick={() => setOpen(true)} data-id="S_CGed6E610" className="lightbox lg:h-24 h-20 lg:w-24 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white hover:bg-indigo-600 text-indigo-600 hover:text-white duration-500 ease-in-out mx-auto">
                            <i className="mdi mdi-play inline-flex items-center justify-center text-3xl"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 justify-center">
                    <div className="relative z-2 transition-all duration-500 ease-in-out sm:-mt-[200px] -mt-[140px] m-0">
                        <div className="relative bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md overflow-hidden">
                            <div className="grid lg:grid-cols-12 grid-cols-1">
                                <div className="lg:col-span-4 order-1 lg:order-2 bg-indigo-600">
                                    <div className="p-[30px] lg:text-start text-center">
                                        <span className="text-xl text-white/75">Our proud</span>
                                        <h4 className="text-2xl font-semibold text-white my-3">25 years of undefeated success</h4>
                                        <p className="text-white/75 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                        <div className="mt-6">
                                            <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-md">About us</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:col-span-8 order-2 lg:order-1">
                                    <div className="grid md:grid-cols-2 grid-cols-1 p-[30px] gap-[30px]">
                                        {aboutData.map((item,index)=>{
                                            let Icons = item.icon
                                            return(
                                                <div className="group flex transition-all duration-500 ease-in-out" key={index}>
                                                    <div className="flex align-middle justify-center items-center w-14 h-14 mt-1 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 rounded-full text-2xl shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                                                        <Icons className='w-8 h-8'/>
                                                    </div>
                                                    <div className="flex-1 ms-4">
                                                        <h4 className="mb-0 text-lg font-medium">{item.title}</h4>
                                                        <p className="text-slate-400 mt-3">{item.desc}</p>
                                                    </div>
                                                </div>
    
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="md:col-span-5">
                        <div className="relative">
                            <div className="pe-12">
                                <Image src="/images/construction/ab01.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="rounded-md" alt="" />
                            </div>

                            <div className="absolute bottom-16 end-0">
                                <Image src="/images/construction/ab02.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="rounded-md rounded-ee-[30px] shadow-md w-56 h-56" alt="" />
                                <div className="absolute bottom-0 end-0 text-center">
                                    <Link href="#" onClick={() => setOpen(true)} data-id="S_CGed6E610" className="lightbox h-14 w-14 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-indigo-600 text-white">
                                        <i className="mdi mdi-play inline-flex items-center justify-center text-xl"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />

                    <div className="md:col-span-7">
                        <div className="lg:ms-4">
                            <span className="bg-indigo-600 inline-block text-white text-xs font-semibold px-2.5 py-0.5 rounded-full h-5">About Company</span>
                            <h4 className="mb-6 mt-4 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Worlds largest and <br /> trusted construction company</h4>
                            <p className="text-slate-400 max-w-xl">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. This might also explain why one can now find slightly different versions.</p>
                            <div className="mt-6">
                                <Link href="#" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Read More <MdKeyboardArrowRight/></Link>
                            </div>

                            <div className="pt-6 mt-6 border-t dark:border-gray-700">
                                <div className="relative grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                                    <div className="counter-box">
                                        <h1 className="text-4xl font-bold mb-2"><CountUp className="counter-value" start={1010} end={1548} />+</h1>
                                        <h5 className="counter-head text-lg font-medium">Projects completed</h5>
                                    </div>

                                    <div className="counter-box">
                                        <h1 className="text-4xl font-bold mb-2"><CountUp className="counter-value" start={2} end={25} />+</h1>
                                        <h5 className="counter-head text-lg font-medium">Years of experience</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative mt-16">
                <CompanyLogo/>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Projects</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {projectData.map((item,index)=>{
                        return(
                            <div className="group relative block overflow-hidden rounded-md transition-all duration-500" key={index}>
                                <Link href="/portfolio-detail-one"><Image src={item.image} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="rounded-md shadow dark:shadow-gray-800" alt="" /></Link>
                                <div className="content pt-3">
                                    <h5 className="mb-1"><Link href="/portfolio-detail-one" className="hover:text-indigo-600 transition-all duration-500 font-semibold text-lg">{item.title}</Link></h5>
                                    <h6 className="text-slate-400">{item.name}</h6>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

        <section className="py-20 w-full table relative bg-center bg-no-repeat bg-cover" style={{backgroundImage:"url('/images/construction/bg2.jpg')"}}>
            <div className="absolute inset-0 bg-slate-900/70"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center">
                    <h3 className="mb-4 md:text-3xl text-2xl md:leading-normal leading-normal text-white font-medium">Generating more value <br /> at every level and building a better world for everyone</h3>

                    <p className="text-white/80 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>

                    <Link href="#" onClick={() => setOpen(true)} data-id="S_CGed6E610" className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 mx-auto mt-10">
                        <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                    </Link>
                </div>
            </div>
        </section>

        <section className="relative md:pt-24 pt-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h6 className="text-indigo-600 text-base mb-2">Our Minds</h6>
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Management Team</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>
                <TeamData/>
            </div>
        </section>

        <section className="container relative md:py-24 py-16">
            <BlogTwo/>
        </section>

        <Footer/>
        <Switcher/>
        <CookieModal/>
        </>
    )
}