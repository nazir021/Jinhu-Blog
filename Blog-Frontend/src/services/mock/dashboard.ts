import mockjs from 'mockjs';


export default {
  'GET  /api/dashboard/servernet': mockjs.mock({
    load: { max: 2, safe: 1.5, one: 0.0, five: 0.06, limit: 2, fifteen: 0.0 },
    down: 0.41,
    downTotal: 178539823,
    version: '7.1.0',
    mem: { memFree: 73, memTotal: 983, memCached: 225, memBuffers: 32, memRealUsed: 653 },
    up: 0.33,
    upTotal: 70076631,
    upPackets: 285900,
    disk: [
      {
        path: '/',
        size: ['7.7G', '4.6G', '3.1G', '60%'],
        type: 'ext4',
        inodes: ['122880', '296', '122584', '1%'],
        filesystem: '/dev/xvda1',
      },
    ],
    downPackets: 398909,
    cpu: [0.0, 1, [1.0], 'Intel(R) Xeon(R) CPU E5-2676 v3 @ 2.40GHz * 1', 1, 1],
  }),
};




