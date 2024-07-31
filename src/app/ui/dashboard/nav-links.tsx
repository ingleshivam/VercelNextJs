"use client";

import { Herr_Von_Muellerhoff } from 'next/font/google';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
    {name:"Home",href:'/'},
    {name:"Dashboard",href:'/dashboard'},
    {name:"Customer",href:'/dashboard/customer'},
    {name:"Invoices",href:'/dashboard/invoices'}
] 



export default function NavLinks(){
    const pathname = usePathname(); 
    return(
        <>
            <ul className=''>
                {
                    links.map((link)=>{
                        return (
                            <Link key={link.name} href={link.href || ""}>
                                <li className={clsx(
                                    'p-4 text-center border border-white-500 text-white hover:bg-orange-500',
                                    {
                                        'bg-sky-500 text-white  -600' : pathname == link.href
                                    },
                                    )}>{link.name}</li> 
                            </Link>
                        );      
                    })
                }
            </ul>
        </>
    );
}