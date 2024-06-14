interface Cache1<T> {
    get: (key: string) => T | undefined;
    set: (key: string, value: T) => void;
    clone: <U>(transform: (elem: T) => U) => Cache1<U>;
}

const createCache = <T>(initialCache?: Record<string, T>): Cache1<T> => {
    const cache: Record<string, T> = initialCache || {};

    return {
        get: (key: string) => cache[key],
        set: (key: string, value: T) => {
            cache[key] = value;
        },
        clone: (transform) => {
            const newCache: Record<string, any> = {};

            for (const key in cache) {
                newCache[key] = transform(cache[key]);
            }

            return createCache(newCache);
        }
    }
}


const numberCache = createCache<number>();
numberCache.set('a', 1);
numberCache.set('b', 2);

const stringCache = numberCache.clone((elem) => String(elem));
const a1 = numberCache.get('a'); // number | undefined
const a2 = stringCache.get('a'); // string | undefined