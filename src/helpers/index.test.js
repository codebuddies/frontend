import * as helper from '.';

describe('forming proper query string to call search api', () => {
  test('function to append proper string', () => {
    const url = '/api/v1/resources';
    const searchValue = 'benefit';

    expect(helper.buildQueryString(url, searchValue)).toBe(
      '/api/v1/resources/?search=benefit'
    );
  });
});
