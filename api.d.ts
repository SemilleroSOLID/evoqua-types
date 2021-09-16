import { Metric, MetricHistory } from './models';

export interface MetricHistoryApi {
  getMetricHistory:
    (projectId: string, metricKey: string) => Promise<MetricHistory>;
  getMetrics: (projectId: string) => Promise<Metric[]>;
  getProjectIds: () => Promise<string[]>;
}
