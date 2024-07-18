// []의 의미: 여기에 어떠한 문자도 올 수 있음
// 즉, /hello/greeting, /hello/1 모두 유효함
// 만약 이미 정의된 주소가 있다면 미리 정의해둔 주소가 우선순위

export default function Greeting() {
	return <h1>greeting</h1>;
}
