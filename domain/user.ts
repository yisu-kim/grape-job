export type UserId = string;

export type User = {
  id: UserId;
  name: string;
};

export const createUser = (id: UserId, name: string): User => ({
  id,
  name,
});

export const updateUserName = (user: User, name: string): User => ({
  ...user,
  name,
});
