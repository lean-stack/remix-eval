import { apiBus } from '#utils/api-bus.server.js';

export function registerSqlLite() {
  apiBus.on((cmd) => {
    switch (cmd.name) {
      case 'UPDATE':
        console.log(`Updating Resource ${cmd.payload} in sqlite`);
        break;

      default:
        break;
    }
  });
}
