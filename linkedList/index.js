class LinkedList {
  length = 0; // 리스트 길이
  head = null; // 리스트 첫 번째 노드를 가리키는 포인터

  add(value) {
    if (this.head) {
      // 리스트가 null이 아니면
      let current = this.head; // 현재 노드를 첫 번째 노드로 설정

      while (current.next) {
        // 마지막 노드를 찾기 위해 반복함
        current = current.next;
      }
      current.next = new Node(value); // 마지막 노드에 새 노드를 연결
    } else {
      this.head = new Node(value); // 리스트가 비어있으면 첫 번째 노드로 설정
    }

    this.length++; // 리스트 길이 증가
    return this.length; // 새로운 리스트의 길이 반환
  }

  // private Fn
  #search(index) {
    let count = 0; // 현재 위치를 세기 위한 카운트
    let prev;
    let current = this.head; // 현재 노드를 리스트의 첫 번째 노드로 설정

    while (count < index) {
      // 원하는 인덱스에 도달할 때까지 반복
      prev = current;
      current = current?.next; // 다음 노드로 이동
      count++; // 현재 위치 증가
    }

    return [prev, current];
  }

  search(index) {
    return this.#search(index)[1]?.value;
  }

  remove(index) {
    const [prev, current] = this.#search(index);

    if (prev && current) {
      prev.next = current.next;
      this.length--;
      return this.length;
    } else if (current) {
      // index가 0일때
      this.head = current.next;
      this.length--;
      return this.length;
    }

    // 삭제하고자 하는 대상이 없을 때에는 동작 X
  }
}

// 하나의 객체 즉, 아이템을 Node라고 지칭한다.
class Node {
  next = null; // 다음 노드를 가리키는 포인터
  constructor(value) {
    this.value = value; // 노드 데이터 값
  }
}

const linkedList = new LinkedList();

linkedList.add(1); // 1을 리스트에 추가
linkedList.add(2); // 2를 리스트에 추가
linkedList.add(3); // 3을 리스트에 추가
linkedList.add(4); // 4를 리스트에 추가
linkedList.add(5); // 5를 리스트에 추가
linkedList.add(6); // 6을 리스트에 추가
console.log(linkedList.search(5)); // undefined
linkedList.remove(4);
console.log(linkedList.search(4)); // 6
linkedList.remove(4);
console.log(linkedList.search(3)); // undefined
console.log(linkedList.remove(2)); // undefined
console.log("------끝------------");

// 해당 예시에서 연결리스트는 다음과 같이 구성됨
// 1 -> 2 -> 3 -> 4 -> 5 -> 6
