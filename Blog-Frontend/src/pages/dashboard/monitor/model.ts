import { AnyAction, Reducer } from 'redux';

import { EffectsCommandMap } from 'dva';
import { NetWork, SystemTotal } from './data.d';
// import { querySystemInfo, queryServerNet} from '../../../services/dashboard';
import { querySystemInfo, queryServerNet }  from './service'

export interface StateType {
  netWork?: NetWork;
  systemTotal?: SystemTotal;
}

export type Effect = (
  action: AnyAction,
  effects: EffectsCommandMap & { select: <T>(func: (state: StateType) => T) => T },
) => void;

export interface ModelType {
  namespace: string;
  state: StateType;
  effects: {
    fetchNets: Effect;
    fecthSystemInfo: Effect;
  };
  reducers: {
    saveSystemInfo: Reducer<StateType>;
    saveNets: Reducer<StateType>;
    initialstate: Reducer<StateType>;
  };
}
 const initialstate = {
   network: { "load": { "max": 2, "safe": 1.5, "one": 0.0, "five": 0.0, "limit": 2, "fifteen": 0.0 }, "down": 5.03, "downTotal": 205594362, "version": "7.1.0", "mem": { "memFree": 146, "memTotal": 983, "memCached": 162, "memBuffers": 13, "memRealUsed": 662 }, "up": 4.13, "upTotal": 100867537, "upPackets": 376824, "disk": [{ "path": "/", "size": ["7.7G", "4.7G", "3.1G", "61%"], "type": "ext4", "inodes": ["122880", "296", "122584", "1%"], "filesystem": "/dev/xvda1" }], "downPackets": 507642, "cpu": [0.0, 1, [0.8], "Intel(R) Xeon(R) CPU E5-2676 v3 @ 2.40GHz * 1", 1, 1] },
    systemTotal:undefined,
 };
const Model: ModelType = {
  namespace: 'dashboardAndmonitor',

  state: initialstate,

  effects: {
    /**
     * fecth the system information from baota.cn
     * @param _
     * @param param1
     */
    *fecthSystemInfo(_, { call, put }) {
      const response = yield call(querySystemInfo);
      yield put({
        type: 'saveSystemInfo',
        payload: response,
      });
    },

    *fetchNets(_, { call, put }) {
      const response = yield call(queryServerNet);
      console.log(response);
      yield put({
        type: 'saveNets',
        payload: response,
      });
    },
  },

  reducers: {
    saveSystemInfo(state, action) {
      return {
        ...state,
        systemTotal: action.payload,
      };
    },

    saveNets(state, action) {
      return {
        ...state,
        network: action.payload,
      };
    },

    initialstate() {
      return initialstate;
    },
  },
};

export default Model;
