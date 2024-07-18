// 없더라도 실행하는 데 지장은 없음
import { NextPageContext } from 'next';

// 클라이언트 혹은 서버에서 발생하는 에러를 처리할 목적으로 만들어짐
// 개발 모드에서는 이 페이지에 방문할 수 없고, 에러가 발생하면 Next.js가 제공하는 개발자 에러 팝업이 나타나게 됨
function Error({ statusCode }: { statusCode: number }) {
	return (
		<p>
			{statusCode ? `서버에서 ${statusCode}` : `클라이언트에서`} 에러가
			발생했습니다.
		</p>
	);
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : '';
	return { statusCode };
};

export default Error;
