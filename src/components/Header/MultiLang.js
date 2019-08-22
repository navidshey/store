import React from 'react'
import { Link } from 'react-router-dom'

const MultiLang = ({langList}) =>{
return(
    <ul className="pull-right lang">
		<li key={langList[0].link} className="selected">
            <Link to={langList[0].link}>{langList[0].title}</Link>
            </li>
        {
        langList.map(lang => {
            return (
                <li key={lang.link}><Link to={lang.link}>{lang.title}</Link></li>
            )
        })
    }
	</ul>
);
}

export default MultiLang