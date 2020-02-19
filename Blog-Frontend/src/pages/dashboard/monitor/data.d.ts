export interface TagType {
  name: string;
  value: string;
  type: string;
}

export interface Monitor {
    
}

export interface NetWork {
  load: Load;
  down: number;
  downTotal: number;
  version: string;
  up: number;
  upTotal: number;
  upPackets: number;
  downPackets: number;
  mem: Memory;
  disk: Disk[];
  cpu: any[];
}
/**
 * This is come from the Api(http://3.16.124.251:8888/system?action=GetSystemTotal)
 */
export interface SystemTotal {
  cpuRealUsed: number;
  memTotal: number;
  isport: boolean;
  system: string;
  memRealUsed: number;
  cpuNum: number;
  memFree: number;
  version: string;
  time: string;
  memCached: number;
  memBuffers: number;
  isuser: number;
}


/**
 * It is come from the  bt.cn 's api.
 * It is one of the object in the network
 * 
 *  宝塔面板中关于负载的描述
 */
export interface Load {
  max: number; 
  safe: number; 
  one: number; 
  five: number; 
  limit: number; 
  fifteen: number; 
}

/**
 * This is for recording the Memory
 */
export interface Memory {
  memFree: number;
  memTotal: number;
  memCached: number;
  memBuffers: number;
  memRealUsed: number;
}

/**
 *  Disk information in the Api(ttp://3.16.124.251:8888/system?action=GetNetWork)
 */
export interface Disk {
  path: string;
  size: string[];
  type: string;
  inodes: string[];
  filesystem: string;
}
// [1.0, 1, [1.3], 'Intel(R) Xeon(R) CPU E5-2676 v3 @ 2.40GHz * 1', 1, 1],
export interface Cpu {
  used: number;
  core: number;
  uselist: number[];
  name: string;
  Physicalcpu: number;
  thread: number;
}




