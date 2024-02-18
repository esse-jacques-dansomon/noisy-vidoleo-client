import { Injectable } from '@angular/core';
// import { MonitoringService } from '../global/monitoring.service';
@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor() // private readonly monitoringService: MonitoringService
  {}

  error(message: string, ...details: any[]): void {
    console.error(message, ...details);
  }

  warning(message: string, ...details: any[]): void {
    console.warn(message, ...details);
  }

  info(message: string, ...details: any[]): void {
    console.info(message, ...details);
  }

  captureException(exception: any) {
    if (!exception) {
      this.warning('Cannot capture empty exception.');
      return;
    }

    try {
      // this.monitoringService.logException(exception);
      this.info(`Captured exception:`, exception);
    } catch (error) {
      this.error('Failed to capture exception.', exception, error);
    }
  }
}
