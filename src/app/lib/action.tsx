'use server'
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import {z} from 'zod';

const formSchema = z.object({
    employeeid:z.string(),
    employeename:z.string(),
    employeecity:z.string(),
    employeesalary:z.string()
});

const createDetails = formSchema;

export default async function addEmployee(formdata:FormData){
    const {employeeid, employeename, employeecity, employeesalary} = createDetails.parse({
        employeeid:formdata.get('employeeid'),
        employeename:formdata.get('employeename'),
        employeecity:formdata.get('employeecity'),
        employeesalary:formdata.get('employeesalary')
    });

    // const rawData = {
    //     employeeid : formdata.get('employeeid'),
    //     employeename : formdata.get('employeename'),
    //     employeecity : formdata.get('employeecity'),
    //     emplyoeesalary : formdata.get('employeesalary')
    // }

    // console.log(rawData);

    await sql `INSERT INTO employee (employeeid, employeename, employeecity, employeesalary) VALUES (${employeeid},${employeename},${employeecity},${employeesalary});`;
    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');
}