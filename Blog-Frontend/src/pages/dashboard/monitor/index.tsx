import { Card, Col, Row, Statistic, Tooltip } from 'antd';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import React, { Component, Suspense } from 'react';

import { Dispatch } from 'redux';
import { GridContent } from '@ant-design/pro-layout';
import { connect } from 'dva';
import numeral from 'numeral';
import { InfoCircleOutlined } from '@ant-design/icons';
import moment from 'moment';
import { StateType } from './model';
import { Pie, WaterWave, Gauge, TimelineChart, ChartCard, MiniArea, yuan} from '../components/Charts';
import NumberInfo from '../components/NumberInfo'
import styles from './style.less';
import { getTimeDistance } from "../analysis/utils/utils";
import { SystemTotal, NetWork } from './data';
import PageLoading from '../components/PageLoading';
import { networkTraffic, formatBytes } from '@/utils/utils';


interface MonitorProps {
  dashboardAndmonitor:StateType;
  dispatch: Dispatch<any>;
  loading: boolean;
}

interface MonitorState {
  //  salesType: 'all' | 'online' | 'stores';
  // netWork: NetWork;
}

class Monitor extends Component<MonitorProps, MonitorState> {
  reqRef: number = 0;

  timeoutId: number = 0;

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'dashboardAndmonitor/fetchNets',
    });
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    const { dispatch } = this.props;
    dispatch({
      type: 'dashboardAndmonitor/fetchNets',
    });
    
  }

  render() {
    // const { netWork } = this.state;
    const { dashboardAndmonitor, loading } = this.props;
    // const  { network } = dashboardAndmonitor;
    const systemTotal = {
      cpuRealUsed: 3.0,
      memTotal: 983,
      isport: true,
      system: 'Ubuntu 18.04.3 LTS(Py2.7.17)',
      memRealUsed: 653,
      cpuNum: 1,
      memFree: 65,
      version: '7.1.0',
      time: '6\u5929',
      memCached: 224,
      memBuffers: 41,
      isuser: 0,
    };

    let netWork = { "load": { "max": 2, "safe": 1.5, "one": 0.0, "five": 0.0, "limit": 2, "fifteen": 0.0 }, "down": 5.03, "downTotal": 205594362, "version": "7.1.0", "mem": { "memFree": 146, "memTotal": 983, "memCached": 162, "memBuffers": 13, "memRealUsed": 662 }, "up": 4.13, "upTotal": 100867537, "upPackets": 376824, "disk": [{ "path": "/", "size": ["7.7G", "4.7G", "3.1G", "61%"], "type": "ext4", "inodes": ["122880", "296", "122584", "1%"], "filesystem": "/dev/xvda1" }], "downPackets": 507642, "cpu": [0.0, 1, [0.8], "Intel(R) Xeon(R) CPU E5-2676 v3 @ 2.40GHz * 1", 1, 1] }
 

    const memoryPercentage = Math.floor((netWork.mem.memRealUsed / netWork.mem.memTotal) * 100);
    const diskUsed = netWork.disk[0].size[3];
    const diskUsedPertentage = Number(diskUsed.replace('%', ''));
    const cpuUsed = Number(netWork.cpu[0]);
    const cpuIntroduction = netWork.cpu[3];
    const downloadTotal = formatBytes(netWork.downTotal,2);
    const uploadTotal = Number((netWork.upTotal / 1024 / 1024).toFixed(2));
    const loadUsed = netWork.load.five;
    const loadUsedNum = netWork.load.max
    const chartData = [];
    for (let i = 0; i < 20; i += 1) {
      chartData.push({
        x: new Date().getTime() + 1000 * 60 * 30 * i,
        y1: Math.floor(Math.random() * 100) + 1000,
        y2: Math.floor(Math.random() * 100) + 10,
      });
    }
    const visitData = [];
    const beginDay = new Date().getTime();
    for (let i = 0; i < 20; i += 1) {
      visitData.push({
        x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
        y: Math.floor(Math.random() * 100) + 10,
      });
    }

    return (
      <GridContent>
        <React.Fragment>
          <Row gutter={24}>
            <Col xl={6} lg={12} sm={24} xs={24} style={{ marginBottom: 24 }}>
              <Card
                loading={loading}
                title={
                  <FormattedMessage
                    id="dashboardandmonitor.monitor.load-status"
                    defaultMessage="Load Status"
                  />
                }
                bordered={false}
                className={styles.pieCard}
              >
                <Pie
                  animate={false}
                  percent={loadUsed}
                  title={
                    <FormattedMessage
                      id="dashboardandmonitor.monitor.loadPie"
                      defaultMessage="Load Status"
                    />
                  }
                  total={`${loadUsedNum}%`}
                  height={180}
                  lineWidth={2}
                />
              </Card>
            </Col>
            <Col xl={6} lg={12} sm={24} xs={24} style={{ marginBottom: 24 }}>
              <Card
                loading={loading}
                title={
                  <FormattedMessage id="dashboardandmonitor.monitor.cpu" defaultMessage="CPU" />
                }
                bordered={false}
                className={styles.pieCard}
                extra={
                  <Tooltip title={cpuIntroduction}>
                    <InfoCircleOutlined />
                  </Tooltip>
                }
              >
                <Gauge
                  title={formatMessage({
                    id: 'dashboardandmonitor.monitor.cpu',
                    defaultMessage: 'Cpu Used',
                  })}
                  height={180}
                  percent={cpuUsed}
                />
              </Card>
            </Col>
            <Col xl={6} lg={12} sm={24} xs={24} style={{ marginBottom: 24 }}>
              <Card
                loading={loading}
                title={
                  <FormattedMessage
                    id="dashboardandmonitor.monitor.disk-status"
                    defaultMessage="Disk Status"
                  />
                }
                bordered={false}
                className={styles.pieCard}
              >
                <Pie
                  animate={false}
                  color="#00bfff"
                  percent={diskUsedPertentage}
                  title={
                    <FormattedMessage
                      id="dashboardandmonitor.monitor.diskPercentage"
                      defaultMessage="Disk Used"
                    />
                  }
                  total={diskUsed}
                  height={180}
                  lineWidth={2}
                />
              </Card>
            </Col>
            <Col xl={6} lg={12} sm={24} xs={24} style={{ marginBottom: 24 }}>
              <Card
                loading={loading}
                title={
                  <FormattedMessage
                    id="dashboardandmonitor.monitor.memoryuse"
                    defaultMessage="Resource Surplus"
                  />
                }
                bodyStyle={{ textAlign: 'center', fontSize: 0 }}
                bordered={false}
              >
                <WaterWave
                  height={180}
                  title={
                    <FormattedMessage
                      id="dashboardandmonitor.monitor.memory-surplus"
                      defaultMessage="Fund Surplus"
                    />
                  }
                  percent={memoryPercentage}
                />
              </Card>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col xl={18} lg={24} sm={24} xs={24} style={{ marginBottom: 24, height: '100%' }}>
              <Card
                loading={loading}
                className={styles.offlineCard}
                bordered={false}
                title="实时流量"
              >
                <Suspense fallback={<PageLoading />}>
                  <TimelineChart
                    style={{ marginTop: 32 }}
                    height={368}
                    data={chartData}
                    titleMap={{ y1: '上传流量', y2: '下载流量' }}
                  />
                </Suspense>
              </Card>
            </Col>

            <Col xl={6} lg={12} sm={24} xs={24} style={{ marginBottom: 24 }}>
              <Card
                loading={loading}
                title={
                  <FormattedMessage
                    id="dashboardandmonitor.monitor.downtotal"
                    defaultMessage="Resource Surplus"
                  />
                }
                bodyStyle={{ textAlign: 'center', fontSize: 25 }}
                bordered={false}
                style={{ marginBottom: 15 }}
              >
                <span style={{ marginBottom: 24, marginTop: 24 }}> {downloadTotal}  </span>
              </Card>
              <Card
                loading={loading}
                title={
                  <FormattedMessage
                    id="dashboardandmonitor.monitor.upTotal"
                    defaultMessage="Total Upload"
                  />
                }
                bodyStyle={{ textAlign: 'center', fontSize: 25 }}
                bordered={false}
                style={{ marginBottom: 15 }}
              >
                <span style={{ marginBottom: 24, marginTop: 24 }}> {uploadTotal} MB </span>
              </Card>
              <Card
                loading={loading}
                title={
                  <FormattedMessage
                    id="dashboardandmonitor.monitor.server-information"
                    defaultMessage="System Information"
                  />
                }
                bodyStyle={{ textAlign: 'left' }}
                bordered={false}
                style={{ marginBottom: 24 }}
              >
                <p style={{ marginBottom: 5, fontSize: 13 }}>
                  <b>系统</b>
                </p>
                <p style={{ fontSize: 12 }}> {systemTotal.system} </p>
                <p style={{ marginBottom: 5, fontSize: 13 }}>
                  <b>运行时间</b>
                </p>
                <p style={{ fontSize: 12 }}> {systemTotal.time} </p>
              </Card>
            </Col>
          </Row>
        </React.Fragment>
      </GridContent>
    );
  }
}

export default connect(
  ({
    dashboardAndmonitor,
    loading,
  }: {
    dashboardAndmonitor: StateType;
    loading: {
      effects: { [key: string]: boolean };
    };
  }) => ({
    dashboardAndmonitor,
    loading: loading.effects['dashboardAndmonitor/fetchNets'],
  }),
)(Monitor);
