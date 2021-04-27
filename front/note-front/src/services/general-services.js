import Axios from 'axios';
//608882029168571344f67d7e
const idNote = '608882029168571344f67d7e'
class generalService {
  async createNotes(form) {
    const url = `http://localhost:8000/notes`
    const { data } = await Axios.post(url, form);
    return data;
  }

  async updateOneNote(form, id) {
    const url = `http://localhost:8000/notes${id}`
    const { data } = await Axios.put(url, form);
    return data;
  }

  async deleteOneNote() {
    const url = `http://localhost:8000/notes${idNote}`
    const { data } = await Axios.delete(url);
    return data;
  }
}

export default new generalService();