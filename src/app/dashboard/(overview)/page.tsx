
import { request } from "http";
import { AreaDetails, InvoicesDetails } from "../../lib/data";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { error } from "console";
import { Suspense } from "react";
import TableSkeleton from "../../ui/skeletons/tableskeleton";
import AddRecordBtn from "../../components/AddRecordBtn";
import InvoiceDetailsComp from "@/app/ui/dashboard/InvoiceDetails";
import Search from "@/app/ui/search";
export default async function Page(){
        // const Employees  = await sql `select * from Employee;`;
        // return NextResponse.json({Employees},{status:200});
        // const invoiceDetails = await InvoicesDetails();
        const areaDetails = await AreaDetails();
        return(
                <>
                <div className="">
                    <AddRecordBtn/>
                </div>
                <div>
                    Search Box : 
                    <Search/>   
                </div>
                {/* <div className="bg-black justify-center flex mt-8">
                    <table className="w-full bg-white text-center">
                        <thead className="bg-orange-500 text-white">
                            <tr>
                                <th className="py-3 px-2">Employee ID</th>
                                <th className="py-3 px-2">Employee Name</th>
                                <th className="py-3 px-2">Employee City</th>
                                <th className="py-3 px-2">Employee Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                invoiceDetails.map(index=>
                                <tr>
                                <td className="py-3 px-2">{index.employeeid}</td>
                                <td className="py-3 px-2">{index.employeename}</td>
                                <td className="py-3 px-2">{index.employeecity}</td>
                                <td className="py-3 px-2">{index.employeesalary}</td>
                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div> */}

                <Suspense fallback={<TableSkeleton/>}>
                    <InvoiceDetailsComp/>
                </Suspense>

<div className="bg-black justify-center flex mt-8">
                    <table className="w-full bg-white text-center">
                        <thead className="bg-orange-500 text-white">
                            <tr>
                                <th className="py-3 px-2">AreaID</th>
                                <th className="py-3 px-2">AreaName</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                areaDetails.map(index=>
                                <tr>
                                <td className="py-3 px-2">{index.areaid}</td>
                                <td className="py-3 px-2">{index.areaname}</td>
                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </>
    
        );
}   