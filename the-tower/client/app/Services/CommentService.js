import { appState } from '../AppState.js'
import { Account } from '../Models/Account.js'
import { logger } from '../Utils/Logger.js'
import { server } from './AxiosService.js'

class CommentService {
  async getComment() {
    try {
        console.log("What the fuck")
    //   const res = await server.get('/account')
    //   appState.account = new Account(res.data)
    } catch (err) {
      logger.error(err)
    }
  }
}

export const commentService = new CommentService()
