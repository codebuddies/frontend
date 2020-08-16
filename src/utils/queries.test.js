import { getResource } from './queries';
import axios from 'axios';

jest.mock('axios');

describe('getResource', () => {
  it('returns `data` object when successfully fetched', async () => {
    const data = {
      title: 'Just You Wait',
      url: 'www.manythingstodo.com',
      author: 'Alexander Hamilton',
      media_type: 'song',
      description: '3 hour epic ballad',
      user: 'harrypotter321',
      date_published: '10-11-2020',
    };

    axios.get.mockImplementationOnce(() => Promise.resolve({ data }));

    await expect(getResource('resourceQuery', 'resource-url')).resolves.toEqual(
      data
    );
  });

  it('returns `error` object when unable to fetch', async () => {
    const errorMessage = 'No such resource';
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );
    await expect(
      getResource('resourceQuery', 'a-very-wrong-url')
    ).rejects.toThrow(errorMessage);
  });
});
