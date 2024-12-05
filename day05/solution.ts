// 제네릭 타입 T를 사용하여 타입 명시
const createRoute = <T>(author: string, route: T) => {
  console.log(`[createRoute] route created by ${author} at ${Date.now()}`);
  return route
}
