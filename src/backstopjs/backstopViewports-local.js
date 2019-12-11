const mobile_ranges = {
    "label": "mobile",
    "width": 300,
    "height": 480
};

const smartphone_ranges = {
    "label": "smartphone",
    "width": 414,
    "height": 736
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
    mobile_ranges, smartphone_ranges, tablet_ranges, ipad_ranges, desktop_ranges
];

// Пока так оставил. Потом пройдемся.
const breakpoints = {
    "mobile": ranges[0],
    "smartphone": ranges[1],
    "tablet": ranges[2],
    "ipad": ranges[3],
    "desktop": ranges[4]
};

module.exports =  breakpoints;