import 'babel-polyfill';

import request from 'supertest';
import app from '../src/app';

describe('Basic Express Server', () => {
  it('should return 200', async () => {
    await request(app).get('/');
  });
});
