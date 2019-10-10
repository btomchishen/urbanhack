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
                                <p>Домашні улюбленці дуже люблять гуляти, а чи знаєте ви що є спеціальні місця вигулу?</p>
                            </div>
                        </div>

                        <div class="item">
                            <img src={require("..//img/slider/2.jpg")} alt="Chania" width="1540" />

                            <div class="carousel-caption">
                                <h3>ЗООСВІТ ХМЕЛЬНИЦЬКОГО</h3>
                                <p>Підійшов час робити привівку? Знаходьте найкращі ветеринарні заклади не виходячи із дому!</p>
                            </div>
                        </div>

                        <div class="item">
                            <img src={require("..//img/slider/3.jpg")} alt="Chania" width="1540" />

                            <div class="carousel-caption">
                                <h3>ЗООСВІТ ХМЕЛЬНИЦЬКОГО</h3>
                                <p>Полюбляєте брати участь у виставках, але не знаєте коли саме вони проходять?
                                     Слідкуйте за виставками у вашому місті тут!</p>
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
                    <div className="vistavki-content-header">

                    </div>
                    <div className="vistavki-content-date">

                    </div>
                    <div className="vistavki-content-phone">

                    </div>
                    <div className="vistavki-content-location">

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