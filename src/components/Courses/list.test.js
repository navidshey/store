import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import List from './../Courses/List';
import Tutorials from './../Tutorials/index';
import { Pagination } from './../Page';

jest.mock('./../Tutorials/index', () => {
  return function DummyTutorials (props) {
    return (
      <>
        <div data-testid="tutorials-length">{props.list.data.length}</div>
        <div data-testid="tutorials-first-id">{props.list.data[0].id}</div>
      </>
    );
  };
});
jest.mock('./../Page', () => {
  return <div>Pagination</div>;
});

let container = null;
let data = {};
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
  data = {
    list: {
      data: [
        {
          id: 0,
          imgLink: 'http://lorempixel.com/200/200/people',
          title: 'Global Functionality Architect',
          shortDesc: 'National',
          desc: 'Regional',
          tutor: 'Forward Implementation Planner',
          lessonNumber: 1,
          duration: 1,
          link: './tutorial'
        },
        {
          id: 1,
          imgLink: 'http://lorempixel.com/200/200/people',
          title: 'Central Program Facilitator',
          shortDesc: 'District',
          desc: 'Dynamic',
          tutor: 'Chief Tactics Representative',
          lessonNumber: 1,
          duration: 1,
          link: './tutorial'
        },
        {
          id: 2,
          imgLink: 'http://lorempixel.com/200/200/people',
          title: 'Dynamic Optimization Associate',
          shortDesc: 'Human',
          desc: 'Corporate',
          tutor: 'Corporate Intranet Producer',
          lessonNumber: 1,
          duration: 0,
          link: './tutorial'
        },
        {
          id: 3,
          imgLink: 'http://lorempixel.com/200/200/people',
          title: 'Dynamic Data Liaison',
          shortDesc: 'Senior',
          desc: 'Regional',
          tutor: 'Dynamic Web Developer',
          lessonNumber: 1,
          duration: 1,
          link: './tutorial'
        },
        {
          id: 4,
          imgLink: 'http://lorempixel.com/200/200/people',
          title: 'Customer Accountability Officer',
          shortDesc: 'Principal',
          desc: 'Human',
          tutor: 'International Program Representative',
          lessonNumber: 1,
          duration: 1,
          link: './tutorial'
        },
        {
          id: 5,
          imgLink: 'http://lorempixel.com/200/200/people',
          title: 'Direct Division Technician',
          shortDesc: 'National',
          desc: 'Direct',
          tutor: 'Future Accountability Specialist',
          lessonNumber: 0,
          duration: 1,
          link: './tutorial'
        },
        {
          id: 6,
          imgLink: 'http://lorempixel.com/200/200/people',
          title: 'Customer Integration Strategist',
          shortDesc: 'Senior',
          desc: 'Future',
          tutor: 'District Metrics Liaison',
          lessonNumber: 0,
          duration: 0,
          link: './tutorial'
        },
        {
          id: 7,
          imgLink: 'http://lorempixel.com/200/200/people',
          title: 'Future Accounts Facilitator',
          shortDesc: 'Internal',
          desc: 'Lead',
          tutor: 'Global Functionality Strategist',
          lessonNumber: 0,
          duration: 1,
          link: './tutorial'
        },
        {
          id: 8,
          imgLink: 'http://lorempixel.com/200/200/people',
          title: 'Human Paradigm Associate',
          shortDesc: 'Forward',
          desc: 'Lead',
          tutor: 'Lead Solutions Designer',
          lessonNumber: 1,
          duration: 1,
          link: './tutorial'
        },
        {
          id: 9,
          imgLink: 'http://lorempixel.com/200/200/people',
          title: 'Global Tactics Specialist',
          shortDesc: 'Senior',
          desc: 'Customer',
          tutor: 'International Markets Supervisor',
          lessonNumber: 1,
          duration: 0,
          link: './tutorial'
        }
      ],
      total: 120,
      from: 1
    }
  };
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('list should get data', () => {
  jest.spyOn(List, 'getList').mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(data)
    })
  );

  // global.getList = jest.fn().mockImplementation(() => {
  //   Promise.resolve({
  //     json: () => Promise.resolve(data)
  //   });
  // });

  act(() => {
    render(
      <BrowserRouter>
        <List />
      </BrowserRouter>,
      container
    );
  });

  expect(
    container.querySelector("[data-testid='tutorials-length']").textContent
  ).toEqual('10');
  expect(
    container.querySelector("[data-testid='tutorials-first-id']").textContent
  ).toEqual('0');

  global.fetch.mockRestore();
});
