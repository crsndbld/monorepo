import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
  getDashboard() {
    return {
      id: 1,
      name: 'csaiki',
    };
  }
}
