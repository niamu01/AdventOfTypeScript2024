type CountDash<S extends string, Count extends any[] = []> = 
    S extends `-${infer Rest}`
        ? CountDash<Rest, [0, ...Count]>
        : Count['length'];

type GetRoute<
    T extends string, 
    AccumulatedDashes extends any[] = [], 
    IsFirst extends boolean = true
> = 
    T extends `${infer Key}-${infer Rest}`
        ? Key extends ''
            ? GetRoute<Rest, [0, ...AccumulatedDashes], IsFirst>
            : IsFirst extends true
                ? [[Key, 0], ...GetRoute<Rest, [0], false>]
                : [[Key, AccumulatedDashes['length']], ...GetRoute<Rest, [0], false>]
    : T extends ''
        ? [] 
        : [[T, IsFirst extends true ? 0 : AccumulatedDashes['length']]];

/**
 * CountDash: 입력 문자열 S에서 연속된 - 의 개수를 세는 타입
 * 1. S extends `-${infer Rest}`를 통해 문자열의 첫 글자가 대시인지 확인
 * 2. 대시인 경우 [0, ...Count]로 배열의 맨 앞에 0을 추가하여 누적
 * 3. Rest로 나머지 문자열을 다시 재귀호출 (대시가 아닌 문자가 나올 때까지 반복)
 * 4. 대시가 아닌 문자가 나오면 Count['length']로 누적된 배열의 길이(대시의 개수)를 반환
 */

/**
 * GetRoute: - 로 구분된 문자열을 [문자열, 대시개수] 형태의 튜플 배열로 변환
 * 1. T extends `${infer Key}-${infer Rest}`로 문자열을 현재 키와 나머지로 분리
 * 2. AccumulatedDashes로 현재 위치까지의 연속된 대시 개수를 추적
 * 3. IsFirst로 첫 번째 키인지를 판별
 */