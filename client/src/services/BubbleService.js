import axios from 'axios';

class BubbleService {
  async bubbleLogin(credentials) {
    const response = await this._createBaseRequest().post('api/login', credentials);
    return response;
  }

  async getColors() {
    const response = await this._createBaseRequest().get('api/colors');
    return response;
  }

  async editColor(color) {
    const response = await this._createBaseRequest().put(`api/colors/${color.id}`, color);
    return response;
  }

  async deleteColor(id) {
    const response = await this._createBaseRequest().delete(`api/colors/${id}`);
    return response;
  }

  _createBaseRequest() {
    const token = JSON.parse(localStorage.getItem('token'));
    return axios.create({
      baseURL: 'http://localhost:5000',
      headers: {
        Authorization: token,
      },
    });
  }
}

export default new BubbleService();
