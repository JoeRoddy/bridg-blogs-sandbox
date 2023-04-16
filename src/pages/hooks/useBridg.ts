import { useEffect, useState } from 'react';

type Awaited<T> = T extends Promise<infer U> ? U : never;

export const useBridg = <T extends (...args: any[]) => Promise<any>>(
  callback: T,
  dependencyId?: string,
): Awaited<ReturnType<T>> | undefined => {
  const [data, setData] = useState<Awaited<ReturnType<T>>>();

  useEffect(() => {
    if (!dependencyId) return;
    (async () => {
      const res = await callback();
      setData(res);

      return res;
    })();
  }, [dependencyId]);

  return data;
};
