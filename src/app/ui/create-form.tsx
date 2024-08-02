'use client'
import Link from "next/link";
import { customer } from "../lib/definitions";
import { useState } from "react";
import { useFormState } from "react-dom";
import addEmployee from "../lib/action";
import { State } from "../lib/action";
import { useActionState } from "react";

export default function Form({customers}:{customers:customer[]}){
    const initialstate:State = {message:null, errors: {}};  
    const [state, formAction] = useActionState(addEmployee, initialstate);
    // const initialstate = {message:null, errors:{}};
    // const [state,dispatch] = useFormState(addEmployee,initialstate);

    return (
        <div className="">
            <form action={formAction}>
                <div>
                    <label>Enter Employee ID</label>
                    <div>
                        <input aria-describedby="employee-error" type="text" className="p-2 w-full mt-3" name="employeeid"/>
                        <div id="employee-error" aria-live="polite" aria-atomic="true">
                            {
                                state.errors?.employeeid && state.errors.employeeid.map((error:string)=>(
                                    <p className="text-red-500 text-sm" key={error}>
                                        {error}
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                </div>
                
                <div className="mt-3">
                    <label>Enter Employee Name</label>
                    <div>
                        <input type="text" className="mt-3 p-2 w-full" name="employeename" required/>
                    </div>
                </div>

                <div className="mt-3">
                    <label>Enter Employee City</label>
                    <div>
                        <input type="text" name="employeecity" className="mt-3 p-2 w-full" required/>
                    </div>
                </div>

                <div className="mt-3">
                    <label>Enter Employee Salary</label>
                    <div>
                        <input type="text" className="mt-3 p-2 w-full" name="employeesalary" required/>
                    </div>
                </div>
                <button type="submit" className="text-white bg-orange-500 px-12 py-2 mt-5">Send</button>
                <button type="button" className="bg-orange-500 px-12 py-2 mt-2 ms-4 text-white"><Link href={'/dashboard/invoices'}>BACK</Link></button>
            </form>
        </div>
    );
}