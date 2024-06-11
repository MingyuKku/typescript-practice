var returnWhatIPassIn = function (t) {
    return t;
};
returnWhatIPassIn('하하');
var Component = /** @class */ (function () {
    function Component(props) {
        var _this = this;
        this.getProps = function () { return _this.props; };
        this.props = props;
    }
    return Component;
}());
var component = new Component(['a', 'b', 'c']); // Component<string[]>
var component2 = new Component({
    a: 'a',
    b: 'b',
    c: 'c'
});
var objj = {
    content: ['하하'],
    createAt: '2024-06-09',
    id: 23
};
var component3 = new Component(objj); // Component<Obj>
var testAry = ['a', 'b'];
var data = [
    {
        name: '사라',
        age: 33,
        gender: 2,
    },
    {
        name: '길동',
        age: 32,
        gender: 1,
    },
    {
        name: '호호',
        age: 32,
        gender: 1,
    },
    {
        name: '재수',
        age: 24,
        gender: 1,
    },
];
var kk = 'age';
var age32 = data.reduce(function (prev, cur) {
    var key = cur[kk];
    if (!prev[key]) {
        prev[key] = [];
    }
    prev[key].push(cur);
    return prev;
}, {});
var items = [
    { name: 'Apple', price: 1.2 },
    { name: 'Banana', price: 0.8 },
    { name: 'Orange', price: 1.5 }
];
var sum = items.reduce(function (prev, cur) {
    return prev + cur.price;
    // console.log('prev', prev)
    // console.log('cur', cur)
}, 0);
var categories = [
    { id: 1, name: 'Electronics', parentId: null },
    { id: 2, name: 'Laptops', parentId: 1 },
    { id: 3, name: 'Smartphones', parentId: 1 },
    { id: 4, name: 'Clothing', parentId: null },
    { id: 5, name: 'Men', parentId: 4 },
    { id: 6, name: 'Women', parentId: 4 }
];
var numbers = [1, 2, 2, 3, 4, 4, 5];
var uniqueNumbers = numbers.reduce(function (prev, cur) {
    if (!prev.includes(cur))
        prev.push(cur);
    return prev;
}, []);
// console.log(uniqueNumbers);
var nestedArray = [1, [2, [3, 4], 5], 6, [7, [[[8]]]]];
var flattenArray = function (arr) {
    var result = arr.reduce(function (acc, cur) {
        if (Array.isArray(cur)) {
            // cur의 값이 배열이 아닐때까지 재귀함수를 호출하게 됨
            // flattenArray의 실행 결과로 단일 배열이 반환되기에 이것을 스프레드 연산자로 기존 acc값에 푸쉬
            acc.push.apply(acc, flattenArray(cur));
            // acc = acc.concat(flattenArray(cur)); // 이렇게 해도 동일한 결과가 출력!
        }
        else {
            // console.log('순수', cur)
            acc.push(cur);
        }
        return acc;
    }, []);
    return result;
};
var flatArray = flattenArray(nestedArray);
