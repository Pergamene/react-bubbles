import BubbleService from './BubbleService';

class BubbleState {
  setColorList;
  setEditing;
  setDeleting;
  setAdded;
  bubbleService;

  constructor(bubbleService) {
    this.bubbleService = bubbleService;
  }

  async bubbleLogin(credentials) {
    const response = await this.bubbleService.bubbleLogin(credentials);
    if (response.status === 200) {
      localStorage.setItem('token', JSON.stringify(response.data.payload));
      return true;
    }
    return false;
  }

  async getColors() {
    const response = await this.bubbleService.getColors();
    this.setColorList(response.data);
  }

  async editColor(color) {
    await this.bubbleService.editColor(color);
    this.setEditing(false);
  }

  async deleteColor(id) {
    await this.bubbleService.deleteColor(id);
    this.setDeleting(false);
  }

  async addColor(color) {
    await this.bubbleService.addColor(color);
    this.setAdded(false);
  }
}

export default new BubbleState(BubbleService);
