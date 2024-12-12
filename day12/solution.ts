type ParseInt<T extends string> 
	= T extends `${infer N extends number}` ? N : never;

type NaughtyOrNice<S extends string> = 
  S extends `${string}${infer R}`
    ? R extends ''
      ? 'nice'
      : NaughtyOrNice<R> extends 'nice'
        ? 'naughty'
        : 'nice'
    : 'naughty';

type FormatNames<T extends [string, string, string][]> 
	= {[K in keyof T]: {
		name: T[K][0], 
		count: ParseInt<T[K][2]>, 
		rating: NaughtyOrNice<T[K][0]>,
	} }& {length: T['length']}

/**
 * NaughtyOrNice : 문자열의 길이 홀/짝 구분
 * 1. 문자열 첫 글자를 제외한 나머지 R을 추출
 * 2. R이 빈 문자열이면 1글자 이므로 nice 반환
 * 3. 2글자 이상이라면 재귀 수행
 */

/**
 * FormatNames : 배열 내 요소를 포맷팅
 *   ["Liam", "M", "20802"]
 *   ⬇️
 *   {name: 'Liam',
 *   count: 20802,
 *   rating: 'naughty'}
 */
