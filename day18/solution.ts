type GetArrayType<T extends ReadonlyArray<unknown>> = T[number];

function createStreetLight<T extends ReadonlyArray<string>>(
  colors: T,
  defaultColor: GetArrayType<T>
): GetArrayType<T>;

function createStreetLight<T = Color>(
  colors: readonly (T extends Color ? string : never)[],
  defaultColor: T
): T;

function createStreetLight(
  colors: ReadonlyArray<string>,
  defaultColor: string
): string {
  return defaultColor;
}

/**
 * GetArrayType : 배열의 요소 타입을 추출하는 유틸리티 타입
 *   T[number]는 배열의 인덱스 접근으로 요소 타입을 가져옴
 *   예: ["red", "green"][number] => "red" | "green"
 */

/**
 * createStreetLight
 * 
 * 첫 번째 오버로드 시그니처
 *   배열로부터 자동으로 타입을 추론하는 케이스를 처리
 *   예: createStreetLight(["red", "green"], "red")
 * 
 * 듀 번째 오버로드 시그니처
 *   Color 타입을 명시적으로 지정하는 케이스를 처리
 *   예: createStreetLight<Color>(colors, "red")
 * 
 * 실제 구현
 *   실제 런타임에서 실행되는 코드
 */
