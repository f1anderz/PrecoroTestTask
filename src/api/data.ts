import axios from 'axios'
import { patchData } from '../common/types';

const base_url = 'https://precoro-vuejs-test-task-api.avramch.workers.dev';

export default {
  async getData() {
    return await axios.get(base_url + '/data');
  },
  async patchData(data: patchData) {
    return await axios.patch(base_url + '/update', { ...data })
  }
}