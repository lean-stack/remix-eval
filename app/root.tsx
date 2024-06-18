import { Links, Meta, Outlet, Scripts } from '@remix-run/react';

import styles from './styles.css?url';
import type { LinksFunction } from '@remix-run/node';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
