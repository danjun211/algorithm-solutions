const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lines = [];

rl.on("line", function(line) {
  lines.push(line);
}).on("close", function() {
  // 첫줄: n
  // 둘째줄부터: 1~n까지 하나씩 순서대로 주어짐

  const n = parseInt(lines.shift());
  const numbers = lines.map(v => parseInt(v));
  const stack = [];
  const operations = [];

  let count = 1;
  let pointer = 0;
  for (let i = 1; i <= n; i++) {
    // 입력받은 데이터와 같아질때까지 삽입
    while (count <= numbers[pointer]) {
      stack.push(count++);
      operations.push("+");
    }
    // 마지막 인덱스가 입력받은 데이터와 같으면 꺼냄
    if (numbers[pointer] === stack[stack.length - 1]) {
      stack.pop();
      operations.push("-");
    } else {
      // 순서대로 꺼낼 수 없으면 수열을 만들 수 없음
      console.log("NO");
      process.exit();
    }
    pointer++;
  }

  console.log(operations.join("\n"));
  process.exit();
});

/*문제
스택 (stack)은 기본적인 자료구조 중 하나로, 컴퓨터 프로그램을 작성할 때 자주 이용되는 개념이다.
스택은 자료를 넣는 (push) 입구와 자료를 뽑는 (pop) 입구가 같아 제일 나중에 들어간 자료가 
제일 먼저 나오는 (LIFO, Last in First out) 특성을 가지고 있다.

1부터 n까지의 수를 스택에 넣었다가 뽑아 늘어놓음으로써, 하나의 수열을 만들 수 있다.
이때, 스택에 push하는 순서는 반드시 오름차순을 지키도록 한다고 하자.
임의의 수열이 주어졌을 때 스택을 이용해 그 수열을 만들 수 있는지 없는지,
있다면 어떤 순서로 push와 pop 연산을 수행해야 하는지를 알아낼 수 있다.
이를 계산하는 프로그램을 작성하라.

입력
첫 줄에 n (1 ≤ n ≤ 100,000)이 주어진다. 둘째 줄부터 n개의 줄에는 수열을 이루는 1이상 n이하의 정수가 하나씩 순서대로 주어진다.
물론 같은 정수가 두 번 나오는 일은 없다.

출력
입력된 수열을 만들기 위해 필요한 연산을 한 줄에 한 개씩 출력한다.
push연산은 +로, pop 연산은 -로 표현하도록 한다. 불가능한 경우 NO를 출력한다.
*/
