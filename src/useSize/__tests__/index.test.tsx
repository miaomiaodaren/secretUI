import { renderHook } from '@testing-library/react-hooks';
import useSize from '..';

describe('useSize', () => {
  test('should be defined', () => {
    expect(useSize).toBeDefined();
  });
  test('with argument', () => {
    const hook = renderHook(() => useSize({ target: document.body }));
    console.log(hook.result.current, '@@@@');
    expect(hook.result.current.width).toBe(0);
    expect(hook.result.current.height).toBe(0);
  });
});
