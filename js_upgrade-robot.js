'use strict';

'use strict';

const robot = {
  chipVer: 9,
  serialNo: 413,
  wheels: 2,
};

const parts = [
  { gravitationSensor: true },
  { wheels: 6 },
  { chipVer: 16 },
  { ram: 1024 },
  { displays: 2 },
];

let sumSkillRob = {};

for (let i = 0; i < parts.length; i++) {
  sumSkillRob = Object.assign(robot, parts[i]);
}
console.log(sumSkillRob);