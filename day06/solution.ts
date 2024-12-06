// 제네릭 타입 <Route>에 extends number | string 제약 조건을 추가하여 타입을 제한
const createRoute = <Route extends number | string>(author: string, route: Route) => {
  console.log(`[createRoute] route created by ${author} at ${Date.now()}`);
  return route
}
