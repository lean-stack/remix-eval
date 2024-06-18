import { Form } from '@remix-run/react';

export default function DashobardRoute() {
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
      <Form className="flex flex-col gap-y-4">
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
    </div>
  );
}
