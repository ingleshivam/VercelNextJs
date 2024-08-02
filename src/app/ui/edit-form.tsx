'use client'
import Link from "next/link";
import { useState } from "react";
import { useFormState } from "react-dom";
import  { updateEmployee } from "../lib/action";
import { InvoiceForm,customer } from "../lib/definitions";

export default function Form(
    {
        invoice,
        customers,
    }:
    {
        invoice:InvoiceForm,
        customers:customer[];
    }){

    // const initialstate = {message:null, errors:{}};
    // const [state,dispatch] = useFormState(addEmployee,initialstate);
    const updateDetailsWithID = updateEmployee.bind(null, invoice.employeeid);

    return (
        <form action={updateDetailsWithID}>
            <div>
                <label>Enter Employee ID</label>
                <div className="mt-3">
                    <input disabled  type="text" className="p-2 w-full" name="employeeid" defaultValue={invoice.employeeid}/>
                </div>
            </div>
            
            <div className="mt-3">
                <label>Enter Employee Name</label>
                <div className="mt-3">
                    <input type="text" className="p-2 w-full" name="employeename" defaultValue={invoice.employeename}/>
                </div>
            </div>

            <div className="mt-3">
                <label>Enter Employee City</label>
                <div className="mt-3">
                    <input type="text" name="employeecity" className="p-2 w-full" defaultValue={invoice.employeecity}/>
                </div>
            </div>

            <div className="mt-3">
                <label>Enter Employee Salary</label>
                <div className="mt-3">
                    <input type="text" className="p-2 w-full" name="employeesalary" defaultValue={invoice.employeesalary}/>
                </div>
            </div>
            <button type="submit" className="mt-5 bg-orange-500 px-12 py-2 mt-2 text-white">Update</button>
            <button type="button" className="mt-5 bg-orange-500 px-12 py-2 mt-2 ms-3 text-white"><Link href={'/dashboard/invoices'}>Back</Link></button>
        </form>
    );
}