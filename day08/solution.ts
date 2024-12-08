declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MOOD_LIGHTS: 'true';
      BATH_TEMPERATURE: '327.59';
      STRAWBERRIES: 'chocolate';
    }
  }
}

export {};

/** 
 * declare global로 전역 타입 선언
 * NodeJS 네임스페이스의 ProcessEnv 인터페이스를 확장
 */