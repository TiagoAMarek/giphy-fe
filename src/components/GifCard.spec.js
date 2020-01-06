import { mount } from '@vue/test-utils';
import GifCard from './GifCard.vue';
import copyToClipboard from '@/utils/copyToClipboard';

jest.mock('@/utils/copyToClipboard');

describe('GifCard', () => {
  describe('Given that the component is mounted', () => {
    let wrapper;
    const gifData = {
      title: 'america-mg dudu GIF by SE Palmeiras',
      downsampledUrl: 'https://media2.giphy.com/media/KZe5fWBKlgzkSueFkH/200_d.webp?cid=ea837b116f2f606f6e2e0877406bb5e7c0349d545cd6cc2d&rid=200_d.webp',
      url: 'https://media2.giphy.com/media/KZe5fWBKlgzkSueFkH/giphy.gif?cid=ea837b116f2f606f6e2e0877406bb5e7c0349d545cd6cc2d&rid=giphy.gif',
    };

    describe('and props are sent properly', () => {
      beforeEach(() => {
        wrapper = mount(GifCard, {
          propsData: {
            gifData,
          },
        });
      });

      it('should set url into img src attribute', () => {
        const imgContainer = wrapper.find('.image');
        expect(imgContainer.attributes('src')).toBe(gifData.downsampledUrl);
      });

      it('should title into img alt attribute', () => {
        const imgContainer = wrapper.find('.image');
        expect(imgContainer.attributes('alt')).toBe(gifData.title);
      });
    });

    describe('and the user clicks on share button', () => {
      let shareButton;

      beforeEach(() => {
        jest.useFakeTimers();

        wrapper = mount(GifCard, {
          propsData: {
            gifData,
          },
        });

        shareButton = wrapper.find('.share-button');
      });

      it('should copy the gif url', () => {
        shareButton.trigger('click');

        expect(copyToClipboard).toHaveBeenCalledWith(gifData.url);
      });

      it('should show "link copiado!"', () => {
        shareButton.trigger('click');

        const copiedToClipboardText = wrapper.find('.copied-clipboard-text');
        expect(copiedToClipboardText.exists()).toBeTruthy();
      });

      it('should not show share button after click', () => {
        shareButton.trigger('click');

        shareButton = wrapper.find('.share-button'); // update instance
        expect(shareButton.exists()).toBeFalsy();
      });

      it('should call setTimeout once and wait 1s', () => {
        shareButton.trigger('click');

        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
      });

      it('should show share button again after 1s', () => {
        shareButton.trigger('click');
        shareButton = wrapper.find('.share-button'); // update instance

        jest.runAllTimers();

        shareButton = wrapper.find('.share-button'); // update instance
        expect(shareButton.exists()).toBeTruthy();
      });
    });
  });
});
