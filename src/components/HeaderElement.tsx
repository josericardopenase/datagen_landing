"use client"

import React from "react";
import {usePathname} from "next/navigation";
import {Popover} from "@ark-ui/react/popover";
import {BiChevronDown} from "react-icons/bi";

export function HeaderElement({element} : {element: {name : string , href : string, children ?: {title : string, icon : React.ReactNode}[]}}){
    const pathname = usePathname()
    const isActive = pathname.includes(element.href)

    return (
        <Popover.Root portalled closeOnEscape={true} closeOnInteractOutside={true}>
            <Popover.Trigger className={`gap-1 flex items-center ${isActive ? "font-semibold text-light-100" : "text-light-700"}`}>
                {element.name} {element.children && <BiChevronDown size={20}></BiChevronDown> }
            </Popover.Trigger>
            <Popover.Positioner >
                <Popover.Content className="mt-6 w-[700px] bg-dark-600 grid-cols-2 gap-3 grid p-3 rounded-xl">
                    {
                        element?.children?.map((x) => (
                            <div key={x.title} className="flex  cursor-pointer gap-3 items-center p-3 rounded-xl hover:bg-dark-700">
                                <div className="w-[50px] text-light-300 text-2xl h-[50px] flex justify-center items-center rounded-xl bg-dark-800">
                                    {
                                        x.icon
                                    }
                                </div>
                                <Popover.Title className="text-sm  font-semibold text-white">{x.title}</Popover.Title>
                            </div>
                        ))
                    }
                </Popover.Content>
            </Popover.Positioner>
        </Popover.Root>
    )
}
