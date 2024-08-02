import Form from '@/app/ui/create-form';
import Breadcrumbs from '@/app/ui/breadcrumbs';
import { InvoicesDetails } from '@/app/lib/data';
 
export default async function Page() {
  const customers = await InvoicesDetails();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}