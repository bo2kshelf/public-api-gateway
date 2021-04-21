import {registerAs} from '@nestjs/config';

export const AppConfig = registerAs('app', () => ({
  endpoints: {
    services: {
      bookcover: process.env.BOOKCOVER_SERVICE_URL!,
      usersRead: process.env.USERS_READ_SERVICE_URL!,
      neo4jReadRecords: process.env.NEO4J_READ_RECORDS_SERVICE_URL!,
      neo4jReadContents: process.env.NEO4J_READ_CONTENTS_SERVICE_URL!,
    },
  },
}));
