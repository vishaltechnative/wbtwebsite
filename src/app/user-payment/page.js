"use client"
import React,{useState} from 'react'
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"

const Navbar = dynamic(()=>import('../componets/Navbar/navbar'));
const Footer = dynamic(()=>import('../componets/Footer/footer'));
const Switcher = dynamic(()=>import('../componets/switcher'));
const AccountTab = dynamic(()=>import('../componets/accountTab'));

import * as Icon from 'react-feather';

export default function UserPayment(){
    const [isModal, setIsmodal] = useState(false)
    const paymentMethod = [
        {
            image:"/images/payments/visa.png",
            title:"Visa ending in 4578",
            time:"Expires in 12/2022"
        },
        {
            image:"/images/payments/american-ex.png",
            title:"American Express ending in 4578",
            time:"Expires in 12/2022"
        },
        {
            image:"/images/payments/discover.png",
            title:"Discover ending in 4578",
            time:"Expires in 12/2022"
        },
        {
            image:"/images/payments/master-card.png",
            title:"Master Card ending in 4578",
            time:"Expires in 12/2022"
        },
    ]
    const month = [
        { month: 'Jan' }, { month: 'Feb' }, { month: 'Mar' }, { month: 'Apr' }, { month: 'May' }, { month: 'Jne' }, { month: 'July' }, { month: 'Aug' }, { month: 'Sep' }, { month: 'Oct' }, { month: 'Nov' }, { month: 'Dec' }
    ]

    return(
        <>
        <Navbar navClass="nav-light"/>

        <section className="relative lg:pb-24 pb-16">
            <div className="container-fluid relative">
                <div className="profile-banner relative text-transparent">
                    <input id="pro-banner" name="profile-banner" type="file" className="hidden" onChange={(event) => loadFile(event)} />
                    <div className="relative shrink-0">
                        <Image src="/images/blog/bg.jpg" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="h-80 w-full object-cover" id="profile-banner" alt="" />
                        <div className="absolute inset-0 bg-black/70"></div>
                        <label className="absolute inset-0 cursor-pointer" htmlFor="pro-banner"></label>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="md:flex">
                    <div className="lg:w-1/4 md:w-1/3 md:px-3">
                        <div className="relative md:-mt-48 -mt-32">
                            <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                                <div className="profile-pic text-center mb-5">
                                    <input id="pro-img" name="profile-image" type="file" className="hidden" onChange={(event) => loadFile(event)} />
                                    <div>
                                        <div className="relative h-28 w-28 mx-auto">
                                            <Image src="/images/client/05.jpg" width={112} height={112} className="rounded-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800" id="profile-image" alt="" />
                                            <label className="absolute inset-0 cursor-pointer" htmlFor="pro-img"></label>
                                        </div>

                                        <div className="mt-4">
                                            <h5 className="text-lg font-semibold">Jenny Jimenez</h5>
                                            <p className="text-slate-400">jennyhot@hotmail.com</p>
                                        </div>
                                    </div>
                                </div>
                                <AccountTab/>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-3/4 md:w-2/3 md:px-3 mt-[30px] md:mt-0">
                        <div className="rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                            <div className="p-6 md:flex justify-between items-center border-b border-gray-100 dark:border-gray-700">
                                <div className="mb-4 md:mb-0">
                                    <h5 className="text-xl font-semibold">Current Plan</h5>
                                </div>
                                <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Switch to Annual Plan</Link>
                            </div>

                            <div className="p-6">
                                <h5 className="text-2xl font-bold">$18/Monthly</h5>
                                <p className="text-slate-400 mt-2">Your next monthly charge of $18 will be applied to your primary payment method on July 20, 2022.</p>
                            </div>
                        </div>

                        <div className="rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 mt-6">
                            <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                                <h5 className="text-xl font-semibold">Payment Methods</h5>
                                <p className="text-slate-400 mt-2">Primary payment method is used by default</p>
                            </div>

                            <div className="px-6">
                                <ul>
                                    {paymentMethod.map((item,index)=>{
                                        return(
                                            <li className="flex justify-between items-center py-6" key={index}>
                                                <div className="flex items-center">
                                                    <Image src={item.image} width={48} height={32} className="rounded shadow dark:shadow-gray-800 w-12" alt="" />
    
                                                    <div className="ms-3">
                                                        <p className="font-semibold">{item.title}</p>
                                                        <p className="text-slate-400 text-sm">{item.time}</p>
                                                    </div>
                                                </div>
    
                                                <div>
                                                    <Link href="#" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle transition duration-500 ease-in-out text-base text-center bg-red-600/5 hover:bg-red-600 border-red-600/10 hover:border-red-600 text-red-600 hover:text-white rounded-full"><Icon.Trash2 className="h-4 w-4"></Icon.Trash2></Link>
                                                </div>
                                            </li>
                                        )
                                    })}

                                    <li className="py-6 border-t border-gray-100 dark:border-gray-700">
                                        <Link href="#" onClick={()=>setIsmodal(!isModal)} data-modal-toggle="paymentMethod" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Add Payment Method</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {isModal ? 
                <div id="paymentMethod" className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40 flex items-center justify-center">
                    <div className="relative w-full h-auto max-w-md p-4">
                        <div className="relative bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-800">
                            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                                <h5 className="text-xl font-semibold">Add Payment Method</h5>
                                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ms-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" onClick={()=>setIsmodal(!isModal)} >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </button>
                            </div>
                            <div className="p-6 text-center">
                                <form>
                                    <div className="grid grid-cols-1">
                                        <div className="lg:col-span-6 mb-5">
                                            <div className="text-start">
                                                <label htmlFor="name" className="font-semibold">Your Name :</label>
                                                <input name="name" id="name" type="text" className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" required placeholder="Name :" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid lg:grid-cols-12 lg:gap-6">
                                        <div className="lg:col-span-6 mb-5">
                                            <div className="text-start">
                                                <label htmlFor="ex_month" className="form-label font-medium">Month :</label>
                                                <select id="ex_month" className="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0">

                                                    {month.map((data, index) => {
                                                        return (
                                                            <option key={index}>{data.month}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="lg:col-span-6 mb-5">
                                            <div className="text-start">
                                                <label htmlFor="ex_year" className="form-label font-medium">Year :</label>
                                                <select id="ex_year" className="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0">
                                                    <option>2022</option>
                                                    <option>2023</option>
                                                    <option>2024</option>
                                                    <option>2025</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="lg:col-span-6 mb-5">
                                            <div className="text-start">
                                                <label htmlFor="name" className="font-semibold">Card no. :</label>
                                                <input name="number" id="card_number" type="number" className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" required placeholder="number :" />
                                            </div>
                                        </div>

                                        <div className="lg:col-span-6 mb-5">
                                            <div className="text-start">
                                                <label htmlFor="name" className="font-semibold">CVV :</label>
                                                <input name="number" id="cvv_number" type="number" className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" required placeholder="number :" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1">
                                        <div className="mb-5">
                                            <div className="text-start">
                                                <label htmlFor="card_names" className="form-label font-medium">Cards :</label>
                                                <select id="card_names" className="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0">
                                                    <option>Visa</option>
                                                    <option>Ame. Express</option>
                                                    <option>Master</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" id="submit" name="send" className="py-2 px-5  font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md justify-center flex items-center">Add Card</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>:""
            }
        <Footer/>
        <Switcher/>
        </>
    )
}