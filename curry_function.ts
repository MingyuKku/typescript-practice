const curryFunction1 = <T, U, V>
    (t: T) => 
    (u: U) =>
    (v: V) => {
    return {
        t,
        u,
        v
    }
}

curryFunction1(1)(2)(3);
// 위 함수의 커링 인자는 다음과 같이 추론됨
// <number, unknown, unknown>


// 위 방식을 아래 방식으로 고치자
const curryFunction2 =
    <T>(t: T) => 
    <U>(u: U) =>
    <V>(v: V) => {
    return {
        t,
        u,
        v
    }
}

curryFunction2(1)(2)(3);