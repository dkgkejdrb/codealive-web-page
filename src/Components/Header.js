import {Link} from 'react-scroll';

const HeaderBtn = ({indexList=[], idList=[], headerLinkNameList=[]}) => {
    const className = 'HeaderBtn';
    const listItems = indexList.map((number) => 
        <Link className={className} key={number.toString()} to={idList[number]} spy={true} smooth={true} style={{cursor : 'pointer'}}>
        <span>{headerLinkNameList[number]}</span>
    </Link>
    );
    return (
        <div className='Container'>
            {listItems}
        </div>
    )
}

const Header = () => {
return (
    <header>
        <Link className='Logo' to='/#home' spy={true} smooth={true} style={{cursor:'pointer'}}></Link>
            <HeaderBtn 
            indexList={[0, 1, 2, 3, 4, 5]} 
            idList={['/#intro', '/#features', '/#course', '/#project', '/#review', '/#partner']}
            headerLinkNameList={['Introduction', 'Features', 'Course', 'Project', 'Review', 'Partner']}
            />
    </header>
)
}

export { Header }