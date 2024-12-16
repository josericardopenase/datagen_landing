"use client";

import React, {useEffect, useState} from 'react';
import {MdMenu} from "react-icons/md";
import {IoMdClose} from "react-icons/io";
import {FiArrowUpRight} from "react-icons/fi";
import { Popover } from '@ark-ui/react/popover'
import {
    BiChevronDown,
    BiCog,
    BiData,
    BiHeart,
    BiImage,
    BiMale,
    BiSolidData,
    BiSolidEyedropper,
    BiTrash
} from "react-icons/bi";
import {usePathname} from "next/navigation";
import {HeaderElement} from "@/components/HeaderElement";


function Header() {
    const links = [
        { name: "Home", href: ""},
        { name: "Use Cases", href: "#plataforma",
            children : [
                {
                    title: "Synthetic data generation",
                    icon: <BiData></BiData>
                },
                {
                    title: "Image editing",
                    icon: <BiImage></BiImage>
                },
                {
                    title: "Blur or remove sensitive information",
                    icon: <BiTrash></BiTrash>
                },
                {
                    title: "Creative tasks automation",
                    icon: <BiCog></BiCog>
                },
            ]
        },
        { name: "Developers", href: "#metodo" },
        { name: "Pricing", href: "#comunidad" },
    ];
    const [open, setOpen] = useState(false)


    return (
       <>
        <header className="z-30 flex justify-center w-full p-4 items-center bg-dark-700 fixed top-0">
            <div className="w-full flex justify-between items-center max-w-[1200px]">
                <div className="md:w-[350px]">
                    <img className="w-[130px]" src={"/Logo.png"}/>
                </div>
                <div className="hidden flex-grow lg:flex justify-center">
                    <div className="flex gap-8">
                        {links.map((x, i) => (
                            <HeaderElement key={i} element={x}></HeaderElement>
                        ))}
                    </div>
                </div>
                <div className="flex lg:hidden" onClick={() => setOpen(true)}>
                    <MdMenu size={24} className="text-light-100"/>
                </div>
                <div className="hidden lg:flex gap-3 md:w-[350px] justify-end">
                    <a
                        className="pl-6 flex items-center gap-3 py-2 px-3 text-sm bg-white text-gray-800 font-semibold rounded-full  cursor-pointer"
                    >
                        Get started
                        <div className="w-[30px] h-[30px] bg-dark-800 rounded-full flex justify-center items-center text-white">
                        <FiArrowUpRight size={15}></FiArrowUpRight>

                        </div>
                    </a>
                </div>
            </div>
        </header>
           {
               open &&
               <div className="z-50  items-center fixed flex flex-grow lg:hidden justify-center bg-dark-800 h-[100vh] w-full">
                   <IoMdClose className="fixed z-50 top-0 right-0 m-4 text-white" onClick={() => setOpen(false)} size={24}></IoMdClose>
                   <div className="flex gap-8 flex-col text-white text-center font-semibold text-2xl">
                       {links.map((x, i) => (
                           <a
                               onClick={() => setOpen(false)}
                               href={x.href}
                               key={i}
                           >
                               {x.name}
                           </a>
                       ))}
                   </div>
               </div>
           }

       </>
    );
}

export default Header;
