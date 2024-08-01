'use client'

import { usePathname, useSearchParams } from "next/navigation"
import path from "path";

export default function Pagination({totalpages}:{totalpages:number}){
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentpage = Number(searchParams.get('page')) || '1';

    const createPageUrl = (pageNumber:number | string) =>{
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    }
}