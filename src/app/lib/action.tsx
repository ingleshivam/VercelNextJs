"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { UpdateInvoice } from "../components/updatedetails";
import { error } from "console";
import { signIn } from "../auth";

const formSchema = z.object({
  employeeid: z.string().min(1),
  employeename: z.string().min(1),
  employeecity: z.string().min(1),
  employeesalary: z.string().min(1),
});
const createDetails = formSchema;
export type State = {
  errors?:{
    employeeid?:string[];
    employeename?:string[];
    employeecity?:string[];
    employeesalary?:string[];
  };
  message?: string | null;
}



export default async function addEmployee(prevState:State,formdata: FormData) {
  // const { employeeid, employeename, employeecity, employeesalary } =
   const validated_fields =  createDetails.safeParse({
      employeeid: formdata.get("employeeid"),
      employeename: formdata.get("employeename"),
      employeecity: formdata.get("employeecity"),
      employeesalary: formdata.get("employeesalary"),
    });
    console.log(validated_fields);
    if(!validated_fields.success){
      return{
        errors : validated_fields.error.flatten().fieldErrors,
        message:'Missing Fields, Failed to add employee',        
      };
    }
  
   // Without ZOD
  // const rawData = {
  //     employeeid : formdata.get('employeeid'),
  //     employeename : formdata.get('employeename'),
  //     employeecity : formdata.get('employeecity'),
  //     emplyoeesalary : formdata.get('employeesalary')
  // }

  // console.log(rawData);
  
  const { employeeid, employeename, employeecity, employeesalary } = validated_fields.data;

  try{
    await sql`INSERT INTO employee (employeeid, employeename, employeecity, employeesalary) VALUES (${employeeid},${employeename},${employeecity},${employeesalary});`;
  }catch(error){
    return{
      message:'Database Error : Failed to Add Employee Details',
    }
  }
  revalidatePath("/dashboard/invoices");
  redirect("/dashboard/invoices");
}

const editDetails = formSchema;
export async function updateEmployee(id: string, formData: FormData) {
    const {employeeid,employeename, employeecity, employeesalary} = editDetails.parse({
      employeeid: formData.get("employeeid"),
      employeename: formData.get("employeename"),
      employeecity: formData.get("employeecity"),
      employeesalary: formData.get("employeesalary"),
    });

  try{
    await sql `UPDATE employee SET employeeid = ${employeeid}, employeename = ${employeename}, employeecity = ${employeecity}, employeesalary = ${employeesalary} WHERE employeeid = ${employeeid};`;
  }catch(error){
    return{
      message:'Database Error : Failed to Update Details',
    };
  }
  
  revalidatePath("/dashboard/invoices");
  redirect("/dashboard/invoices");
}

export async function deleteEmployee(id:string){
  // throw new Error('Failed to delte invoice  ');
  try{
    await sql `DELETE FROM employee WHERE employeeid = ${id};`;
  }catch(error){
    return{
      message:'Database Error : Failed to Delete Details',
    }
  }
  
  revalidatePath('/dashboard/invoices');
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', Object.fromEntries(formData));
    // revalidatePath("/dashboard/invoices");
  } catch (error) {
    if ((error as Error).message.includes('CredentialsSignin')) {
      return 'CredentialSignin';
    }
    throw error;
  }
}