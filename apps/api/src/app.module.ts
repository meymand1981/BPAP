import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { IdentityModule } from './modules/identity/identity.module';
import { PatientModule } from './modules/patient/patient.module';
import { PharmacyModule } from './modules/pharmacy/pharmacy.module';
import { PrescriptionModule } from './modules/prescription/prescription.module';
import { InventoryModule } from './modules/inventory/inventory.module';
import { BillingModule } from './modules/billing/billing.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    IdentityModule,
    PatientModule,
    PharmacyModule,
    PrescriptionModule,
    InventoryModule,
    BillingModule,
  ],
})
export class AppModule {}