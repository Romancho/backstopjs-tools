const mobile_ranges = {
    "label": "mobile",
    "width": 300,
    "height": 480
};

const tablet_ranges = {
    "label": "tablet",
    "width": 700,
    "height": 1024
};

const ipad_ranges = {
    "label": "ipad",
    "width": 990,
    "height": 1366
};

const desktop_ranges = {
    "label": "desktop",
    "width": 1320,
    "height": 1200
};
const ranges = [
    mobile_ranges, tablet_ranges, ipad_ranges, desktop_ranges
];

// Пока так оставил. Потом пройдемся.
const breakpoints = {
    "mobile": ranges[0],
    "tablet": ranges[1],
    "ipad": ranges[2],
    "desktop": ranges[3]
};

module.exports =  breakpoints;