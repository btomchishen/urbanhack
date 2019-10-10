import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'

class Area extends React.Component {
    render() {
        return (
            <div className="area">
                <div className="header">
                    ТРЕНЕРИ(ДРЕСИРУВАЛЬНИКИ)
                </div>

                <div className="content">
                    <div className="content-flex">
                        <div className="content-photo">
                            <img src={require("../img/shelter/shelter.jpg")} alt="Дендропарк" />
                        </div>
                        <div className="content-text-trener">

                            <div className="trener-name">
                                ПІБ: <strong>Шевчук Андрій Іванович</strong>
                            </div>
                            <div className="trener-dosvid">
                                Досвід: <strong>6 років</strong>
                            </div>
                            <div className="trener-about">
                                Працюю з: <strong>собаками, кішками, папугами будь-якого віку</strong><br />
                                Індивідуальний підхід до вашого улюбленця
                            </div>
                            <div className="trener-number">
                                Номер телефону: <strong>+380675966925</strong>
                            </div>
                            <div className="trener-location">
                                Зайняття проходять на спорт. площадці за адресою: <strong>Пілотьска 8</strong>
                            </div>


                            <div class="rating-card">
                                <div><h1>Рейтинг</h1></div>
                                <div class="rating">
                                    <h2>4.0</h2>
                                    <i aria-hidden="true" class="fa fa-star"></i>
                                    <i aria-hidden="true" class="fa fa-star"></i>
                                    <i aria-hidden="true" class="fa fa-star"></i>
                                    <i aria-hidden="true" class="fa fa-star"></i>
                                    <i aria-hidden="true" class="fa fa-star-o"></i>
                                    <p><i class="fa fa-user" aria-hidden="true"></i> 34 разом</p>
                                </div>
                                <div class="rating-process">
                                    <div class="rating-right-part">
                                        <p><i aria-hidden="true" class="fa fa-star"></i> 80%</p>
                                        <div class="progress-1"></div>
                                    </div>
                                    <div class="rating-right-part">
                                        <p><i aria-hidden="true" class="fa fa-star"></i> 60%</p>
                                        <div class="progress-2"></div>
                                    </div>
                                    <div class="rating-right-part">
                                        <p><i aria-hidden="true" class="fa fa-star"></i> 40%</p>
                                        <div class="progress-3"></div>
                                    </div>
                                    <div class="rating-right-part">
                                        <p><i aria-hidden="true" class="fa fa-star"></i> 20%</p>
                                        <div class="progress-4"></div>
                                    </div>
                                    <div class="rating-right-part">
                                        <p><i aria-hidden="true" class="fa fa-star"></i> 10%</p>
                                        <div class="progress-5"></div>
                                    </div>
                                </div>
                                <div className="cb"></div>
                            </div>








                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default Area