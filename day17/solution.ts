type Box<T> = { value: T };
type Tuple<T> = [T];

const upperCase = <S extends string>(x: S) => x.toUpperCase() as Uppercase<S>;
const lowerCase = <S extends string>(x: S) => x.toLowerCase() as Lowercase<S>;
const firstChar = <S extends string>(x: S) => x[0] as S extends `${infer F}${string}` ? F : never;
const firstItem = <T>(x: T[]): T => x[0];
const makeTuple = <T>(x: T): Tuple<T> => [x];
const makeBox = <T>(value: T): Box<T> => ({ value });

type Compose = {
  <A, B, C, D>(
    f: (a: A) => B,
    g: (b: B) => C,
    h: (c: C) => D
  ): (a: A) => D;
}

const compose: Compose = (f, g, h) => (a) => h(g(f(a)));


/**
* 제네릭 타입들: 타입 안전성을 보장하기 위한 컨테이너 타입 정의
* 1. Box: 값을 객체로 래핑하는 컨테이너 타입
* 2. Tuple: 단일 요소를 배열로 래핑하는 튜플 타입
*/

/**
* 문자열 변환 함수들: 제네릭을 활용한 타입 안전한 문자열 처리
* 1. upperCase: 제네릭 S로 입력 문자열의 타입을 보존하며 대문자 변환
*   toUpperCase(): 문자열을 모두 대문자로 변환하는 내장 메서드
*   Uppercase<S>: TypeScript 내장 유틸리티 타입, 문자열 리터럴 타입을 대문자로 변환
* 
* 2. lowerCase: 제네릭 S로 입력 문자열의 타입을 보존하며 소문자 변환
*   toLowerCase(): 문자열을 모두 소문자로 변환하는 내장 메서드
*   Lowercase<S>: TypeScript 내장 유틸리티 타입, 문자열 리터럴 타입을 소문자로 변환
* 
* 3. firstChar: 제네릭 S와 조건부 타입을 활용하여 첫 문자 추출
*   infer F: 문자열의 첫 글자 타입을 추론하는 TypeScript의 타입 추론 기능
*/

/**
* 컨테이너 조작 함수들: 배열과 객체를 다루는 유틸리티 함수
* 1. firstItem: 배열의 첫 요소를 타입 안전하게 추출
*   x[0]: 배열의 인덱스 접근으로 첫 번째 요소 추출
* 
* 2. makeTuple: 단일 값을 튜플로 변환
*   [x]: 값을 배열로 래핑하여 Tuple 타입으로 변환
* 
* 3. makeBox: 단일 값을 Box 객체로 변환
*   { value }: 객체 리터럴로 Box 타입의 객체 생성
*/

/**
* Compose: 함수 합성을 위한 타입 정의
* 1. 세 개의 함수를 받아 합성하는 타입 시그니처 정의
* 2. 각 함수의 반환값이 다음 함수의 입력값으로 전달되도록 타입 체인 구성
* 3. f, g, h 순서로 타입이 A -> B -> C -> D로 변환
*   f: A -> B
*   g: B -> C
*   h: C -> D
* 4. 최종적으로 입력 A를 받아 D를 반환하는 단일 함수 생성
*/
/**
* compose 함수: 실제 함수 합성을 수행
* 1. Compose 타입을 구현하는 함수
* 2. 세 함수를 받아서 합성된 하나의 함수를 반환
* 3. 왼쪽에서 오른쪽으로 함수들을 순차적으로 적용
*   (a) => h(g(f(a))): 함수들을 중첩하여 순차적으로 실행
*/