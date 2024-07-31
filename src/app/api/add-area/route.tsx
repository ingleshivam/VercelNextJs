import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { Result } from "postcss";

export async function GET(request:Request){
    const {searchParams} = new URL(request.url);
    const areaid = searchParams.get('areaID');
    const areaname = searchParams.get('areaName');

    try{
        if(!areaid || !areaname) throw new Error("AreaID and AreaName Required");
        await sql `INSERT INTO AreaInformation VALUES (${areaid},${areaname});`;
    }catch(error){
        return NextResponse.json({error},{status:500})
    }

    const result = await sql `SELECT * FROM AreaInformation;`;
    return NextResponse.json({result},{status:200});
}