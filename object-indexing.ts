const fakeData = {
    foo: 'bar',
    bar: 123,
    baz: true,
} as const;

type TypefakeData = typeof fakeData;

type Foo = TypefakeData['foo'];
type Bar = TypefakeData['bar'];
type Baz = TypefakeData['baz'];



type Eventt = 
    | {
        type: 'click';
        event: MouseEvent;
    }
    | {
        type: 'focus';
        event: FocusEvent;
    }
    | {
        type: 'keydown';
        event: KeyboardEvent;
    };

type EventType = Eventt['event']; // MouseEvent | FocusEvent | KeyboardEvent

type EventKey = keyof Eventt // "event" | "type"
