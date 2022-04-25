import {
  Metric,
  MetricHistory,
  Project,
  Version,
  VersionMetrics,
} from './models';

export interface MetricHistoryGetter {
  getMetricHistory:
    (projectKey: Project['key'], metric: Metric) => Promise<MetricHistory>;
  getMetrics: (projectKey: Project['key']) => Promise<Metric[]>;
}

export interface ProjectsGetter {
  getProjects: () => Promise<Project[]>;
}

export interface VersionMetricsGetter {
  getVersionMetrics: (
    projectKey: Project['key'], version: Version, metrics: Metric[]
  ) => Promise<VersionMetrics>;
  getVersions: (projectKey: Project['key']) => Promise<Version[]>;
}
