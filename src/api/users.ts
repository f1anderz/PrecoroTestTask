import axios from 'axios';

const base_url = 'https://precoro-vuejs-test-task-api.avramch.workers.dev';

export default {
  async getUsers(searchString?: string, page?: number) {
    let params = '';
    if (searchString && page) {
      params = `? search = ${searchString}& page=${page}`;
    }
    return await axios.get(base_url + '/users' + params);
  },
};
