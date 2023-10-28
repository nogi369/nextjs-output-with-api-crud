import { useCallback } from "react";
import { NAVIGATION_PATH } from "../../../constants/navigation";
import { useRouter } from "next/router";

// actionsの型定義
type ActionType = {
  handleMoveDetailPage: (id: number) => void;
  handleMoveEditPage: (id: number) => void;
};

export const useTodoList = () => {
  const router = useRouter();

  // 詳細ページに遷移する処理
  const handleMoveDetailPage = useCallback(
    (id: number) => router.push(`${NAVIGATION_PATH.DETAIL}${id}`),
    [router]
  );

  // 編集ページに遷移する処理
  const handleMoveEditPage = useCallback(
    (id: number) => router.push(`${NAVIGATION_PATH.EDIT}${id}`),
    // (id: number) => router.push(`http://localhost:3001/todo/edit/1`),
    [router]
  );

  // 型定義なし => あり
  const actions: ActionType = { handleMoveDetailPage, handleMoveEditPage };

  // 「as const」 (const assertion) => オブジェクトを読み取り専用にする
  return [actions] as const;
};
