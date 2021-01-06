import logo from '../img/logo.png'

function Header() {
    function classON() {
        let i = document.querySelector('.block_nav_link');
        i.classList.toggle('classVisible');
    }

    return (
        <>
            <div className="header">
                <div className="mask">
                    <div className="container">
                        <div className="head">
                            <div className="main-logo">
                                <a href="/">
                                    <img
                                        className="img_logo"
                                        src={logo}
                                        alt="logo"
                                    />
                                </a>
                            </div>
                            <div className="nav">
                                <div className="block_nav_link">
                                    <a href="/" className="nav_link">About us</a>
                                    <a href="/" className="nav_link">Contacts</a>
                                    <a href="/" className="nav_link">Home</a>
                                    <a href="/" className="nav_link">Main</a>
                                    <a href="/" className="nav_link">Shpein</a>
                                </div>
                                <div className="nav_link_burger" onClick={classON}><div className="line"></div></div>
                            </div>
                        </div>
                        <div className="intro">
                            <div className='i1'>РЕАЛИЗУЕМ КРУПНЕЙШИЕ ПРОЕКТЫ В РОССИИ</div>
                            <div className='i2'>стадионы, газопроводы, мосты, дамбы</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="work-time">
                    <div className="work-time_block">
                        <div className="work-time_block_item1">26</div>
                        <div className="work-time_block_item2">ЛЕТ</div>
                        <div className="work-time_block_item3">на рынке</div>
                    </div>
                    <div className="work-time_block">
                        <div className="work-time_block_item1">26</div>
                        <div className="work-time_block_item2">ЛЕТ</div>
                        <div className="work-time_block_item3">на рынке</div>
                    </div>
                    <div className="work-time_block">
                        <div className="work-time_block_item1">26</div>
                        <div className="work-time_block_item2">ЛЕТ</div>
                        <div className="work-time_block_item3">на рынке</div>
                    </div>
                    <div className="work-time_block">
                        <div className="work-time_block_item1">26</div>
                        <div className="work-time_block_item2">ЛЕТ</div>
                        <div className="work-time_block_item3">на рынке</div>
                    </div>
                </div>
            </div>
        </>

    );
}
export default Header;