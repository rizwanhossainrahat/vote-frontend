// Participant / Draw types
export interface Participant {
  _id: string;
  name: string;
  phone: string;
  createdAt?: string;
}

export interface Winner {
  name: string;
  phone: string;
}

export interface DrawWinnerResponse {
  success: boolean;
  winner: Winner;
}

export interface DrawWinnerErrorResponse {
  success: false;
  message: string;
}

// Reward campaign form types
export interface RewardFormValues {
  name: string;
  phone: string;
  screenshot: FileList;
}

// Contact form types
export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

// API response wrapper
export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
}
