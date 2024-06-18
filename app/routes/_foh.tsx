import { NavLink, Outlet } from '@remix-run/react';

export default function FOHLayout() {
  return (
    <div className="isolate min-h-svh">
      <nav className="flex items-center justify-between h-16 px-4 font-semibold border-b border-gray-300">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/manager">Manager</NavLink>
      </nav>
      <main className="mx-auto max-w-6xl mt-4 px-4">
        <Outlet />
      </main>
    </div>
  );
}
