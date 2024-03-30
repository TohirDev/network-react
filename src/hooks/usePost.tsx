import { useCallback, useState } from "react";

export const usePost = <T extends object>(): [
  (url: string, data: object) => void,
  { data: T | null; loading: boolean; error: string | null }
] => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async (url: string, data: object) => {
    try {
      setLoading(true);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      setData(result);
    } catch (err: unknown) {
      setError((err as Error).message);
      throw new Error((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  return [fetchData, { data, error, loading }];
};
