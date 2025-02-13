// src/components/organisms/Counter/debounceHook.ts
import { useEffect, useRef } from "react";

type DebouncedFunction<T extends (...args: any[]) => void> = T & {
  cancel: () => void;
};

const useDebounce = <T extends (...args: any[]) => void>(
  func: T,
  delay: number
): DebouncedFunction<T> => {
  const funcRef = useRef(func);

  useEffect(() => {
    funcRef.current = func;
  }, [func]);

  const debouncedFunc = ((...args: Parameters<T>) => {
    let timer: NodeJS.Timeout | undefined;

    const execute = () => {
      funcRef.current(...args);
    };

    if (timer) clearTimeout(timer);
    timer = setTimeout(execute, delay);

    return {
      cancel: () => {
        if (timer) clearTimeout(timer);
      },
    };
  }) as unknown as DebouncedFunction<T>;

  return debouncedFunc;
};

export default useDebounce;
