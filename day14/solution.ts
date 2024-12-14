type PerfReview<T> 
  = T extends AsyncGenerator<infer U, unknown, unknown> ? U : never;

/**
 * AsyncGenerator<T, TReturn, TNext>
 * return은 존재하지 않아 void, unknown, any
 * next는 존재하지 않으므로 상관x
 */
