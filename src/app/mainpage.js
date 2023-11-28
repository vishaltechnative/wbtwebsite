{"use client"
import React,{useState} from "react"
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"

const Navbar = dynamic(()=>import('./componets/Navbar/navbar'));
const SmallFooter = dynamic(()=>import('./componets/Footer/smallFooter'));
const Switcher = dynamic(()=>import('./componets/switcher'));
const CookieModal = dynamic(()=>import('./componets/cookieModal'));

const CompanyLogo = dynamic(()=>import('./componets/companyLogo'));
const TeamData = dynamic(()=>import('./componets/team'));
const ClientsOne = dynamic(()=>import('./componets/clientsOne'));
const BlogTwo = dynamic(()=>import('./componets/blogTwo'));
import { teamData } from './Data/data'

import { FaArrowRight, FaRegEnvelope ,} from "react-icons/fa"
import {RiPresentationFill} from "react-icons/ri"
import{LiaFileInvoiceDollarSolid, LiaDropbox, LiaMoneyCheckAltSolid} from "react-icons/lia"
import {AiOutlineDollar} from "react-icons/ai"
import {BiWater} from "react-icons/bi"
import {MdCenterFocusWeak} from "react-icons/md"
import * as Icon from 'react-feather';

import ModalVideo from 'react-modal-video'
import "../../node_modules/react-modal-video/css/modal-video.css";


export default function Startup(){
     const [isOpen, setOpen] = useState(false);
     const aboutData = [
        {
            icon:BiWater,
            title:"Start up Enabler",
            desc:"Start ups live and breathe on speed, with our platform their go-to market time for technology startups is significantly cut down. We can adapt our technology to suit the needs of the start-up and build out an MVP or a full product with Enabler as the driving force behind it."
        },
        {
            icon:LiaDropbox,
            title:"Unifier",
            desc:"With our proprietary no-code platform Enabler we build bespoke softwares for companies. We can onboard their entire operations end to end using Enabler with minimal custom work based on the customer’s specific needs"
        },
        {
            icon:MdCenterFocusWeak,
            title:"Product",
            desc:"Using Enabler we have created our own products that are deployed in various industries across the world. Click here to learn more"
        },
    ]

    const productData = [

      {
          icon:LiaDropbox,
          title:"Backbone",
          desc:"A tool built by developers for developers. This platform empowers developers to get a god-level view of all the functions and features needed for a successful SDLC. "
      },
      {
          icon:MdCenterFocusWeak,
          title:"Dealership Management",
          desc:"A cloud-based platform that unifies all the processes of a dealership under one login."
      },
      {
          icon:MdCenterFocusWeak,
          title:"Insurance Sales",
          desc:"A solution that helps companies that sell insurance policies to manage track new and renewal of insurances."
      },
      {
          icon:LiaDropbox,
          title:"Scheduler",
          desc:"A lightweight powerhouse for cron jobs, built with intelligence and reliability in mind. Our Scheduler can manage/initiate/track and give detailed insights into your cron jobs."
      },
      {
          icon:LiaDropbox,
          title:"Facility management",
          desc:"Large or small facilities, whether factories or hospitals, or dealerships, or any building/layout with assets and machines which need to be tracked, maintained, managed and monitored can be done with our lightweight facility management tool."
      },
    ]

    const services = [
        {
            icon:RiPresentationFill,
            title:"Training",
            desc:"One of the biggest gaps in the technology landscape today is people not having know-how of current technologies, the education provided at colleges is insufficient to prepare young minds for the world of IT. We’re offering a one/two month course where young minds can work and learn on the latest technologies and even try their hands on live projects. Our experts will help mould their thinking and application of technologies. (Node.js, Hapi.js, Preact.js, Mongo Db, Lambda?, etc)"
        },
        {
            icon:LiaFileInvoiceDollarSolid,
            title:"AI and Machine Learning",
            desc:"Artificial intelligence and machine learning have become buzzwords that are thrown around in the world to generate excitement and trend across the internet. Our practical applications for ML allow our users to leverage the strength of data generated through our apps to work for them. We at waybeyond.tech have intentionally designed our apps and services to work for the user rather than the other way around, the underlying philosophy being simple tasks that can be handled with automation will be taken care of by the app. Eventually even simple cognitive functions can be handed over to our AI module."
        },
    ]


    return(
        <>
        <Navbar navClass="nav-sticky"/>
        <section className="relative md:h-screen flex items-center py-36 before:content-[''] before:absolute before:bottom-40 xl:before:start-[45rem] xl:before:w-[90rem] xl:before:h-[35rem] ltr:before:rotate-[115deg] rtl:before:rotate-[65deg] before:bg-indigo-600 md:before:start-40 before:w-[75rem] before:h-[30rem] after:content-[''] after:absolute xl:after:bottom-96 xl:after:start-[30rem] xl:after:w-[75rem] xl:after:h-40 ltr:after:rotate-[115deg] rtl:after:rotate-[65deg] after:bg-indigo-600/10 after:-z-1 md:after:start-0 before:-start-0 after:-start-40 after:bottom-80 after:w-[75rem] after:h-60 overflow-hidden">
            <div className="absolute inset-0" id="overlay"
            style={{ backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundImage: `url('/images/startup/Background.jpg')` }}
            ></div>
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                    <div className="md:col-span-7">
                        <div className="md:me-6">
                            <Image src="/images/wbtlogo-icon.png" width={46} height={40} className="mb-4" alt="" />
                            <h4 className="font-semibold lg:leading-normal leading-normal text-2xl lg:text-2xl mb-5 text-black dark:text-white">Elevate innovation, beyond code! <br />Leveraging technology to transform businesses <br /> Training the next generation of software super heroes</h4>
                            <p className="text-slate-400 text-lg max-w-xl">In a world where technology is advancing at an unprecedented pace, there arises a need for a software company that transcends the boundaries of convention. A company that doesn't just keep up with the latest trends, but one that sets the trends, redefines possibilities, and pushes the boundaries of what is imaginable. Welcome to Way Beyond Tech</p>

                            {/*<div className="mt-6">
                                <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Learn More</Link>
                                <Link href="#" onClick={() => setOpen(true)} data-type="youtube" data-id="S_CGed6E610" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white m-1 lightbox"><Icon.Video className="h-4 w-4"></Icon.Video></Link><span className="font-semibold ms-1 align-middle">Watch Now</span>
                            </div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*<ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} /> */}

        {/* About US section*/}
        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="lg:col-span-5 md:col-span-6">
                        <div className="grid grid-cols-12 gap-6 items-center">
                            <div className="col-span-6">
                                <div className="grid grid-cols-1 gap-6">
                                    <Image src="/images/about/ab03.jpg" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="shadow rounded-md" alt="" />
                                    <Image src="/images/about/ab02.jpg"  width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="shadow rounded-md" alt="" />
                                </div>
                            </div>

                            <div className="col-span-6">
                                <div className="grid grid-cols-1 gap-6">
                                    <Image src="/images/about/ab01.jpg"  width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="shadow rounded-md" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 md:col-span-6">
                        <div className="lg:ms-5">
                            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">We are a Big Team</h3>

                            <p className="text-slate-400 max-w-xl">At Way Beyond Tech, we don't just develop software; we engineer solutions that change the game, disrupt industries, and empower businesses to thrive in the digital age. Our journey began with a vision to revolutionise the business operations landscape, to create products that not only meet the needs of today but also anticipate the needs of tomorrow.</p>

                            <div className="mt-6">
                                <Link href="/contact-one" className="py-2 px-5 inline-flex items-center font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2"><FaRegEnvelope className="me-2 text-sm"/>Contact us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/*<section className="relative py-16 bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                    {aboutData.map((item,index)=>{
                        let Icons = item.icon
                        return(
                            <div key={index} className="flex">
                                <div className="flex align-middle justify-center items-center min-w-[56px] h-[56px] bg-indigo-600/5 border-2 border-indigo-600/20 text-indigo-600 rounded-lg text-xl shadow-sm dark:shadow-gray-800">
                                    <Icons className="w-6 h-6"/>
                                </div>

                                <div className="content ms-6">
                                    <Link href="#" className="text-lg font-medium hover:text-indigo-600">{item.title}</Link>
                                    <p className="text-slate-400 mt-3">{item.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section> */}

        {/* Services section*/}
        <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Services</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Empower your business's digital transformation with our no-code platform, featuring a versatile library of modules for rapid adaptation to any environment, ensuring seamless offline-to-digital transition.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {aboutData.map((item,index)=>{
                        let Icons = item.icon
                        return(
                            <div key={index} className="group p-6 rounded-lg shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 hover:-translate-y-2 transition-all duration-500 ease-in-out">
                                <div
                                    className="w-16 h-16 bg-indigo-600/5 group-hover:bg-indigo-600 group-hover:text-white border-2 border-indigo-600/20 text-indigo-600 rounded-lg text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                                    <Icons className="w-6 h-6"/>
                                </div>

                                <div className="content mt-7">
                                    <Link href="/page-services" className="title h5 text-lg font-medium hover:text-indigo-600">{item.title}</Link>
                                    <p className="text-slate-400 mt-3">{item.desc}</p>

                                    <div className="mt-5">
                                        <Link href="#" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Read More <FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>


        <section className="py-20 w-full table relative bg-center bg-no-repeat bg-cover" style={{backgroundImage:"url('/images/digital/bg01.jpg')"}}>
            <div className="absolute inset-0 bg-slate-900/70"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center">
                    <h3 className="mb-4 md:text-3xl text-2xl text-white font-medium">Stop leaving money on the table.</h3>

                    <p className="text-white/80 max-w-xl mx-auto">Start working with Way Beyond Tech that can provide everything you need to generate awareness, drive traffic, connect.</p>

                    <Link href="#" onClick={() => setOpen(true)} data-type="youtube" data-id="S_CGed6E610" className="lightbox h-20 w-20 rounded-full shadow-md dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 mx-auto mt-10">
                        <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                    </Link>
                </div>
            </div>
        </section>

        {/* Product Data Section type 1 */}
        {/*<section className="relative py-16 bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                    {aboutData.map((item,index)=>{
                         let Icons = item.icon
                        return(
                            <div key={index} className="flex">
                                <div className="flex align-middle justify-center items-center min-w-[56px] h-[56px] bg-indigo-600/5 border-2 border-indigo-600/20 text-indigo-600 rounded-lg text-xl shadow-sm dark:shadow-gray-800">
                                    <Icons className="w-6 h-6"/>
                                </div>

                                <div className="content ms-6">
                                    <Link href="#" className="text-lg font-medium hover:text-indigo-600">{item.title}</Link>
                                    <p className="text-slate-400 mt-3">{item.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>*/}
        {/* Product Data Section type 2 */}
        <section className="relative bg-gray-50 dark:bg-slate-800 md:py-24 py-16">

            <div className="container relative">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Products</h3>

                <p className="text-slate-400 max-w-xl mx-auto">Explore a curated range of cutting-edge IT solutions designed to empower your business, meticulously crafted by our team of experts.</p>
            </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                    {productData.map((item,index)=>{
                        let Icons = item.icon
                        return(
                            <div key={index} className="group px-6 py-8 hover:bg-white dark:hover:bg-slate-900 hover:shadow dark:hover:shadow-gray-800 duration-500 ease-in-out border-b-[3px] border-transparent hover:border-indigo-600">
                                <Icons className="h-10 w-10 stroke-1 text-indigo-600"/>
                                <div className="content mt-6">
                                    <Link href="/page-services" className="title h5 text-xl font-semibold hover:text-indigo-600">{item.title}</Link>
                                    <p className="text-slate-400 mt-4">{item.desc}</p>

                                    <div className="mt-5">
                                        <Link href="/page-services" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">Learn More<FaArrowRight className="ms-2 text-[10px]"/></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </section>







        <section className="relative md:py-24 py-16">
            <ClientsOne/>
        </section>

        <section className="container relative md:py-24 py-16">
            <CompanyLogo/>
        </section>

        {/*<section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h6 className="text-indigo-600 text-base mb-2">Our Minds</h6>
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Management Team</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>
                <TeamData/>
            </div>
        </section>*/}

        <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="team">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Our Professional Team</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Our professional team is committed to turning visions into reality, combining expertise and passion to drive success.</p>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                    {teamData.slice(0,3).map((item,index)=>{
                        return(
                            <div key={index} className="lg:col-span-4 md:col-span-6">
                                <div className="team p-6 rounded-md border border-gray-100 dark:border-gray-700 group bg-white dark:bg-slate-900">
                                    <Image src={item.image} width={96} height={96} className="h-24 w-24 rounded-full shadow-md dark:shadow-gray-800" alt="" />

                                    <div className="content mt-4">
                                        <Link href="#" className="text-lg font-medium hover:text-indigo-600 block">{item.name}</Link>
                                        <span className="text-slate-400 block">{item.title}</span>

                                        <p className="text-slate-400 mt-4">{item.desc}</p>

                                        <ul className="list-none mt-4 space-x-1">
                                            <li className="inline"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><Icon.Facebook className="h-4 w-4"></Icon.Facebook></Link></li>
                                            <li className="inline"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><Icon.Instagram className="h-4 w-4"></Icon.Instagram></Link></li>
                                            <li className="inline"><Link href="#" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><Icon.Twitter className="h-4 w-4"></Icon.Twitter></Link></li>
                                            <li className="inline"><Link href="#"  className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center border border-gray-100 dark:border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"><Icon.Linkedin className="h-4 w-4"></Icon.Linkedin></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </section>

        {/*<BlogTwo className="container md:pb-24 pb-16"/>*/}

        <SmallFooter/>
        {<Switcher/>}
        <CookieModal/>
        </>
    )
}
