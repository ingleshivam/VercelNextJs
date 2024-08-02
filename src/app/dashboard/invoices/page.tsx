import AddRecordBtn from "@/app/components/AddRecordBtn";
import { InvoicesDetails } from "@/app/lib/data";
import React, { Component, Suspense } from 'react';
import TableSkeleton from  "@/app/ui/skeletons/tableskeleton";
import InvoiceDetailsComp from "@/app/ui/dashboard/InvoiceDetails";
// import {Pagination, PaginationItem, PaginationCursor} from "@nextui-org/react";
import Pagination from "@/app/ui/pagination";
import Table from "./table";
import { fetchInvoicesPages } from "@/app/lib/data";
export default async function Page(
    {
        searchParams,
    }
    :
    {
        searchParams?:{
            query?:string,
            page?:string
        }
    }){
    const query = searchParams?.query || '';
    const currentpage = Number(searchParams?.page) || 1;
    const invoiceDetails = await InvoicesDetails();
    const totalPages = await fetchInvoicesPages(query);
    return (
        <>
            <Suspense key={query+currentpage} fallback={<TableSkeleton/>}>
                <Table query={query} currentPage={currentpage}/>
            </Suspense>
            <Pagination totalPages={2}/>
        </>
    );
}