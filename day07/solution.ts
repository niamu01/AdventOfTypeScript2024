// const 제약 조건을 추가하여 타입 추론을 최대한 narrow하게 하도록 변경
const createRoute = <
  const Route extends string[]
>(
  author: string,
  route: Route
) => ({
  author,
  route,
  createdAt: Date.now(),
});
