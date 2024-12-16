"use client";
import { useRouter } from "next/navigation";
import { startTransition, useEffect } from "react";
import { AlertTriangle } from "lucide-react"; // 경고 아이콘 추가

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const { refresh } = useRouter();

  return (
    <section className="flex items-center justify-center min-h-screen py-8 pb-20 m-auto max-w-custom container">
      <article className="flex flex-col items-center gap-6 p-4">
        <div className="txt flex flex-col items-center gap-4">
          {/* 경고 아이콘 */}
          <AlertTriangle className="w-12 h-12 text-red-600" />
          <h2 className="font-bold">페이지에서 오류가 발생했습니다!</h2>
          <p className="mt-8">{error.message}</p>
        </div>

        <button
          onClick={() =>
            startTransition(() => {
              refresh();
              reset();
            })
          }
          className="px-4 py-2 font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          다시 시도
        </button>
      </article>
    </section>
  );
}
