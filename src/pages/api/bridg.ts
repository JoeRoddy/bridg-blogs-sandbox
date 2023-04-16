import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from 'prisma/db';
import { DbRules, handleRequest } from 'bridg/app/server/request-handler';

const dbRules: DbRules = { default: true };

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  // replace with your authentication system
  const fakeAuthenticatedUid = 'test';
  const { data, status } = await handleRequest(req.body, { db: prisma, uid: fakeAuthenticatedUid, rules: dbRules });

  return res.status(status).json(data);
}
