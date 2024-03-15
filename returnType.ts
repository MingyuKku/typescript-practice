const myFuc = () => {
    return '헬로'
}

type MyFuc = typeof myFuc;
type MyFucReturn = ReturnType<typeof myFuc>;


const func = (
    foo: string,
    obj: {
        bar: number;
        bas: boolean;
    }
) => {

}

type MyFucParam = Parameters<typeof func>;

const dsd: MyFucParam = [
    'foo',
    {
        bar: 1,
        bas: false
    }
]