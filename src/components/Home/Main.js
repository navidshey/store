/* eslint-disable no-unused-vars */
import React from 'react';
import Features from './Features';
import Professionals from './professionals';
import PopularTutorials from './PopularTutorials';
import SignupLink from './SignupLink';
import Pricing from './Pricing';

const Main = () => {
  const tutorialsList = [
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

  const prosList = [
    {
      avatar: '../../images/avatars/1.png',
      profileImg: '../../images/avatars/profile.png',
      shortDesc: '8 VIDEOS',
      title: 'Kevin Mcfield'
    },
    {
      avatar: '../../images/avatars/2.png',
      profileImg: '../../images/avatars/profile.png',
      shortDesc: '8 VIDEOS',
      title: 'Kevin Mcfield'
    },
    {
      avatar: '../../images/avatars/3.png',
      profileImg: '../../images/avatars/profile.png',
      shortDesc: '8 VIDEOS',
      title: 'Kevin Mcfield'
    },
    {
      avatar: '../../images/avatars/4.png',
      profileImg: '../../images/avatars/profile.png',
      shortDesc: '8 VIDEOS',
      title: 'Kevin Mcfield'
    },
    {
      avatar: '../../images/avatars/5.png',
      profileImg: '../../images/avatars/profile.png',
      shortDesc: '8 VIDEOS',
      title: 'Kevin Mcfield'
    },
    {
      avatar: '../../images/avatars/6.png',
      profileImg: '../../images/avatars/profile.png',
      shortDesc: '8 VIDEOS',
      title: 'Kevin Mcfield'
    }
  ];
  return (
    <main>
      <Features></Features>

      <div className="container index-3-categories text-center">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <h3>Explore Bromine Video Platform</h3>
            <p>
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, coniam voluptua.
            </p>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-4 col-sm-6">
            <div className="category-with-bg cat1">
              <h5>Content-Management-Systems(CMS)</h5>
              <p>IT-Service for CMS like WordPress</p>
              <a href="index3.html#" className="goto">
                <i className="zmdi zmdi-long-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="category-with-bg cat2">
              <h5>User Experience / UX Design</h5>
              <p>Workshop for UX Design</p>
              <a href="index3.html#" className="goto">
                <i className="zmdi zmdi-long-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="category-with-bg cat3">
              <h5>Typography &amp; Writing</h5>
              <p>Work with InDesign</p>
              <a href="index3.html#" className="goto">
                <i className="zmdi zmdi-long-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="category-with-bg cat4">
              <h5>Digital Publication</h5>
              <p>Learn how to publish online</p>
              <a href="index3.html#" className="goto">
                <i className="zmdi zmdi-long-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="category-with-bg cat5">
              <h5>Layouts for Print Design</h5>
              <p>Illustrations for Print</p>
              <a href="index3.html#" className="goto">
                <i className="zmdi zmdi-long-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="category-with-bg cat6">
              <h5>Digital Marketing (SEO)</h5>
              <p>Tutorial to use Search Engines</p>
              <a href="index3.html#" className="goto">
                <i className="zmdi zmdi-long-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Professionals prosList={prosList}></Professionals>

      <PopularTutorials props={tutorialsList}></PopularTutorials>

      <SignupLink></SignupLink>

      <Pricing></Pricing>

      <div className="container whyus">
        <div className="row text-center">
          <div className="col-sm-12">
            <h3>Why to choose us</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <h6>More than 1000+ video tutorials in our library</h6>
            <p>
              {' '}
              Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat.
            </p>
          </div>
          <div className="col-md-4">
            <h6>Learn form our professional teachers </h6>
            <p>
              {' '}
              Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat.
            </p>
          </div>
          <div className="col-md-4">
            <h6>Become an expert in your business</h6>
            <p>
              Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
