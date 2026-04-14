export type ResourceType = 'reading' | 'video' | 'exercise';

export interface Resource {
  id: string;
  type: ResourceType;
  title: string;
  url: string;
  durationMinutes: number;
}

export interface Milestone {
  id: string;
  order: number;
  title: string;
  description: string;
  longDescription: string;
  resources: Resource[];
}
