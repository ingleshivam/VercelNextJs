import Form from '@/app/ui/edit-form';
import Breadcrumbs from '@/app/ui/breadcrumbs';
import { InvoicesDetails } from '@/app/lib/data';
import { fetchInvoiceById } from '@/app/lib/data';
import { customer, InvoiceForm } from '@/app/lib/definitions';
 
export default async function Page({params}:{params:{id:string}}){
    const id = params.id; 
    const [invoice,customers] = await Promise.all([
        fetchInvoiceById(id),
        InvoicesDetails(),
    ]);
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}