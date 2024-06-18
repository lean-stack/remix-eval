import type { LoaderFunctionArgs } from '@remix-run/node';
import { Form, json, useActionData } from '@remix-run/react';

export async function action({ request }: LoaderFunctionArgs) {
  const data = await request.formData();

  const resourceId = Number(data.get('resourceId'));

  // Here is my API interaction point
  console.log(`Resource ${resourceId} should be updated`);

  return json({ success: `Resource ${resourceId} successfully updated.` });
}

export default function DashobardRoute() {
  const actionData = useActionData<typeof action>();

  return (
    <div>
      <h1 className="text-2xl font-semibold">Manager: Backend Feature</h1>
      <ul className="my-4 pl-8 list-disc">
        <li>Backend feature is secured via ramix-auth</li>
        <li>Typically loads data from sqlite</li>
        <li>
          Actions should modify sqlite data and as well a legacy firestore
          backend
        </li>
      </ul>
      <Form className="flex flex-col gap-y-4" method="POST">
        <label>
          <span>Resource: </span>
          <input className="py-1.5 px-2" name="resourceId" defaultValue={42} />
        </label>
        <button
          className="border rounded py-1.5 hover:bg-gray-200"
          type="submit"
        >
          Change Data
        </button>
      </Form>
      {actionData && (
        <div className="mt-4 text-green-700">{actionData.success}</div>
      )}
    </div>
  );
}
