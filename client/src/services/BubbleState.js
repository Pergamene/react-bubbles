import BubbleService from './BubbleService';

class BubbleState {
  setColorList;
  setEditing;
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
    const response = await this.bubbleService.editColor(color);
    this.setEditing(false);
  }
}

export default new BubbleState(BubbleService);
