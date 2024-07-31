import { InvoicesDetails } from "@/app/lib/data";



export default async function InvoiceDetailsComp(){
    const invoiceDetails = await  InvoicesDetails();
    return (
        <div className="bg-black justify-center flex mt-8">
        <table className="w-full bg-white text-center">
            <thead className="bg-orange-500 text-white">
                <tr>
                    <th className="py-3 px-2">Employee ID</th>
                    <th className="py-3 px-2">Employee Name</th>
                    <th className="py-3 px-2">Employee City</th>
                    <th className="py-3 px-2">Employee Salary</th>
                </tr>
            </thead>
            <tbody>
                {
                    invoiceDetails.map(index=>
                    <tr>
                    <td className="py-3 px-2">{index.employeeid}</td>
                    <td className="py-3 px-2">{index.employeename}</td>
                    <td className="py-3 px-2">{index.employeecity}</td>
                    <td className="py-3 px-2">{index.employeesalary}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    </div>
    );
}