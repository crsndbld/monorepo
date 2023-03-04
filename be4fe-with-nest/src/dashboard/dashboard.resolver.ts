import { Query, Resolver } from '@nestjs/graphql';
import { DashboardService } from './dashboard.service';
import { Dashboard } from './models/dashboard.model';

@Resolver()
export class DashboardResolver {
  constructor(private readonly dashboardService: DashboardService) {}
  @Query(() => Dashboard)
  getDashboard(): Dashboard {
    return this.dashboardService.getDashboard();
  }
}
