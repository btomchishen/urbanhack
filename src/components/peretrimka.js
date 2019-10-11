import React from 'react'

class Peretrimka extends React.Component {
    render() {
        return (
            <div className="peretrimka">
                <div className="header">
                    ПЕРЕТРИМКА
                </div>

                <div className="content peretrimka-top">
                    <div className="content-flex">
                        <div className="content-photo">
                            <img src={require("../img/dog_walk_1.png")} alt="Перетримка" />
                        </div>
                        <div className="content-text-trener">

                            <div className="trener-name">
                                ПІБ: <strong>Кулик Владислав Дмитрович</strong>
                            </div>
                            <div className="trener-dosvid">
                                Вік: <strong>63 роки</strong>
                            </div>
                            <div>
                                Можу взяти: котеня або кішку
                            </div>
                            <div className="trener-about">
                                Маю власну кішку: <strong>добра, розумна, привітна. Проблем з іншими кішками та котами немає.</strong><br />
                                
                            </div>
                            <div className="trener-number">
                                Номер телефону: <strong>+380676258125</strong>
                            </div>
                            <div className="trener-location">
                                Вулиця: <strong>Пушкіна 8</strong>
                            </div>
                            <div className="peretrimka-location">
                                <img src={require("../img/peretrimka-location.png")} alt="Розташування перетримника" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Peretrimka