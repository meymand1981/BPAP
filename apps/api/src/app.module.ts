import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

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
      envFilePath: '.env',
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test')
          .default('development'),

        PORT: Joi.number().default(3000),

        APP_NAME: Joi.string().required(),

        DATABASE_URL: Joi.string().required(),

        JWT_SECRET: Joi.string().min(16).required(),

        JWT_EXPIRES_IN: Joi.string().default('1d'),
      }),
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