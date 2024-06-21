import axios from 'axios'

export default {
  async getUsers(searchString: string = '', page: number = 1) {
    return await axios.get(`https://precoro-vuejs-test-task-api.avramch.workers.dev/users?search=${searchString}&page=${page}`);
  }
}