import { useCallback, useEffect, useState } from "react";
import { UseFetchUsersType, UserFetched } from "../types/users.types";

export default function useFetchUsers(URL: string): UseFetchUsersType {
  const [data, setData] = useState<UserFetched[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error("Fetch data failed!");
      }
      const dataFetched = await response.json();
      const dataFiltered: UserFetched[] = [];

      dataFetched.forEach((data: any) => {
        const { name, email, phone, address } = data;
        dataFiltered.push({ name, email, phone, address });
      });

      setData(dataFiltered);
      setError(null);
    } catch (err) {
      setError(err as Error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
}
