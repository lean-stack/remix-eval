import EventEmitter from 'node:events';

const bus = new EventEmitter();

type Command = {
  name: string;
  payload: number;
};

export const apiBus = {
  on(listener: (cmd: Command) => void) {
    bus.addListener('api', listener);
  },
  off(listener: (cmd: Command) => void) {
    bus.removeListener('api', listener);
  },
  emit(cmd: Command) {
    console.log('Received', cmd);
    bus.emit('api', cmd);
  },
};
