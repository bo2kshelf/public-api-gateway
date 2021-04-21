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
              name: 'usersRead',
              url: config.endpoints.services.usersRead,
            },
            {
              name: 'neo4jReadContents',
              url: config.endpoints.services.neo4jReadContents,
            },
            {
              name: 'neo4jReadRecords',
              url: config.endpoints.services.neo4jReadRecords,
            },
          ],
          serviceHealthCheck: true,
        },
      }),
    }),
  ],
})
export class AppModule {}
