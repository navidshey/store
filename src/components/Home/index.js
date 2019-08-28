import React from 'react'
import ReactDOM from 'react-dom';
import Main from './Main'
import general from '../../utils/general'
import HeaderText from '../Header/HeaderText'
import HeaderImage from '../Header/HeaderImage'


class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        general.removeClassFromElement('body', 'page');
        general.addClassToElement('body', 'homepage');
        ReactDOM.render(<HeaderText></HeaderText>, document.getElementById('slider-text'));
        ReactDOM.render(<HeaderImage></HeaderImage>, document.getElementById('slider-images'));
    }

    render() {
        return (

            <Main></Main>

        );
    }
}

export default Home;