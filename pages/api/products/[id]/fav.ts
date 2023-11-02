import { NextApiRequest, NextApiResponse } from 'next'
import withHandler, { ResponseType } from '@libs/server/withHandler'
import client from '@libs/server/client'
import { withApiSession } from '@libs/server/withSession'

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    query: { id },
    session: { user },
  } = req

  const aleradyExists = await client.fav.findFirst({
    where: {
      productId: +id.toString(),
      userId: user?.id,
    },
  })

  if (aleradyExists) {
    // delete => unique 필드에서만 가능
    await client.fav.delete({
      where: {
        id: aleradyExists.id,
      },
    })
  } else {
    await client.fav.create({
      data: {
        user: {
          connect: {
            id: user?.id,
          },
        },
        product: {
          connect: {
            id: +id.toString(),
          },
        },
      },
    })
  }

  res.json({
    ok: true,
  })
}

export default withApiSession(
  withHandler({
    methods: ['POST'],
    handler,
  })
)
