import { apiBus } from '#utils/api-bus.server.js';

export function registerFirestore() {
  apiBus.on((cmd) => {
    switch (cmd.name) {
      case 'UPDATE':
        console.log(`Updating Resource ${cmd.payload} in firestore`);
        break;

      default:
        break;
    }
  });
}
