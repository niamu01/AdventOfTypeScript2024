type CurryFunction<F extends (...args: any[]) => any>
	= <T extends unknown[]>(...args: T) 
	=> T extends [] 
		? CurryFunction<F>
		: Parameters<F> extends [...T, ...infer Rest]
			? Rest extends []
				? ReturnType<F>
				: CurryFunction<(...args: Rest) => ReturnType<F>>
			: never
		;

declare function DynamicParamsCurrying
	<F extends (...args: any[]) => any>(fn: F)
	: CurryFunction<F>;

/**
 * CurryFunction: 함수를 커링 형태로 변환하는 타입
 *   F는 originalCurry의 타입
 *   T는 새로 만들어진 spikedCurry에 들어올 타입
 * 
 * 1. 함수가 받을 수 있는 인자의 개수를 유연하게
 *   (1, 'hello') -> T: [number, string]
 *   <T extends unknown[]>(...args: T)
 * 2. Parameters<T> 는 T라는 함수의 매개변수 타입 튜플
 *   ReturnType<T> 는 T라는 함수의 반환 타입
 * 
 * 3. 재귀적으로 커링된 함수를 생성하며, 각 단계마다:
 *    - 빈 호출() 인 경우 - T extends [] : 다시 Curry를 반환하여 체이닝으로 확인
 *    - 인자가 있는 경우 - Parameters<F> extends [...T, ...infer Rest] : 전달된 인자 T가 원본 함수의 파라미터의 앞부분과 일치하는지 확인
 *    - Rest가 비었으면 최종 R 반환 / 파라미터가 남았으면 새로운 Curry함수 반환
 */

/**
 * DynamicParamsCurrying: 일반 함수를 동적 커링 함수로 변환하는 함수
 * 1. (...args: any[]) => any 로 어떤 인자든 받을 수 있고 어떤 값이든 반환할 수 있는 함수타입임을 제약 (즉, F는 함수타입)
 * 2. function인 DynamicParamsCurrying을 DynamicParamsCurrying안에서 재귀로 부를 수 없음
 *   하지만, type은 재귀가 가능 -> 간접적으로 재귀를 시도
 * 3. Parameters와 ReturnType 유틸리티 타입을 활용하여 함수의 시그니처 분석
 */
