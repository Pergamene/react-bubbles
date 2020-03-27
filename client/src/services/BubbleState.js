import BubbleService from './BubbleService';

class BubbleState {

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
}

export default new BubbleState(BubbleService);
