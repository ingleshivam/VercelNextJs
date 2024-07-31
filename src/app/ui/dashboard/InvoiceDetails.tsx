import { InvoicesDetails } from "../../lib/data";

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
                    invoiceDetails.map((data,index)=>
                    <tr key={index}>
                        <td className="py-3 px-2">{data.employeeid}</td>
                        <td className="py-3 px-2">{data.employeename}</td>
                        <td className="py-3 px-2">{data.employeecity}</td>
                        <td className="py-3 px-2">{data.employeesalary}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    </div>
    );
}