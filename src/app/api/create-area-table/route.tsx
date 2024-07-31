import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET(request:Request){
    try{
        const result = await sql `CREATE TABLE AreaInformation(
            AreaID bigint,
            AreaName varchar(25)
        );`;

        return NextResponse.json({result},{status:200});
    }catch(error){
        return NextResponse.json({error},{status:500});
    }
}