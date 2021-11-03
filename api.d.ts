import { Metric, MetricHistory, VersionMetrics } from './models';

export interface MetricHistoryApi {
  getMetricHistory:
    (projectId: string, metricKey: string) => Promise<MetricHistory>;
  getMetrics: (projectId: string) => Promise<Metric[]>;
  getProjectIds: () => Promise<string[]>;
}

export interface VersionMetricsApi {
  getVersionMetrics: (
    projectId: string, version: string, metrics: Metric[]
  ) => Promise<VersionMetrics>;
  getVersions: (projectId: string) => Promise<string[]>;
}
