import { getResource, getResources } from './queries';
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

describe('getResources', () => {
  it('returns `data` object when successfully fetched', async () => {
    const data = {
      count: 2,
      next: 'http://localhost:8000/api/v1/resources/?page=2',
      previous: null,
      results: [
        {
          guid: '4e85dbb6-d519-11ea-a622-0242ac130002',
          author: '',
          title: 'gitduck',
          description: '',
          url: 'https://gitduck.com',
          referring_url: '',
          other_referring_source: '',
          user: {
            id: 229,
            username: 'aug2nd',
            first_name: 'Linda',
            last_name: 'Peng',
            is_superuser: false,
          },
          date_published: '2020-08-02T16:38:45.651676-07:00',
          created: '2020-08-02T16:38:45.652112-07:00',
          modified: '2020-08-02T16:38:45.651710-07:00',
          media_type: 'Podcast',
          paid: true,
          tags: [],
        },
        {
          guid: '12f02bb2-e2aa-11ea-a58a-0242ac130006',
          author: '',
          title: 'google',
          description: '',
          url: 'https://google.com',
          referring_url: '',
          other_referring_source: '',
          user: {
            id: 233,
            username: 'Austyn99',
            first_name: 'Jarret',
            last_name: 'Mitchell',
            is_superuser: false,
          },
          date_published: '2020-08-19T22:57:47.828418-07:00',
          created: '2020-08-19T22:57:47.831689-07:00',
          modified: '2020-08-19T22:57:47.828464-07:00',
          media_type: 'Video',
          paid: true,
          tags: [],
        },
      ],
    };

    axios.get.mockImplementationOnce(() => Promise.resolve({ data }));

    await expect(getResources('')).resolves.toEqual(data);
  });
});
it('returns the appropriate result when gitduck is searched', async () => {
  const data = {
    count: 1,
    next: 'http://localhost:8000/api/v1/resources/?page=2',
    previous: null,
    results: [
      {
        guid: '4e85dbb6-d519-11ea-a622-0242ac130002',
        author: '',
        title: 'gitduck',
        description: '',
        url: 'https://gitduck.com',
        referring_url: '',
        other_referring_source: '',
        user: {
          id: 229,
          username: 'aug2nd',
          first_name: 'Linda',
          last_name: 'Peng',
          is_superuser: false,
        },
        date_published: '2020-08-02T16:38:45.651676-07:00',
        created: '2020-08-02T16:38:45.652112-07:00',
        modified: '2020-08-02T16:38:45.651710-07:00',
        media_type: 'Podcast',
        paid: true,
        tags: [],
      },
    ],
  };

  axios.get.mockImplementationOnce(() => Promise.resolve({ data }));
  await expect(getResources('gitduck')).resolves.toEqual(data);
});
