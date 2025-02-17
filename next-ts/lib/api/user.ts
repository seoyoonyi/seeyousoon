export const fetchUser = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  if (!res.ok) throw new Error("유저 데이터를 불러오는 데 실패했습니다.");
  return res.json();
};
