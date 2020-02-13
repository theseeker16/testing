import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/test', async () => {
    const res = await request(app.getHttpServer())
      .get('/test')
      .query({ status: false })
      .expect(200)
      .expect('Hello World!');
  });

  it('/test/testing', async () => {
    const res = await request(app.getHttpServer())
      .get('/test')
      .query({ status: false })
      .expect(200)
      .expect('Hello World!');
  });
});
