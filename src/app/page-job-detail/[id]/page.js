"use client"
import React from 'react'
import Link from "next/link"
import dynamic from "next/dynamic"

const Navbar = dynamic(()=>import('../../componets/Navbar/navbar'));
const JobFooter = dynamic(()=>import('../../componets/jobFooter'));
const Switcher = dynamic(()=>import('../../componets/switcher'));

const MobileApp = dynamic(()=>import('../../componets/mobileApp'));

import * as Icon from 'react-feather';

import {MdKeyboardArrowRight} from "react-icons/md"
import {RiMapPinLine} from "react-icons/ri"

export default function JobDetails(){
    const desc1 =
        [
            {
                desc: "Work alongside Product, Engineering, Design and Marketing to build world-className cryptocurrency applications and experiences"
            },
            {
                desc: "Provide produce vision and strategy for the team"
            },
            {
                desc: "Design and lead a multi-year roadmap in accordance with company's OKRs, strategy and vision"
            },
            {
                desc: "Build and lead an exceptional engineering team to innovate, invent, implement and deploy complex software solutions in mission-critical environment"
            },
            {
                desc: "Understand customer needs and gather product requirements. Identify market opportunities and define product vision and strategy"
            },

        ];
    const desc2 = [
        {
            desc: "5+ years of Product Management, Product Marketing or Product Growth experience with creating product roadmaps from conception to launch, driving product vision and defining go-to-market strategy"
        },
        {
            desc: "Has experience designing, implementing and/or integrating IAM solutions"
        },
        {
            desc: "Has managed engineering teams, designers, and collaborated with other product people"
        },
        {
            desc: "Strong project management skills and ability to work across different product teams"
        },
        {
            desc: "Strong leadership skills"
        },
        {
            desc: "Agile mindset to improve iteratively, rather than placing big long term bets"
        },
        {
            desc: "Excellent communication skills"
        },
        {
            desc: "Communicates well in both written and verbal English"
        },
    ];
    const desc3 = [
        {
            desc: "Strong understanding of blockchain, both technical and practical"
        },
        {
            desc: " Cryptocurrency or financial services product management is a big plus"
        },
        {
            desc: " Experience in KYC (know your customer), AML (anti-money laundering) and IAM services"
        },
        {
            desc: "Understanding of custodial vs non-custodial aspects of cryptocurrency financial products"
        },
        {
            desc: " Financial/payment apps experience"
        },
    ];
    const desc4 = [
        {
            desc: "Flexible work hours"
        },
        {
            desc: "Remote work"
        },
        {
            desc: "Health insurance reimbursement"
        },
        {
            desc: "Wellness program (gym, etc.)"
        },
        {
            desc: "Yoga classes"
        },
        {
            desc: "Japanese classes"
        },
    ]
    return(
        <>
        <Navbar navClass="nav-light" />

        <section className="relative table w-full py-36 lg:py-44 bg-no-repeat bg-center bg-cover" style={{backgroundImage:"url('/images/job/job.jpg')"}}>
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-12">
                    <h3 className="mb-4 md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Senior Web Developer</h3>

                    <ul className="list-none">
                        <li className="inline-flex items-center text-slate-400 me-3"><RiMapPinLine className="text-white h6 me-2" /> London, UK - <span className="text-white">Full Time</span></li>
                    </ul>
                </div>
            </div>

            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-flex mx-auto space-x-1">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Techwind</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="index-job">Job</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Job Detail</li>
                </ul>
            </div>
        </section>
        <div className="relative">
            <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900">
                <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid lg:grid-cols-12 grid-cols-1" id="reserve-form">
                    <div className="lg:col-start-2 lg:col-span-10">
                        <h5 className="mb-4 font-medium text-xl">Description:</h5>

                        <p className="text-slate-400 mb-4">Our vision is to provide the next billion people with access to products that exemplify the ideals of Techwind. These ideals - which include peer-to-peer transactions, decentralization, censorship resistance, and permissionless-ness - support economic freedom.</p>

                        <p className="text-slate-400 mb-4">Our approach is to develop and promote widely accessible products that support economic freedom. For example, our digital wallet - which has 16 million downloads - provides people with an easy-to-use, non-custodial method for buying, selling, storing, sending, receiving, and trading cryptocurrencies.</p>

                        <h5 className="mb-4 mt-6 font-medium text-xl">Duties:</h5>

                        <ul className="list-none mb-0">
                            {
                                desc1.map((data,index) => {
                                    return (
                                        <li key={index} className="text-slate-400 flex mt-2"><Icon.ArrowRight width={16} className="text-indigo-600 h5 mb-0 me-2"></Icon.ArrowRight> {data.desc}</li>
                                    )
                                })
                            }
                        </ul>

                        <h5 className="mb-4 mt-6 font-medium text-xl">Requirements</h5>

                        <ul className="list-none mb-0">
                            {
                                desc2.map((data , index) => {
                                    return (
                                        <li key={index} className="text-slate-400 flex mt-2"><Icon.ArrowRight width={16} className="text-indigo-600 h5 mb-0 me-2"></Icon.ArrowRight> {data.desc}</li>
                                    )
                                })
                            }
                        </ul>

                        <h5 className="mb-4 mt-6 font-medium text-xl">Nice To Have</h5>

                        <ul className="list-none mb-0">
                            {
                                desc3.map((data,index) => {
                                    return (
                                        <li key={index} className="text-slate-400 flex mt-2"><Icon.ArrowRight width={16} className="text-indigo-600 h5 mb-0 me-2"></Icon.ArrowRight> {data.desc}</li>
                                    )
                                })
                            }
                        </ul>

                        <h5 className="mb-4 mt-6 font-medium text-xl">Benefits</h5>
                        <p className="text-slate-400 mb-4">Bitcoin.com is paving the way for the next generation of financial technology products and platforms. we are bringing cryptocurrency and the future of money to the masses. We’d love to have you on board.</p>

                        <p className="text-slate-400 mb-4">We are serious about what we do, but more importantly, we have a lot of fun doing it. Our work culture is modern, meaning we strive for work experiences based on transparency, productivity, trust, and passion. For all employees, benefits include:</p>


                        <ul className="list-none mb-4">
                            {
                                desc4.map((data, index) => {
                                    return (
                                        <li key={index} className="text-slate-400 flex mt-2"><Icon.ArrowRight width={16} className="text-indigo-600 h5 mb-0 me-2"></Icon.ArrowRight> {data.desc}</li>
                                    )
                                })
                            }
                        </ul>

                        <p className="text-slate-400 mb-4">For employees residing in Japan, we offer permanent employment status (正社員) and the option to be paid in yen.</p>

                        <p className="text-slate-400 mb-4">Employees residing outside of Japan are classified as Independent Contractors and are paid in the cryptocurrency of their choice.</p>

                        <div className="mt-6">
                            <Link href="/page-job-apply" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Apply now</Link>
                        </div>
                    </div>
                </div>
            </div>

            <MobileApp/>
        </section >

        <JobFooter/>
        <Switcher/>
        </>
    )
}