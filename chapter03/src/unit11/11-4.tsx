import { ComponentType } from "react";

// p. 247 고차 컴포넌트 만들어보기
interface LoginProps {
  loginRequired?: boolean;
}

// 함수(함수 컴포넌트)를 인수로 받으며, 컴포넌트를 반환하는 고차 컴포넌트
// 이러한 인증 처리는 서버나 NGINX와 같이 자바스크립트 이전 단계에서 실행하는 편이 훨씬 효율적임
function withLoginComponent<T extends object>(Component: ComponentType<T>) {
  return function (props: T & LoginProps) {
    const { loginRequired, ...restProps } = props;

    if (loginRequired) {
      return <>로그인이 필요합니다.</>;
    }

    return <Component {...(restProps as T)} />;
  };
}

// 원래 구현하고자 하는 컴포넌트를 만들고, withLoginComponent로 감싸기만 하면 됨
// 로그인 여부, 로그인이 안 되면 다른 컴포넌트를 렌더링하는 책임은 모두
// 고차 컴포넌트인 withLoginComponent에 맡길 수 있음
const Component = withLoginComponent((props: { value: string }) => {
  return <h3>{props.value}</h3>;
});

export default function App() {
  // 로그인 관련 정보를 가져옴
  const isLogin = true;
  return <Component value="text" loginRequired={isLogin} />;
}
