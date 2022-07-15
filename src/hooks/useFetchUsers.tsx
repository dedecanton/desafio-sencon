import { useCallback, useEffect, useState } from "react";
import { UseFetchUsersType, User } from "../types/users.types";

export default function useFetchUsers(URL: string): UseFetchUsersType {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error("Houve um problema ao buscar os usuários! Tente novamente mais tarde!");
      }
      const dataFetched = await response.json();
      const dataFiltered: User[] = [];

      dataFetched.forEach((data: any) => {
        const { name, email, phone, address, id, username}:User = data;
        dataFiltered.push({ name, email, phone, address, id, username });
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
