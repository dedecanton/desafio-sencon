import { User } from "../types/users.types";

const includesValue = (text: string, value: string) => {
  return text.toLowerCase().trim().includes(value.toLowerCase().trim());
};

const filterUsers = (users: User[], value: string) => {
  return users.filter((user) => {
    const { name, email, address, phone } = user;
    return (
      includesValue(name, value) ||
      includesValue(email, value) ||
      includesValue(address.city, value)
    );
  });
};

export default filterUsers;
