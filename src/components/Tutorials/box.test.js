import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

import Box from './Box';

let container = null;
let itemData = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
  itemData = {
    id: 1,
    imgLink: 'imgLink',
    title: 'title',
    shortDesc: 'shortDesc',
    desc: 'desc',
    tutor: 'tutor',
    lessonNumber: 'lessonNumber',
    duration: '1',
    link: 'link'
  };
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('should display item data', () => {
  act(() => {
    render(
      <BrowserRouter>
        <Box item={itemData} index={1} colStyle="col-xs-3" />
      </BrowserRouter>,
      container
    );
  });
  expect(container.querySelector('img').getAttribute('src')).toEqual('imgLink');
  expect(container.querySelector('h6').textContent).toBe('title');
  expect(container.querySelector('.lessons').textContent).toBe('shortDesc');
  expect(container.querySelector('.duration').textContent).toBe('1');
  expect(container.querySelector('a').getAttribute('href')).toBe('/detail/1');
  expect(container.querySelector('.col-xs-3')).toBeTruthy();
});
