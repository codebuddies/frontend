import React from 'react';
import userEvent from '@testing-library/user-event';
import { fireEvent, render, waitFor, screen } from '@testing-library/react';
import { BrowserRouter as Route } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Resources from './index';
import axiosMock from 'axios';
import MutationObserver from '@sheerun/mutationobserver-shim';
window.MutationObserver = MutationObserver;

jest.mock('axios');

// TODO: move mock data into its own file, test for failures, and test for successful
// search after clicking on search button
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
            guid: '69153c04-dff2-11ea-8d50-0242ac120007',
            author: 'Betty White',
            title: 'Off surface turn.',
            description:
              'Father exist fast of. Film since usually feeling early over. Both expert dog store particularly tonight property list.\nDecade special teach though team. Tree member opportunity nothing spend.',
            url: 'http://hansen.info/category/',
            referring_url: 'https://www.galvan-roach.com/register/',
            other_referring_source: 'http://schroeder-ware.biz/posts/home/',
            user: {
              id: 11,
              username: 'yudarryl',
              first_name: '',
              last_name: '',
              is_superuser: false,
            },
            date_published: '2020-08-16T11:58:02.633422-07:00',
            created: '2020-08-16T11:58:02.633764-07:00',
            modified: '2020-08-16T11:58:02.633441-07:00',
            media_type: 'Game',
            paid: true,
            tags: [
              {
                guid: '690b4776-dff2-11ea-8d50-0242ac120007',
                slug: 'difficult',
                name: 'difficult',
              },
              {
                guid: '6910e212-dff2-11ea-8d50-0242ac120007',
                slug: 'also',
                name: 'also',
              },
            ],
          },
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

    const searchElement = screen.getByRole('searchbox');

    await userEvent.type(searchElement, 'betty');
    expect(searchElement).toHaveAttribute('value', 'betty');

    fireEvent.keyDown(searchElement, { key: 'Enter', code: 'Enter' });
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
  });
});
