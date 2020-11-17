interface IToastContextData {
  showToast(data: Omit<IToastMessage, 'id'>): void;
  hideToast(id: string): void;
}
interface IToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

export type { IToastContextData, IToastMessage };
