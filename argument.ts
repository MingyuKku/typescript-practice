const getHomePageFeatureFlags = <T>(
    config: {
        rawConfig: {
            featureFlags: {
                homePage: T
            }
        }
    },
    override: (flags: T) => T
) => {
    return override(config.rawConfig.featureFlags.homePage)
}

const typedObjectKeys = <T extends string>(obj: Record<T, any>) => {
    return Object.keys(obj)
}



const inferItemLiteral = <T extends string | number>(t: T) => {
    return {
        output: t
    }
}

inferItemLiteral(1);
inferItemLiteral('A');

const makeStatus = <T extends string>(statuses: T[]) => {
    return statuses;
}

makeStatus(['INFO', 'ERROR']);


type GreetingType<TGreeting> = TGreeting extends 'goodbye' ? 'hello' : 'goodbye';

