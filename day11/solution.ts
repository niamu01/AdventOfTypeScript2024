type Excuse<T> = new (data: {[key: string]: any})
	=> T extends { [K in keyof T]: infer V}
	? `${Extract<keyof T, string>}: ${Extract<V, string>}`
	: never;

/**
 * declare const Excuse0: Excuse<typeof helpingTheReindeer>
 * => Excuse0의 타입을 미리 선언
 * 
 * excuse0 = new Excuse0({ 이후 excuse0의 타입이 "helping: the reindeer" 이 되어야함
 */

/**
 * 일반적인 클래스 정의:
 * class AClass {
 *   constructor(data: string) {
 *     // ...
 *   }
 * }
 * 
 * 이 클래스의 타입:
 * type AClassType = new (data: string) => AClass;
 * 
 * 응용법:
 * new (data: {[key: string]: any}) 를 받아
 * T extends { [K in keyof T]: infer V} ? `${Extract<keyof T, string>}: ${Extract<V, string>}` : never 를 반환
 */

/**
 * const helpingTheReindeer = {
 *   helping: 'the reindeer',
 * } as const;
 * 
 * T extends => T는 다음과 같은 타입임
 * [K in keyof T] => T 타입의 키인 K : 'helping'
 * infer V => T 타입의 값인 V : 'the reindeer'
 * 
 * ${Extract<keyof T, string>} => keyof T 의 string 가져오기
 * ${Extract<V, string>} => V 의 string 가져오기
 * 
 * keyof T 와 V 중 하나라도 string이 아닌 경우 never 반환
 */