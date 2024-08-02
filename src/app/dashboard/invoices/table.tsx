import { fetchFilteredInvoices } from "@/app/lib/data";
import Search from "@/app/ui/search";
import Link from "next/link";
import { Pagination } from "@nextui-org/react";
import React from "react";
import { UpdateInvoice } from "@/app/components/updatedetails";
import { DeleteDetails } from "@/app/components/deletedetails";
export default async function InvoiceTable(
    {
        query, 
        currentPage,
    }
    :
    {
        query:string,
        currentPage:number;
    }
){
    const invoices = await fetchFilteredInvoices(query,currentPage);
    return (
        <>
            <div>
                <label>Search Here :</label>
                <Search/>
            </div>
            <div className="mt-8">
                <Link href={'/dashboard/invoices/create'} className="text-white bg-orange-500 mt-10 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">ADD RECORD</Link>
            </div>
            <div className="bg-black justify-center flex mt-8">
                <table className="w-full bg-white text-center">
                    <thead className="bg-orange-500 text-white">
                        <tr>
                            <th className="py-3 px-2">Employee ID</th>
                            <th className="py-3 px-2">Employee Name</th>
                            <th className="py-3 px-2">Employee City</th>
                            <th className="py-3 px-2">Employee Salary</th>
                            <th className="py-3 px-2">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            invoices.map((data,index)=>
                            <tr key={index}>
                                <td className="py-3 px-2">{data.employeeid}</td>
                                <td className="py-3 px-2">{data.employeename}</td>
                                <td className="py-3 px-2">{data.employeecity}</td>
                                <td className="py-3 px-2">{data.employeesalary}</td>
                                <td className="py-3 px-2 flex justify-center items-center"><UpdateInvoice id={data.employeeid}/> | <DeleteDetails id={data.employeeid}/>  </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}