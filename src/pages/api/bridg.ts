import type { NextApiRequest, NextApiResponse } from 'next';
import { DbRules, handleRequest } from 'bridg/app/server/request-handler';
import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();
const rules: DbRules = { default: true };

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  // replace with your authentication system
  const fakeAuthenticatedUid = 'test';
  const { data, status } = await handleRequest(req.body, { db, uid: fakeAuthenticatedUid, rules });

  return res.status(status).json(data);
}
