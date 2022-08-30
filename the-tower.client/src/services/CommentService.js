import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class CommentService {
  async getComment() {
    try {
        const res = await api.get('/api/comment')
    } catch (err) {
        logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }
}

export const commentService = new CommentService()
