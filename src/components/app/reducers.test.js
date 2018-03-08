import { loading, error, LOAD_START, LOAD_END, ERROR } from './reducers';

describe('loading reducer', () => {

  it('initial state', () => {
    const state = loading(undefined, {});
    expect(state).toBe(false);
  });
  
});