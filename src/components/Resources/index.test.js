import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { BrowserRouter as Route } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Resources from './index';
import axiosMock from 'axios';

jest.mock('axios');

describe('Resources', () => {
  test('renders correctly with resources', async () => {
    const url = '/api/v1/resources';

    axiosMock.get.mockResolvedValueOnce({
      data: {
        count: 1,
        next: 'http://localhost:8000/api/v1/resources/?page=2',
        previous: null,
        results: [
          {
            guid: '768fc52a-8381-11ea-8994-0242ac120007',
            author: 'James Jones',
            title: 'Here garden school full.',
            description:
              'Story indeed ten you west in. North staff rock democratic add nation.\nBetter seem law lawyer anyone professor. More minute well address. Doctor tell environment red week traditional.',
            url: 'https://www.jones.com/explore/explore/app/login/',
            referring_url: 'http://www.gibson.biz/register/',
            other_referring_source: 'https://weiss-adkins.com/',
            user: {
              id: 161,
              username: 'olsonemily',
              first_name: '',
              last_name: '',
              is_superuser: false,
            },
            date_published: '2020-04-20T20:37:45.139272-07:00',
            created: '2020-04-20T20:37:45.139518-07:00',
            modified: '2020-04-20T20:37:45.139298-07:00',
            media_type: 'Game',
            paid: true,
            tags: [
              {
                guid: '76878a54-8381-11ea-8994-0242ac120007',
                slug: 'place',
                name: 'place',
              },
              {
                guid: '768ce076-8381-11ea-8994-0242ac120007',
                slug: 'fill',
                name: 'fill',
              },
            ],
          },
        ],
      },
    });

    render(
      <Route path="/resources">
        <Resources getResourcesUrl={url} />
      </Route>
    );

    await waitFor(() => screen.getByText('Resources'));
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(url);
    expect(screen.getByText('Resources')).toBeInTheDocument();
    expect(screen.getByText('Here garden school full.')).toBeInTheDocument();
  });
});
