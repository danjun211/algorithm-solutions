function solution(n) {
  // 1*2인 직사각형으로 2*n 채우기
  // 채우는 방법의 수를 리턴
  // 경우의 수를 1000000007로 나눈 나머지를 리턴

  // 세로를 채운다.
  // 마지막에 남은 가로 길이가 1이면 세로를 채운다.

  // 마지막에 남은 가로 길이가 1이면 가로를 채울 수 없음.
  // 가로를 채운다.
  // 가로를 채울땐 두칸을 칠한다.

  // 한칸 이동하냐 두칸 이동하냐 문제네

  // 1, 2로 n을 만들 수 있는 경우의 수

  // n = 1: 1
  // n = 2: 2
  // n = 3: 3
  // n = 4: 5
  // n = 5: 8

  // 피보나치...
  const arr = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    arr[i] = (arr[i - 2] + arr[i - 1]) % 1000000007;
  }

  return arr[n];
}
let n = 1;
console.log(solution(n));
n = 2;
console.log(solution(n));
n = 4;
console.log(solution(n));
n = 5;
console.log(solution(n));
n = 6;
console.log(solution(n));
n = 7;
console.log(solution(n));
/*
가로 길이가 2이고 세로의 길이가 1인 직사각형모양의 타일이 있습니다.
이 직사각형 타일을 이용하여 세로의 길이가 2이고 가로의 길이가 n인 바닥을 가득 채우려고 합니다.
타일을 채울 때는 다음과 같이 2가지 방법이 있습니다.

타일을 가로로 배치 하는 경우
타일을 세로로 배치 하는 경우
예를들어서 n이 7인 직사각형은 다음과 같이 채울 수 있습니다.

직사각형의 가로의 길이 n이 매개변수로 주어질 때,
이 직사각형을 채우는 방법의 수를 return 하는 solution 함수를 완성해주세요.

제한사항
가로의 길이 n은 60,000이하의 자연수 입니다.
경우의 수가 많아 질 수 있으므로, 경우의 수를 1,000,000,007으로 나눈 나머지를 return해주세요.
*/
