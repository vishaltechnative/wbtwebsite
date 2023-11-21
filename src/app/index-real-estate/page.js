"use client"
import React,{useState} from "react"
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"

const Navbar = dynamic(()=>import('../componets/Navbar/navbar'));
const Footer = dynamic(()=>import('../componets/Footer/footer'));
const Switcher = dynamic(()=>import('../componets/switcher'));
const CookieModal = dynamic(()=>import('../componets/cookieModal'));

const GetInTuct = dynamic(()=>import('../componets/getInTuch'));

const TinySlider = dynamic(()=>import('tiny-slider-react'),{ssr: false,});
import '../../../node_modules/tiny-slider/dist/tiny-slider.css'

const Select = dynamic(()=>import('react-select'),{ssr: false,});


import * as Icon from 'react-feather';

import { FaArrowRight } from "react-icons/fa"
import {LuSearch, LuBath} from "react-icons/lu"
import {AiOutlineHome,AiOutlineDollar} from "react-icons/ai"
import {PiBriefcase} from "react-icons/pi"
import {FiKey} from "react-icons/fi"
import {LiaCompressArrowsAltSolid} from "react-icons/lia"
import {LuBedDouble} from "react-icons/lu"

import ModalVideo from 'react-modal-video'
import "../../../node_modules/react-modal-video/css/modal-video.css";

import CountUp from 'react-countup';
import { propertyData } from "../Data/data"

export default function RealEstate(){
    const [isOpen, setOpen] = useState(false)

    const settings = {
        container: '.tiny-three-item',
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 12,
        responsive: {
            992: {
                items: 3
            },
    
            767: {
                items: 2
            },
    
            320: {
                items: 1
            },
        },
    }
    const project = [
        { value: '1', label: 'Houses' },
        { value: '2', label: 'Apartment' },
        { value: '3', label: 'Offices' },
        { value: '4', label: 'Townhome' },
    ]
    const minPrice = [
        { value: '1', label: '500' },
        { value: '2', label: '1000' },
        { value: '3', label: '2000' },
        { value: '4', label: '3000' },
        { value: '5', label: '4000' },
        { value: '5', label: '5000' },
        { value: '5', label: '6000' },
        { value: '5', label: '7000' },
        { value: '5', label: '8000' },
        { value: '5', label: '9000' },
    ]
    const maxPrice = [
        { value: '1', label: '500' },
        { value: '2', label: '1000' },
        { value: '3', label: '2000' },
        { value: '4', label: '3000' },
        { value: '5', label: '4000' },
        { value: '5', label: '5000' },
        { value: '5', label: '6000' },
        { value: '5', label: '7000' },
        { value: '5', label: '8000' },
        { value: '5', label: '9000' },
    ]
    const workData = [
        {
            icon:AiOutlineHome,
            title:"Evaluate Property",
            desc:"If the distribution of letters and words is random, the reader will not be distracted from making."
        },
        {
            icon:PiBriefcase,
            title:"Meeting with Agent",
            desc:"If the distribution of letters and words is random, the reader will not be distracted from making."
        },
        {
            icon:FiKey,
            title:"Close the Deal",
            desc:"If the distribution of letters and words is random, the reader will not be distracted from making."
        },
    ]
    const services = [
        {
            description: '" Techwind made the processes so easy. Techwind instantly increased the amount of interest and ultimately saved us over $10,000. "',
            image: "/images/client/01.jpg",
            name: 'Christa Smith',
            role: 'Manager'
        },
        {
            description: '" I highly recommend Techwind as the new way to sell your home "by owner". My home sold in 24 hours for the asking price. Best $400 you could spend to sell your home. "',
            image: "/images/client/02.jpg",
            name: 'Christa Smith',
            role: 'Manager'
        },
        {
            description: ' " My favorite part about selling my home myself was that we got to meet and get to know the people personally. This made it so much more enjoyable! " ',
            image: "/images/client/03.jpg",
            name: 'Christa Smith',
            role: 'Manager'
        },
        {
            description: '" Great experience all around! Easy to use and efficient. "',
            image: "/images/client/04.jpg",
            name: 'Christa Smith',
            role: 'Manager'
        },
        {
            description: '" Techwind made selling my home easy and stress free. They went above and beyond what is expected. "',
            image: "/images/client/05.jpg",
            name: 'Christa Smith',
            role: 'Manager'
        },
        {
            description: '" Techwind is fair priced, quick to respond, and easy to use. I highly recommend their services! "',
            image: "/images/client/06.jpg",
            name: 'Christa Smith',
            role: 'Manager'
        }
    ]
    return(
        <>
        <Navbar/>

        <section className="relative mt-20">
            <div className="container-fluid relative md:mx-4 mx-2">
                <div className="relative pt-48 pb-60 table w-full rounded-2xl shadow-md overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="image-wrap absolute -top-[350px] -bottom-[350px] -start-[100px] -end-[100px] min-w-full w-auto min-h-full h-auto overflow-hidden m-auto" id="home"
                        style={{backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundImage: `url('/images/real/bg/02.jpg')`}}
                        ></div>
                    </div>
                    <div className="absolute inset-0 bg-black/60"></div>
                    <div className="container relative">
                        <div className="grid grid-cols-1">
                            <div className="md:text-start text-center">
                                <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">Discover Most Suitable <br /> Properties</h1>
                                <p className="text-white/70 text-xl max-w-xl">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:pb-24 pb-16">
            <div className="container relative">
                <div className="grid grid-cols-1 justify-center">
                    <div className="relative -mt-32">
                        <div className="grid grid-cols-1">
                            <div>
                                <form className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-md dark:shadow-gray-700">
                                <div className="registration-form text-dark text-start">
                                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                                <div>
                                    <div className="filter-search-form relative lg:before:content-[''] lg:before:absolute lg:before:top-[10px] lg:before:end-0 lg:before:h-10 lg:before:z-1 lg:before:border-r lg:before:border-inherit lg:before:rounded-md lg:before:outline-0 lg:dark:before:border-gray-700">
                                        <LuSearch className="absolute top-[48%] -translate-y-1/2 start-3 z-1 text-indigo-600 text-[20px]"/>
                                        <input name="name" type="text" id="job-keyword" className="form-input lg:rounded-t-sm lg:rounded-e-none lg:rounded-b-none lg:rounded-s-sm lg:outline-0 w-full filter-input-box bg-gray-50 dark:bg-slate-800 border-0 focus:ring-0" placeholder="Search your Keywords" />
                                    </div>
                                </div>

                                <div>                                                      
                                    <div className="filter-search-form relative lg:before:content-[''] lg:before:absolute lg:before:top-[10px] lg:before:end-0 lg:before:h-10 lg:before:z-1 lg:before:border-r lg:before:border-inherit lg:before:rounded-md lg:before:outline-0 lg:dark:before:border-gray-700">
                                        <AiOutlineHome className="absolute top-[48%] -translate-y-1/2 start-3 z-1 text-indigo-600 text-[20px]"/>
                                        <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={project} />

                                    </div>
                                </div>

                                <div>                                                       
                                    <div className="filter-search-form relative lg:before:content-[''] lg:before:absolute lg:before:top-[10px] lg:before:end-0 lg:before:h-10 lg:before:z-1 lg:before:border-r lg:before:border-inherit lg:before:rounded-md lg:before:outline-0 lg:dark:before:border-gray-700">
                                        <AiOutlineDollar className="absolute top-[48%] -translate-y-1/2 start-3 z-1 text-indigo-600 text-[20px]"/>
                                        <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={minPrice} />

                                    </div>
                                </div>

                                <div>                                                       
                                    <div className="filter-search-form relative lg:before:content-[''] lg:before:absolute lg:before:top-[10px] lg:before:end-0 lg:before:h-10 lg:before:z-1 lg:before:border-r lg:before:border-inherit lg:before:rounded-md lg:before:outline-0 lg:dark:before:border-gray-700">
                                        <AiOutlineDollar className="absolute top-[48%] -translate-y-1/2 start-3 z-1 text-indigo-600 text-[20px]"/>
                                        <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={maxPrice} />

                                    </div>
                                </div>

                                <div className="lg:mt-6">
                                    <input type="submit" id="search-buy" name="search" className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white searchbtn submit-btn w-full !h-12 rounded" value="Search" />
                                </div>
                            </div>
                        </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="md:col-span-5">
                        <div className="relative">
                            <div className="p-5 shadow dark:shadow-gray-800 rounded-t-full bg-gray-50 dark:bg-slate-800">
                                <Image src="/images/real/about.jpg" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="shadow-md rounded-t-full rounded-md" alt="" />
                            </div>
                            <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                <Link href="#" onClick={() => setOpen(true)} data-type="youtube" data-id="S_CGed6E610"
                                    className="lightbox h-20 w-20 rounded-full shadow-md dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600">
                                    <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)} />

                    <div className="md:col-span-7">
                        <div className="lg:ms-4">
                            <h4 className="mb-6 md:text-3xl text-2xl lg:leading-normal leading-normal font-semibold">Efficiency. Transparency. <br /> Control.</h4>
                            <p className="text-slate-400 max-w-xl">Techwind Homes developed a platform for the Real Estate marketplace that allows buyers and sellers to easily execute a transaction on their own. The platform drives efficiency, cost transparency and control into the hands of the consumers. Techwind Homes is Real Estate Redefined.</p>

                            <div className="mt-4">
                                <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-3">Learn More </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">How It Works</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                    {workData.map((item,index)=>{
                        let Icons = item.icon
                        return(
                        <div key={index} className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-md bg-white dark:bg-slate-900 overflow-hidden text-center">
                            <div className="relative overflow-hidden text-transparent -m-3">
                                <Icon.Hexagon className="h-32 w-32 fill-indigo-600/5 mx-auto"></Icon.Hexagon>
                                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-md transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                                    <Icons className="w-8 h-8"/>
                                </div>
                            </div>

                            <div className="mt-6">
                                <h5 className="text-xl font-medium">{item.title}</h5>
                                <p className="text-slate-400 mt-3">{item.desc}</p>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Featured Properties</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">

                    {
                        propertyData.slice(0,6).map((data,index) => {
                            return (
                                <div key={index} className="group rounded-md bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-800 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
                                    <div className="relative">
                                        <Image src={data.image} width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} alt="" />

                                        <div className="absolute top-6 end-6">
                                            <Link href="#" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-lg text-center bg-white dark:bg-slate-900 border-0 shadow dark:shadow-gray-800 rounded-full text-red-600"><i className="mdi mdi-heart"></i></Link>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <div className="pb-6">
                                            <Link href={`/property-detail/${data.id}`} className="text-lg hover:text-indigo-600 font-medium ease-in-out duration-500">{data.address}</Link>
                                        </div>

                                        <ul className="py-6 border-y border-gray-100 dark:border-gray-800 flex items-center list-none">
                                            <li className="flex items-center me-4">
                                                <LiaCompressArrowsAltSolid className=" text-2xl me-2 text-indigo-600"/>
                                                <span>8000sqf</span>
                                            </li>

                                            <li className="flex items-center me-4">
                                                <LuBedDouble className="text-2xl me-2 text-indigo-600"/>
                                                <span>4 Beds</span>
                                            </li>

                                            <li className="flex items-center">
                                                <LuBath className="text-2xl me-2 text-indigo-600"/>
                                                <span>4 Baths</span>
                                            </li>
                                        </ul>

                                        <ul className="pt-6 flex justify-between items-center list-none">
                                            <li>
                                                <span className="text-slate-400">Price</span>
                                                <p className="text-lg font-medium">$5000</p>
                                            </li>

                                            <li>
                                                <span className="text-slate-400">Rating</span>
                                                <ul className="text-lg font-medium text-amber-400 list-none">
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                                    <li className="inline text-black dark:text-white">5.0(30)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="md:flex justify-center text-center mt-6">
                    <div className="md:w-full">
                        <Link href="/property-listing" className="relative inline-flex items-center font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">View More Properties<FaArrowRight className="ms-2 text-[10px]"/> </Link>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16 lg:pt-24 pt-16">
                <div className="absolute inset-0 opacity-25 dark:opacity-50 bg-no-repeat bg-center bg-cover" style={{backgroundImage:"url('/images/map.png')"}}></div>
                <div className="relative grid grid-cols-1 pb-8 text-center z-1">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-black dark:text-white">Trusted by more than 10K users</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="relative grid md:grid-cols-3 grid-cols-1 items-center mt-8 gap-[30px] z-1">
                    <div className="counter-box text-center">
                        <h1 className="lg:text-5xl text-4xl font-semibold mb-2 text-slate-400 dark:text-white"><CountUp className="counter-value" start={1010} end={1548} />+</h1>
                        <h5 className="counter-head text-lg font-medium">Properties Sell</h5>
                    </div>

                    <div className="counter-box text-center">
                        <h1 className="lg:text-5xl text-4xl font-semibold mb-2 text-slate-400 dark:text-white"><CountUp className="counter-value" start={2} end={25} />+</h1>
                        <h5 className="counter-head text-lg font-medium">Award Gained</h5>
                    </div>

                    <div className="counter-box text-center">
                        <h1 className="lg:text-5xl text-4xl font-semibold mb-2 text-slate-400 dark:text-white"><CountUp className="counter-value" start={0} end={9} />+</h1>
                        <h5 className="counter-head text-lg font-medium">Years Experience</h5>
                    </div>
                </div>
            </div>

            <div className="container relative md:py-24 py-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What Our Client Say ?</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="flex justify-center relative mt-8">
                    <div className="relative w-full">
                        <div className="tiny-three-item">
                            <TinySlider settings={settings}>
                                {services.map((item, index) => {
                                    return(
                                        <div className="tiny-slide" key={index}>
                                                <div className="text-center mx-3">
                                                    <p className="text-lg text-slate-400 italic"> {item.description} </p>
    
                                                    <div className="text-center mt-5">
                                                        <ul className="text-xl font-medium text-amber-400 list-none mb-2">
                                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                                        </ul>
    
                                                        <Image src={item.image} width={56} height={56} className="h-14 w-14 rounded-full shadow-md dark:shadow-gray-800 mx-auto" alt="" />
                                                        <h6 className="mt-2 font-semibold">{item.name}</h6>
                                                        <span className="text-slate-400 text-sm">{item.role}</span>
                                                    </div>
                                                </div>
                                            </div>
                                    )
                                })}
                            </TinySlider>
                            
                        </div>
                    </div>
                </div>
            </div>

           <GetInTuct/>
        </section>

        <Footer/>
        <Switcher/>
        <CookieModal/>
        </>
    )
}