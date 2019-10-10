import React from 'react'

class Area extends React.Component {
    render() {
        return (
            <div className="area">
                <div className="header">
                    МІСЦЯ ВИГУЛУ
                </div>
                
                <div className="content">
                    <div className="content-flex">
                        <div className="content-photo">
                            <img src={require("../img/area/denropark.jpg")} alt="Дендропарк" />
                        </div>
                        <div className="content-text">
                            <div className="content-header">
                                Місце вигулу у мкр. Виставка - Дендропарк
                            </div>
                            <div className="content-location">
                                Розташування: <strong>Старокостянтинівське шосе</strong>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="content">
                    <div className="content-flex">
                        <div className="content-photo">
                            <img src={require("../img/area/checkman.jpg")} alt="Парк Чекмана" />
                        </div>
                        <div className="content-text">
                            <div className="content-header">
                                Місце вигулу у мкр. Центр - Парк ім. Михайла Чекмана
                            </div>
                            <div className="content-location">
                                Розташування: <strong>вул. Паркова 1</strong>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Area