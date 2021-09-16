export interface Metric {
  key: string;
  label: string;
}

export interface MetricHistory {
  name: string;
  versions: string[];
  values: number[];
}
