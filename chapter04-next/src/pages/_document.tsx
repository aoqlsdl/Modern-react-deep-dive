// 애플리케이션의 HTML을 초기화하는 곳
// css-in-js의 스타일을 서버에서 모아 HTML로 제공할 수 있음
/**
 * <html>이나 <body>에 DOM 속성을 추가하고 싶을 때 사용
 * _app.tsx -> 렌더링이나 라우팅에 따라 서버나 클라이언트에서 실행할 수 있으나, _document는 무조건 서버에서 실행됨
 * next/document는 오직 _document.tsx에서만 사용할 수 있음
 * next/head: 페이지에서 사용, title이나 SEO에 필요한 정보 저장
 * <Head /> 내부에서 <title /> 사용할 수 없음
 */
/**
 * _app.tsx와의 차이점
 * _app.tsx -> Next.js를 초기화하는 파일, 서버와 클라이언트 모두에서 렌더링됨
 * _document.tsx -> 웹사이트의 뼈대가 되는 HTML 설정과 관련된 코드를 추가하는 곳, 서버에서만 렌더링됨
 */
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="ko">
			<Head />
			<body className="body">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
