// 실제로 전개 연산자와 동일함
// /hi를 제외한 /hi 하위의 모든 주소가 여기로 옴
// 질문: 그럼 [greeting].tsx와 뭐가 다른 거?

// []의 변수로 지정된 값이 사용되는 방법
import { NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function HiAll({ props: serverProps }: { props: string[] }) {
	// 클라이언트에서 값을 가져오는 법
	const {
		query: { props },
	} = useRouter();

	useEffect(() => {
		console.log(props);
		console.log(JSON.stringify(props) === JSON.stringify(serverProps)); // true
	}, [props, serverProps]);

	return (
		<>
			hi {''}
			<ul>
				{serverProps.map(item => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</>
	);
}

export const getServerSideProps = (context: NextPageContext) => {
	// 서버에서 값을 가져오는 법
	const {
		query: { props }, // string | string[] | undefined
	} = context;

	return {
		props: { props },
	};
};
