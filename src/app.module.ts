import {Module} from '@nestjs/common';
import {ConfigModule, ConfigType} from '@nestjs/config';
import {GraphQLGatewayModule} from '@nestjs/graphql';
import {AppConfig} from './app.config';

@Module({
  imports: [
    GraphQLGatewayModule.forRootAsync({
      imports: [ConfigModule.forFeature(AppConfig)],
      inject: [AppConfig.KEY],
      useFactory: async (config: ConfigType<typeof AppConfig>) => ({
        server: {},
        gateway: {
          serviceList: [
            {
              name: 'bookcover',
              url: config.endpoints.services.bookcover,
            },
            {
              name: 'readUsers',
              url: config.endpoints.services.readUsers,
            },
            {
              name: 'readContents',
              url: config.endpoints.services.readContents,
            },
            {
              name: 'readRecords',
              url: config.endpoints.services.readRecords,
            },
          ],
          serviceHealthCheck: true,
        },
      }),
    }),
  ],
})
export class AppModule {}
