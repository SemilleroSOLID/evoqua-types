export interface Metric {
  key: string;
  name: string;
}

export interface MetricHistory {
  metric: string;
  versions: string[];
  values: number[];
}

export interface Project {
  key: string;
  name: string;
}

export type Version = string;

export interface VersionMetrics {
  version: string;
  metrics: string[];
  values: number[];
}
