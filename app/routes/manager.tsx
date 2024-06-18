import { NavLink, Outlet } from '@remix-run/react';

export default function ManagerLayout() {
  return (
    <div className="isolate min-h-svh">
      <nav className="flex items-center justify-between h-16 px-4 font-semibold border-b border-gray-300">
        <NavLink to="/manager">Dashboard</NavLink>
        <NavLink to="/">FOH</NavLink>
      </nav>
      <main className="mx-auto max-w-6xl mt-4 px-4">
        <Outlet />
      </main>
    </div>
  );
}
