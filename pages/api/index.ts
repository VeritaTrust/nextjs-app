// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import User from '@server/database/models/User'
import sequelize from "@server/database/models/conn";

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    /*db.sequelize.authenticate().then(() => {
      db.sequelize.model('users').findAll().then(console.log)
    });*/


    console.log('ERROROR GELIR MI?2121')


    /*
    connection.sync().then(() => {
      console.log('SYNCED?')
      User.findAll().then(console.log)
    })*/

    const userRepo = sequelize.getRepository(User)
    const a = await userRepo.findAll<User>()
    //console.log('!!!FROMA!!!!', a)

    a.forEach((user) => {
      //console.log('USER', user)
      console.log('USER', user.dataValues as User)
    })


  } catch (error) {
    console.log(error)
    return res.status(400).json({message: "Unable to connect to the database:"})
  }
  res.status(200).json({message: 'SUCCESS from seq'})
}
