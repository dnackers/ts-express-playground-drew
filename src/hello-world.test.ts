import 'jest';
import { helloWorld } from './hello-world';

function isHelloWorldMessage(o: any) {
  return typeof o === 'object' && o['message'] === 'Hello, world!';
}

describe('helloWorld', () => {
  it('responds with the correct shape and message', () => {
    helloWorld(
      {} as any,
      { send: (message: any) => expect(isHelloWorldMessage(message)).toBeTruthy() } as any,
    );
  });
});