import React from 'react'

class Packets extends React.Component {
    render() {
        return (
            <div className="packets">
                <div className="header">
                    АВТОМАТИ З СПЕЦІАЛЬНИМИ ПАКЕТАМИ
                </div>
                <div className="vistavki-content">
                    <div className="vistavki-flex">
                        <div className="content-photo-packets">
                            <img src={require("../img/avtomat/rubbish.jpg")} alt="Автомат видачі пакетів" />
                        </div>
                        <div className="content">
                            <div className="content-header">
                                Прибери за своїм улюбленцем! До такого закликають власників чотирилапих друзів,
                                які відвідують з ними парк Чекмана.
                            </div>
                            <div className="content-packets-info">
                                Розташування автоматів: <br/>
                                <strong>Парк ім. Михайла Чекмана</strong>
                            </div>
                            <div className="content-photo checkman">
                            <img src={require("../img/avtomat/checkman.jpeg")} alt="Автомат видачі пакетів" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Packets