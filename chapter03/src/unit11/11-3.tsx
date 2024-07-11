// p.246 고차 함수 직접 만들어보기
function add(a: number) {
  return function (b: number) {
    return a + b;
  };
}

const res = add(1); // 여기서 res는 앞서 반환한 함수를 가리킴. 이것이 클로저에 기억되어 res2에서 a=1인 정보를 활용 가능
const res2 = res(2); // 비로소 a와 b를 더한 3이 반환됨
