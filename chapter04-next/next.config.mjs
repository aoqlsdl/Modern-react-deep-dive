// 자바스크립트 파일에 타입스크립트의 타입 도움을 받기 위해 추가된 코드
/** @type {import('next').NextConfig} */
const nextConfig = {
	// 리액트 애플리테이션 내부에서 잠재적인 문제를 개발자에게 알리기 위한 도구
	reactStrictMode: true,
	// swc: 번들링과 컴파일을 더욱 빠르게 수행하는 오픈소스
	// swcMinify: swc를 기반으로 코드 최소화 작업 수행
	swcMinify: true,
};

export default nextConfig;
