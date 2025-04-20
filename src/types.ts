export interface ImageGeneration {
  id: string;
  prompt: string;
  imageUrl: string;
  timestamp: number;
  parameters?: {
    width?: number;
    height?: number;
    steps?: number;
    seed?: number;
    guidance_scale?: number;
  };
}

export interface ApiResponse {
  output: string[];
  error?: string;
}