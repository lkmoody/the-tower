import { Auth0Provider } from '@bcwdev/auth0provider'
import BaseController from '../utils/BaseController'

export class CommentController extends BaseController {
  constructor() {
    super('comment')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getComment)
  }

  async getComment(req, res, next) {
    try {
      console.log("Is it working or what")
    } catch (error) {
      next(error)
    }
  }
}
