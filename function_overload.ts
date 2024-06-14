

// function returnWhatIPassIn2(t: 1): 1
// function returnWhatIPassIn2(t: 'jun'): 'jun'

// function returnWhatIPassIn2(t: unknown) {
//     return t;
// }


// 함수 시그니처들 (오버로드 목록)
function add(a: number, b: number): number;
function add(a: string, b: string): string;

// 실제 함수 구현
function add(a: any, b: any): any {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    } else if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    throw new Error("Invalid arguments");
}

// 함수 호출 예시
const result1 = add(1, 2);         // 3
const result2 = add("Hello, ", "World!"); // "Hello, World!"
// const result3 = add(1, "World!"); // 오류: 시그니처에 맞지 않는 호출



