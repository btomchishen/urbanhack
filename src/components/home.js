import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>

                    <div class="carousel-inner">
                        <div class="item active">
                            <img src={require("..//img/slider/first.jpg")} alt="Chania" width="1540" />
                            <div class="carousel-caption">
                                <h3>ЗООСВІТ ХМЕЛЬНИЦЬКОГО</h3>
                                <p>Хмельницький - найкомфортніше місто для людей та тварин.</p>
                            </div>
                        </div>

                        <div class="item">
                            <img src={require("..//img/slider/2.jpg")} alt="Chania" width="1540" />

                            <div class="carousel-caption">
                                <h3>ЗООСВІТ ХМЕЛЬНИЦЬКОГО</h3>
                                <p>Хмельницький - найкомфортніше місто для людей та тварин.</p>
                            </div>
                        </div>

                        <div class="item">
                            <img src={require("..//img/slider/3.jpg")} alt="Chania" width="1540" />

                            <div class="carousel-caption">
                                <h3>ЗООСВІТ ХМЕЛЬНИЦЬКОГО</h3>
                                <p>Хмельницький - найкомфортніше місто для людей та тварин.</p>
                            </div>
                        </div>
                    </div>

                    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="#myCarousel" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>


                <div className="home-vistavki-content">
                    <div className="home-vistavka">
                        Найближча виставка:
                    </div>
                    <div className="home-vistavka-text">
                        <div className="vistavki-content-header">
                            Виставки собак усіх порід "Кубок Поділля - 2019" та "Кубок Хмельнничини - 2019"
                    </div>
                        <div className="vistavki-content-date">
                            Дата проведення: <strong>12 жовтня, 10:00</strong>
                        </div>
                        <div className="vistavki-content-phone">
                            Довідки за номером: <strong>+38-067-925-9656</strong>
                        </div>
                        <div className="vistavki-content-location">
                            Розташування: <strong>Стадіон Хмельницького Національного Університета</strong>
                        </div>
                    </div>
                </div>


                <div className="map">
                    <iframe src="https://www.google.com/maps/d/u/2/embed?mid=1TLV2f4Fr-NF_quHDd3B3IOWTe2Quj33F"
                        width="1300" height="480" title="map"></iframe>
                </div>
            </div>
        )
    }
}

export default Home