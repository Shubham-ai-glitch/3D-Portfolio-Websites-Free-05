"use client"
import React from 'react'
import Link from "next/link";
import { FOOTER_DATA } from "@/constants";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-[20]">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            
            {/* Contact Form Section */}
            <div id="contact" className="w-full max-w-[600px] flex flex-col gap-5 p-8 border border-[#2A0E61] bg-[#03001417] backdrop-blur-md rounded-xl mb-10 mt-10">
                <h1 className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
                    Contact Me
                </h1>
                
                <div className="flex flex-col gap-2">
                    <label className="text-sm">Your Name</label>
                    <input type="text" placeholder="Enter Your Name" className="p-2 rounded bg-[#110e27] border border-[#2A0E61] outline-none focus:border-purple-500 text-white" />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm">Your Email</label>
                    <input type="email" placeholder="shubhamsingh9415191609@gmail.com" className="p-2 rounded bg-[#110e27] border border-[#2A0E61] outline-none focus:border-purple-500 text-white" />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm">Subject</label>
                    <input type="text" placeholder="Enter Subject" className="p-2 rounded bg-[#110e27] border border-[#2A0E61] outline-none focus:border-purple-500 text-white" />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm">Message</label>
                    <textarea rows={3} placeholder="Type Your Message" className="p-2 rounded bg-[#110e27] border border-[#2A0E61] outline-none focus:border-purple-500 text-white" />
                </div>

                <button className="py-2 px-5 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold rounded-lg mt-2 hover:scale-105 transition-all">
                    Send message
                </button>
            </div>

            {/* Social Links Section */}
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                {FOOTER_DATA.map((column) => (
                    <div key={column.title} className="min-w-[200px] h-auto flex flex-col items-center justify-start my-5">
                        <h3 className="font-bold text-[16px]">{column.title}</h3>
                        {column.data.map(({ icon: Icon, name, link }) => (
                            <Link
                                key={`${column.title}-${name}`}
                                href={link}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="flex flex-row items-center my-[15px] cursor-pointer"
                            >
                                {Icon && <Icon />}
                                <span className="text-[15px] ml-[6px]">{name}</span>    
                            </Link>
                        ))}
                    </div>
                ))}
            </div>

            {/* Copyright with your name */}
            <div className="mb-[20px] text-[15px] text-center mt-5">
                &copy; Shubham Singh {new Date().getFullYear()}. Not professional but great cybersecurity developer.
            </div>
        </div>
    </div>
  )
}

export default Footer
