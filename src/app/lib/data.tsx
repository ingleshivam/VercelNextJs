
import { sql } from "@vercel/postgres"
import { error } from "console";
import { NextResponse } from "next/server";

export async function InvoicesDetails(){
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const result = await sql `select * from employee;`;
    return result.rows;
}

export async function AreaDetails(){
    const result = await sql `SELECT * from AreaInformation`;
    return result.rows;
}