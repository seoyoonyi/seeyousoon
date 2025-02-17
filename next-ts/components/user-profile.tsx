"use client";

import { useUser } from "@/hooks/use-user";
import { useUserStore } from "@/store/use-user-store";
import { useEffect } from "react";

export default function UserProfile() {
  const { data, isLoading, error } = useUser();
  const { user, setUser } = useUserStore();

  useEffect(() => {
    if (data && !user) {
      setUser(data);
    }
  }, [data, user, setUser]);

  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p>에러 발생: {error.message}</p>;

  if (data && !user) setUser(data);

  return (
    <div>
      <h1>사용자 정보</h1>
      <p>이름: {user?.name}</p>
      <p>이메일: {user?.email}</p>
    </div>
  );
}
