
import { sql } from "@vercel/postgres"
import { error } from "console";
import { NextResponse } from "next/server";
import Error from "../../../my-nextui-app/app/error";

export async function InvoicesDetails(){
    const ITEMS_PER_PAGE =5;
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    const result = await sql `SELECT * FROM Employee ORDER BY employeeid ASC;`;
    return result.rows;
}

export async function AreaDetails(){
    const result = await sql `SELECT * from AreaInformation`;
    return result.rows;
}

export async function fetchFilteredInvoices(query:string, currentPage:number,){
    const ITEMS_PER_PAGE =5;
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    try{
        // await new Promise((resolve)=> setTimeout(resolve,5000));
        const invoices = await sql `
            SELECT * FROM employee where employeename ILIKE ${`%${query}%`} OR
            employeecity ILIKE ${`%${query}%`}
            ORDER BY employeeid ASC
            LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
        ;`;

        return invoices.rows
    }catch(error){
        console.log("Error : ",error);
    }
}

export async function fetchInvoicesPages(query:string){
    const ITEMS_PER_PAGE =5;
    try{
        const count = await sql `
        SELECT * FROM employee where employeename ILIKE ${`%${query}%`} OR
        employeecity ILIKE ${`%${query}%`}
        ;`;

        const totalpages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
        return totalpages;
    }catch(error){
        return NextResponse.json({error},{status:500});
    }
}

export async function fetchInvoiceById(id:string){
    try{
        const data = await sql `SELECT * FROM employee WHERE employeeid = ${id};`;
        return data.rows[0];
    }catch(error){
        console.log(error);
    }
}
