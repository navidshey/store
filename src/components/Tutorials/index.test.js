import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import Tutorials from './index';

let container = null;
let list = null;
const columnNumbers = 3;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
  list = [
    {
      imgLink: '../../images/popular/1.jpg',
      duration: '3:15h',
      title: 'How to become an UX Designer',
      shortDesc: '12 LESSONS',
      desc:
        'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.',
      link: '/tutorial'
    },
    {
      imgLink: '../../images/popular/2.jpg',
      duration: '3:15h',
      title: 'How to become an UX Designer',
      shortDesc: '12 LESSONS',
      desc:
        'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.',
      link: '/tutorial'
    },
    {
      imgLink: '../../images/popular/3.jpg',
      duration: '3:15h',
      title: 'How to become an UX Designer',
      shortDesc: '12 LESSONS',
      desc:
        'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.',
      link: '/tutorial'
    }
  ];
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
        <Tutorials props={list} columnNumbers={columnNumbers} />
      </BrowserRouter>,
      container
    );
  });

  // expect(container.querySelector('Box')).toHaveLength(12);
});
