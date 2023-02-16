// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    /*db.sequelize.authenticate().then(() => {
      db.sequelize.model('users').findAll().then(console.log)
    });*/

    //console.log('ERROROR GELIR MI?2121')

    /*
    connection.sync().then(() => {
      console.log('SYNCED?')
      User.findAll().then(console.log)
    })*/

    //const userRepo = sequelize.getRepository(User)
    //const a = await userRepo.findAll<User>()
    //console.log('!!!FROMA!!!!', a)

    /*a.forEach((user) => {
      //console.log('USER', user)
      console.log('USER', user.dataValues as User)
    })*/

    /*const user = await prisma.writer.create(
      {
        data: {
          name: 'Alice',
          email: 'alice@prisma.io' + new Date(),
          posts: {
            create: {
              title: 'HELLO WOOROROL'
            }
          }
        }
      }
    )

    const post = await prisma.post.create(
      {
        data: {
          title: 'HELLO NEW aut 8',
          authorId: 8
        }
      }
    )

    console.log('USER', user)
    console.log('pOST', post)*/
    //return res.status(200).json({message: 'SUCCESS from seq' + JSON.stringify(user)})
    return res.status(200).json({ message: 'SUCCESS from seq' });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: 'Unable to connect to the database:' });
  }
}
