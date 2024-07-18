// /pages가 생략되고 파일명이 주소가 됨. 즉, 여기서는 /hello
export default function Hello() {
	console.log(typeof window === 'undefined' ? '서버' : '클라이언트');
	return <>Hello</>;
}

export const getServerSideProps = () => {
	return {
		props: {},
	};
};
