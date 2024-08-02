import { TrashIcon } from "@heroicons/react/16/solid";
import { deleteEmployee } from "../lib/action";

export function DeleteDetails({id}:{id:string}){
 
    const deleteInvoiceWithId = deleteEmployee.bind(null, id);

    return (
      <form action={deleteInvoiceWithId}>
        <button className="rounded-md border p-2 hover:bg-gray-100">
          <span className="sr-only">Delete</span>
          <TrashIcon className="w-5" />
        </button>
      </form>
    );
}