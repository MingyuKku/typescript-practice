const Color = {
    Red: 'red',
    Green: 'green',
    Blue: 'blue'
} as const;



// type Red = typeof Color['Red'];
// type Green = typeof Color['Green'];
// type Blue = typeof Color['Blue'];

// type RedAndBlue = typeof Color['Red' | 'Blue']
// type RedAndBlue2 = Red | Blue;
// type RedAndBlue3 = Extract<typeof Color[keyof typeof Color], 'red' | 'blue'>
// type All = typeof Color[keyof typeof Color]


const rgb = ['red', 'green', 'blue'] as const;

type RedAndBlue = typeof rgb[0 | 2];

type RGB = typeof rgb[number]; // "red" | "green" | "blue"