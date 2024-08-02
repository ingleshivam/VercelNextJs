"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { UpdateInvoice } from "../components/updatedetails";

const formSchema = z.object({
  employeeid: z.string(),
  employeename: z.string(),
  employeecity: z.string(),
  employeesalary: z.string(),
});

const createDetails = formSchema;

export async function addEmployee(formdata: FormData) {
  const { employeeid, employeename, employeecity, employeesalary } =
    createDetails.parse({
      employeeid: formdata.get("employeeid"),
      employeename: formdata.get("employeename"),
      employeecity: formdata.get("employeecity"),
      employeesalary: formdata.get("employeesalary"),
    });
  
   // Without ZOD
  // const rawData = {
  //     employeeid : formdata.get('employeeid'),
  //     employeename : formdata.get('employeename'),
  //     employeecity : formdata.get('employeecity'),
  //     emplyoeesalary : formdata.get('employeesalary')
  // }

  // console.log(rawData);

  await sql`INSERT INTO employee (employeeid, employeename, employeecity, employeesalary) VALUES (${employeeid},${employeename},${employeecity},${employeesalary});`;
  revalidatePath("/dashboard/invoices");
  redirect("/dashboard/invoices");
}

const editDetails = formSchema;
export async function updateEmployee(id: string, formData: FormData) {
  const { employeeid, employeename, employeecity, employeesalary } =
    editDetails.parse({
      employeeid: formData.get("employeeid"),
      employeename: formData.get("employeename"),
      employeecity: formData.get("employeecity"),
      employeesalary: formData.get("employeesalary"),
    });

  await sql`UPDATE employee SET employeeid = ${employeeid}, employeename = ${employeename}, employeecity = ${employeecity}, employeesalary = ${employeesalary} WHERE employeeid = ${employeeid};`;
  revalidatePath("/dashboard/invoices");
  redirect("/dashboard/invoices");
}

export async function deleteEmployee(id:string){
  await sql `DELETE FROM employee WHERE employeeid = ${id};`;
  revalidatePath('/dashboard/invoices');
}
