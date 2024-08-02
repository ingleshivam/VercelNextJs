import Link from "next/link";
import { PencilIcon } from "@heroicons/react/16/solid";
export function UpdateInvoice({ id }: { id: string }) {
    return (
      <Link
        href={`/dashboard/invoices/${id}/edit`}
        className="rounded-md hover:bg-gray-100"
      >
        <PencilIcon className="w-5 mt-5" />
      </Link>
    );
  }
  