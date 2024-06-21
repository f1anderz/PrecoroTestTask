import axios from 'axios'

export default {
  async getData() {
    return await axios.get('https://precoro-vuejs-test-task-api.avramch.workers.dev/data');
  },
  async patchData(data: object) {
    return await axios.patch('https://precoro-vuejs-test-task-api.avramch.workers.dev/update', { ...data })
  }
}