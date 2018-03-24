const fs = require('fs');
const glob = require('glob');

const base = 'app';

const template = (list) => `/* eslint-disable */
export default [
  ${list.map((file) => `require('${file.replace(base, '..')}')`).join(`,
  `)}
];
`;

const handleGlob = (err, list) => {
  fs.writeFile(`${base}/preloader/assets.js`, template(list), process.exit);
};

glob(`${base}/**/*.+(jpg|jpeg|gif|png|svg)`, handleGlob);
