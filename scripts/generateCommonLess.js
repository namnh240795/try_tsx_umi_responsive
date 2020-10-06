const fs = require('fs');

let a = [];
let start = 0;
for (let i = 0; i <= 30; i++) {
  a.push(start);
  start += 2;
}

let percents = [];
for (let i = 0; i <= 10; i++) {
  percents.push(i * 10);
}

const fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const colors = {
  red: '#E1585C',
  black: '#221F1F',
  white: '#ffffff',
  lightBrown: '#E8E0CE',
  yellow: '#F9C120',
  gray: '#828282',
  transparent: 'rgba(0, 0, 0, 0)',
};

const generate = () => {
  const marginStyles = a.map(a => {
    return `
.mt-${a}{ margin-top: ${a}px; }
.mb-${a} { margin-bottom: ${a}px; }
.ml-${a} { margin-left: ${a}px; }
.mr-${a} { margin-right: ${a}px; }
.mh-${a} { margin: 0px ${a}px; }
.mv-${a} { margin: ${a}px 0px; }
.ma-${a} { margin: ${a}px; }
    `;
  });

  const paddingStyles = a.map(a => {
    return `
.pt-${a} { padding-top: ${a}px; }
.pb-${a} { padding-bottom: ${a}px; }
.pl-${a} { padding-left: ${a}px; }
.pr-${a} { padding-right: ${a}px; }
.ph-${a} { padding: 0px ${a}px; }
.pv-${a} { padding: ${a}px 0px; }
.pa-${a} { padding: ${a}px; }
    `;
  });

  const commonColors = Object.keys(colors).map(key => {
    const color = colors[key];
    return `
.bg-${key} { background-color: ${color}; }
.c-${key} { color: ${color}; }
.border-c-${key} { border-color: ${color}; }
        `;
  });

  const widthPercents = percents.map(p => `.w-${p}-p { width: ${p}%; }`);
  const heightPercents = percents.map(p => `.h-${p}-p { height: ${p}%; }`);

  const fws = fontWeights.map(p => `.fw-${p} { font-weight: ${p}; }`);

  const commonStyles = [
    ...marginStyles,
    ...paddingStyles,
    ...widthPercents,
    ...heightPercents,
    ...commonColors,
    // ...commonBorders,
    ...fws,
    '.pointer { cursor: pointer; } ',
    '.t-al-center { text-align: center; } ',
    '.t-al-left { text-align: left; } ',
    '.t-al-right { text-align: right; } ',
    '.t-al-justify { text-align: justify; } ',
    '.t-al-initial { text-align: initial; } ',
    '.t-al-inherit { text-align: inherit; } ',
    '.h-auto { height: auto; }',
    '.w-auto { width: auto; }',
  ];

  fs.writeFileSync('src/less/common.less', commonStyles.join('\n'), 'utf8');
};

generate();
