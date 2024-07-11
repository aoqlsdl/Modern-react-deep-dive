// p.239 fecth를 수행하는 useFetch 예제와 실제 사용 예제
import { useEffect, useState } from "react";

// HTTP 요청을 하는 사용자 정의 훅
// fetch를 이용해 API를 호출하는 로직을 사용자 정의 훅으로 분리한 예제
{
  /** 
    만약 훅으로 분리하지 않않다면 fetch로 API 호출을 해야 하는 모든 컴포넌트 내에서 
    공통적으로 관리되지 않는 최소 4개의 state를 선언해서 각각 구현했어야 함
*/
}
{
  /** 
    내부에 useState와 useEffect등을 가지고 자신만의 원하는 훅을 만들기 때문에
    당연히 리액트 훅의 규칙을 따라야 하고,
    use로 시작하는 이름을 가져야 함
*/
}
function useFetch<T>(
  url: string,
  { method, body }: { method: string; body?: XMLHttpRequestBodyInit },
) {
  // 응답 결과
  const [result, setResult] = useState<T | undefined>();

  // 요청중 여부
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // 2xx 3xx로 정상 응답인지 여부
  const [ok, setOk] = useState<boolean | undefined>();

  // HTTP status
  const [status, setStatus] = useState<number | undefined>();

  useEffect(() => {
    const abortController = new AbortController();
    (async () => {
      setIsLoading(true);

      const res = await fetch(url, {
        method,
        body,
        signal: abortController.signal,
      });

      setOk(res.ok);
      setStatus(res.status);

      if (res.ok) {
        const apiRes = await res.json();
        setResult(apiRes);
      }

      setIsLoading(false);
    })();

    return () => {
      abortController.abort();
    };
  }, [url, method, body]);

  return { ok, result, isLoading, status };
}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function App() {
  // 사용자 지정 훅 사용
  const { isLoading, result, status, ok } = useFetch<Array<Todo>>(
    "https://jsonplaceholder.typicode.com/todos",
    { method: "GET" },
  );

  useEffect(() => {
    if (!isLoading) {
      console.log("fetchResult >> ", status);
    }
  }, [status, isLoading]);

  return (
    <div>
      {ok
        ? (result || []).map(({ userId, title }, idx) => (
            <div key={idx}>
              <p>{userId}</p>
              <p>{title}</p>
            </div>
          ))
        : null}
    </div>
  );
}
