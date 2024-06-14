var getHomePageFeatureFlags = function (config, override) {
    return override(config.rawConfig.featureFlags.homePage);
};
var typedObjectKeys = function (obj) {
    return Object.keys(obj);
};
var inferItemLiteral = function (t) {
    return {
        output: t
    };
};
inferItemLiteral(1);
inferItemLiteral('A');
