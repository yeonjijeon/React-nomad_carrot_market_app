import { NextApiRequest, NextApiResponse } from 'next'
import client from '../../libs/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // user 테이블
  await client.user.create({
    data: {
      name: 'hi',
      email: 'hi',
    },
  })

  res.json({
    ok: true,
  })
}
