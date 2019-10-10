import React from 'react'

class Vistavki extends React.Component {
    render() {
        return (
            <div className="vistavki">
                <div className="header">
                    ВИСТАВКИ
                </div>
                <div className="vistavki-content">
                    <div className="vistavki-flex">
                        <div className="content-photo">
                            <img src={require("../img/vistavka/1.jpeg")} />
                        </div>
                        <div className="content">
                        <div className="content-header">
                            Виставки собак усіх порід "Кубок Поділля - 2019" та "Кубок Хмельнничини - 2019"
                    </div>
                        <div className="vistavki-content-date">

                        </div>
                        <div className="vistavki-content-phone">
                            Довідки за номером: <strong>+38-067-925-9656</strong>
                        </div>
                        <div className="vistavki-content-location">
                            Розташування: <strong>Стадіон Хмельницького Національного Університета</strong>
                        </div>
                        <div className="visatvki-content-text">
                                <strong>Вартість реєстрації:</strong><br />
                            Клас бебі, цуценята:<br />
                            до 20.09 - 1 виставка - 250 грн., 2 виставки - 420 грн.<br />
                            до 30.09 - 1 виставка - 300 грн., 2 виставки - 510 грн.<br />
                            Клас юніорів, відкритий, робочий клас, клас Чемпіонів:<br />
                            до 20.09 - 1 виставка - 500 грн., 2 виставки - 850 грн.<br />
                            до 30.09 - 1 виставка - 550 грн., 2 виставки - 935 грн.<br />
                            У каталог виставки буде внесено бобак, зареєстрованих до 20 вересня 2019 р.
                            При реєстрації пред'явити ксерокопію родоводу або картки цуценяти, для участі у робочому класі - диплом з дресирування, у класі Чемпіонів - сертифікат Чемпіона.
                            При собі мати ветеринарний паспорт з відмітками про вакцинацію собаи та форму №1.<br />
                        </div>
                        </div>
                    </div>
                </div>



            </div>
        )
    }
}

export default Vistavki