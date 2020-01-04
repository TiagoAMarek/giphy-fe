import { shallowMount } from '@vue/test-utils';
import GifsList from './GifsList.vue';

const gifs = [
  {
    id: '1',
    title: 'Bla',
    url: 'https://media0.giphy.com/media/Yk1EuAp9cSK4HjIjnW/200.gif?,cid=ea837b119b07bc08c3057a71f1eb7a761a16bb5ee8424350&rid=200.gif',
  },
  {
    id: '2',
    title: 'Bla',
    url: 'https://media0.giphy.com/media/Yk1EuAp9cSK4HjIjnW/200.gif?,cid=ea837b119b07bc08c3057a71f1eb7a761a16bb5ee8424350&rid=200.gif',
  },
  {
    id: '3',
    title: 'Bla',
    url: 'https://media0.giphy.com/media/Yk1EuAp9cSK4HjIjnW/200.gif?,cid=ea837b119b07bc08c3057a71f1eb7a761a16bb5ee8424350&rid=200.gif',
  },
  {
    id: '4',
    title: 'Bla',
    url: 'https://media0.giphy.com/media/Yk1EuAp9cSK4HjIjnW/200.gif?,cid=ea837b119b07bc08c3057a71f1eb7a761a16bb5ee8424350&rid=200.gif',
  },
];

describe('GifsList', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(GifsList, {
      propsData: {
        gifs,
      },
    });
  });

  it('Should list an expected array of gifs card', () => {
    const gifsCard = wrapper.findAll('.gif-column');
    expect(gifsCard.length).toBe(gifs.length);
  });
});
