// 참고: https://velog.io/@woodong/2.-app.tsx-%EC%99%80-document.tsx
// 애플리케이션의 전체 페이지의 시작점
/**
 * 에러 바운더리를 사용해 애플리케이션에서 발생하는 에러 처리
 * 전역 css 선언
 * 모든 페이지에 공통으로 사용 또는 제공해야 하는 데이터 제공
 */

import type { AppProps } from 'next/app';
import '../styles/globals.css';

/**
 * Component: 현재 페이지를 의미하며, 페이지 변경시 해당 Component는 변경됨
 * pageProps: DataFetching 메서드를 이용해 미리 가져온 초기 객체
 */
const App = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />;
};

export default App;
