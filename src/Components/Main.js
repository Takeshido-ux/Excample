import build from '../img/main.jpg'
import mail from '../img/mail.png'
import job from '../img/job.png'
import tover from '../img/tover.png'
import polygon from '../img/Polygon.png'
import partner from '../img/parner.png'
import bbb from '../img/bbb.png'


function Main() {

    function classVissible() {
        let a = document.querySelector('.polygon_item2_one')
        a.classList.toggle('classvisible')
        let b = document.querySelector('.img_one')
        if (b.style.transform === 'rotate(90deg)') {
            b.style.transform = 'rotate(0deg)'
        }
        else {
            b.style.transform = 'rotate(90deg)'
        }
    }
    function classVissible_two() {
        let a = document.querySelector('.polygon_item2_two')
        a.classList.toggle('classvisible')
        let b = document.querySelector('.img_two')
        if (b.style.transform === 'rotate(90deg)') {
            b.style.transform = 'rotate(0deg)'
        }
        else {
            b.style.transform = 'rotate(90deg)'
        }
    }
    function classVissible_three() {
        let a = document.querySelector('.polygon_item2_three')
        a.classList.toggle('classvisible')
        let b = document.querySelector('.img_three')
        if (b.style.transform === 'rotate(90deg)') {
            b.style.transform = 'rotate(0deg)'
        }
        else {
            b.style.transform = 'rotate(90deg)'
        }
    }
    function classVissible_four() {
        let a = document.querySelector('.polygon_item2_four')
        a.classList.toggle('classvisible')
        let b = document.querySelector('.img_four')
        if (b.style.transform === 'rotate(90deg)') {
            b.style.transform = 'rotate(0deg)'
        }
        else {
            b.style.transform = 'rotate(90deg)'
        }
    }

    return (
        <>
            <div className="container">
                <div className="main">
                    <h2>НАШИ САМЫЕ БОЛЬШИЕ ПРОЕКТЫ</h2>
                    <div className="main_item2">
                        <div className="cards">
                            <img
                                className="cards_item"
                                src={build}
                                alt="build"
                            />
                            <span></span>
                            <h3>Газпром Арена</h3>
                            <p>Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву.</p>
                        </div>
                        <div className="cards">
                            <img
                                className="cards_item"
                                src={build}
                                alt="build"
                            />
                            <span></span>
                            <h3>Газпром Арена</h3>
                            <p>Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву.</p>
                        </div>
                        <div className="cards">
                            <img
                                className="cards_item"
                                src={build}
                                alt="build"
                            />
                            <span></span>
                            <h3>Газпром Арена</h3>
                            <p>Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="line-info">
                <div className="container">
                    <div className="line-info_items">
                        <div className="line-info_item1"><p className="one">САМЫЕ УМНЫЕ ПРОЕКТЫ</p><p className="two">РЕАЛИЗУЕМ САМЫЕ СМЕЛЫЕ РЕШЕНИЯ В РОССИИ!</p></div>
                        <div className="line-info_item2"><img src={mail} alt="mail" /><h4>ВАШ ЗАПРОС</h4></div>
                    </div>
                </div>
            </div>
            <div className="About">
                <div className="container">
                    <div className="About-job">ЧЕМ МЫ ЗАНИМАЕМСЯ?</div>
                    <div className="About-job_info">
                        <div className="cards_one">
                            <div className="job_cards">
                                <img className="job" src={job} alt="job" />
                                <div className="job_cards_text">СТРОИТЕЛЬСТВО<br /> ОФИСНЫХ ЗДАНИЙ</div>
                            </div>
                            <div className="job_cards">
                                <img className="job" src={job} alt="job" />
                                <div className="job_cards_text">СТРОИТЕЛЬСТВО<br /> ОФИСНЫХ ЗДАНИЙ</div>
                            </div>
                            <div className="job_cards">
                                <img className="job" src={job} alt="job" />
                                <div className="job_cards_text">СТРОИТЕЛЬСТВО<br /> ОФИСНЫХ ЗДАНИЙ</div>
                            </div>
                        </div>
                        <div className="cards_two">
                            <div className="job_cards">
                                <img className="job" src={job} alt="job" />
                                <div className="job_cards_text">СТРОИТЕЛЬСТВО<br /> ОФИСНЫХ ЗДАНИЙ</div>
                            </div>
                            <div className="job_cards">
                                <img className="job" src={job} alt="job" />
                                <div className="job_cards_text">СТРОИТЕЛЬСТВО<br /> ОФИСНЫХ ЗДАНИЙ</div>
                            </div>
                            <div className="job_cards">
                                <img className="job" src={job} alt="job" />
                                <div className="job_cards_text">СТРОИТЕЛЬСТВО<br /> ОФИСНЫХ ЗДАНИЙ</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tover">
                <div className="tover_one">
                    <img src={tover} alt="tover" className="tover_item" />
                    <img src={tover} alt="tover" className="tover_item" />
                    <img src={tover} alt="tover" className="tover_item" />
                    <img src={tover} alt="tover" className="tover_item" />
                </div>
                <div className="tover_two">
                    <img src={tover} alt="tover" className="tover_item" />
                    <img src={tover} alt="tover" className="tover_item" />
                    <img src={tover} alt="tover" className="tover_item" />
                    <img src={tover} alt="tover" className="tover_item" />
                </div>
            </div>
            <div className="answer_question">
                <div className="container">
                    <div className="answer">ОТВЕТЫ НА ВОПРОСЫ</div>
                    <div className="polygon">
                        <div className="polygon_item" onClick={classVissible}>
                            <img className="img_one" src={polygon} alt="polygon" />
                            <p>РАБОТАЕТЕ ЛИ ВЫ ПО 249 ФЗ?</p>
                        </div>
                        <div className="polygon_item2_one">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.</div>
                    </div>
                    <div className="polygon">
                        <div className="polygon_item" onClick={classVissible_two}>
                            <img className="img_two" src={polygon} alt="polygon" />
                            <p>РАБОТАЕТЕ ЛИ ВЫ ПО 249 ФЗ?</p>
                        </div>
                        <div className="polygon_item2_two">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.</div>
                    </div>
                    <div className="polygon">
                        <div className="polygon_item" onClick={classVissible_three}>
                            <img className="img_three" src={polygon} alt="polygon" />
                            <p>РАБОТАЕТЕ ЛИ ВЫ ПО 249 ФЗ?</p>
                        </div>
                        <div className="polygon_item2_three">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.</div>
                    </div>
                    <div className="polygon">
                        <div className="polygon_item" onClick={classVissible_four}>
                            <img className="img_four" src={polygon} alt="polygon" />
                            <p>РАБОТАЕТЕ ЛИ ВЫ ПО 249 ФЗ?</p>
                        </div>
                        <div className="polygon_item2_four">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.</div>
                    </div>
                </div>
            </div>
            <div className="partner">
                <div className="container">
                    <div className="partner_logo">
                        <h5>наши партнеры</h5>
                        <div className="partner_value">
                            <img src={partner} alt="partner" className="partner_item" />
                            <img src={partner} alt="partner" className="partner_item" />
                            <img src={partner} alt="partner" className="partner_item" />
                            <img src={partner} alt="partner" className="partner_item" />
                            <img src={partner} alt="partner" className="partner_item" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="oclick">
                <div className="container">
                    <div className="oclick_info">
                        <p>отзывы о работе с нами</p>
                        <div className="oclick_info_item">
                            <div className="oclick_info_items">
                                <img src={bbb} alt="bbb" />
                                <div className="text_cards">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов.</div>
                                <div className="text_cards2">Иванов Иван, <span>ООО “Газпром-Арена”</span></div>
                            </div>
                            <div className="oclick_info_items">
                                <img src={bbb} alt="bbb" />
                                <div className="text_cards">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов.</div>
                                <div className="text_cards2">Иванов Иван, <span>ООО “Газпром-Арена”</span></div>
                            </div>
                            <div className="oclick_info_items">
                                <img src={bbb} alt="bbb" />
                                <div className="text_cards">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов.</div>
                                <div className="text_cards2">Иванов Иван, <span>ООО “Газпром-Арена”</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="line-info">
                <div className="container">
                    <div className="line-info_items">
                        <div className="line-info_item1"><p className="one">ХОТИТЕ С НАМИ РАБОТАТЬ?</p><p className="two">ОСТАВЬТЕ ЗАЯВКУ И МЫ СВЯЖЕМСЯ С ВАМИ!</p></div>
                        <div className="line-info_item2"><img src={mail} alt="mail" /><h4>ВАШ ЗАПРОС</h4></div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Main;