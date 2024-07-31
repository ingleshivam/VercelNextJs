
import { sql } from "@vercel/postgres"
import { error } from "console";
import { NextResponse } from "next/server";

export async function InvoicesDetails(){
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const result = await sql `SELECT * FROM Employee;`;
    return result.rows;
}

export async function AreaDetails(){
    const result = await sql `SELECT * from AreaInformation`;
    return result.rows;
}

export async function fetchFilteredInvoices(query:string, currentPage:number,){
    try{
        const invoices = await sql `
            SELECT * FROM employee where employeename ILIKE ${`%${query}%`} OR
            employeecity ILIKE ${`%${query}%`}
            ORDER BY employeename ASC
        ;`;

        return invoices.rows
    }catch(error){
        return NextResponse.json({error},{status:500});
    }
}

export async function fetchInvoicesPages(query:string){
    const ITEMS_PER_PAGE =5;
    try{
        const count = await sql `
        SELECT COUNT(*) FROM Employee
        WHERE employeename ILIKE ${`%${query}%`} OR
        employeecity ILIKE ${`%${query}%`}
        ;`;

        const totalpages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
        return totalpages;
    }catch(error){
        return NextResponse.json({error},{status:500});
    }
}

// first-next-app\node_modules\@patternfly\react-core\dist\js\components\Pagination