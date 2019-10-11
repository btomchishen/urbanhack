import React from 'react'

class Hospital extends React.Component {
    render() {
        return (
            <div className="hospital">
                <div className="header">
                    ВЕТЕРИНАРНІ ЗАКЛАДИ
                </div>
                <div className="content-hospital">

                    <div className="content-flex hospital-margin">
                        <div className="content-photo-hospital">
                            <img src={require("../img/apteki/bile-iklo.png")} alt="Вет. амбулаторія Біле Ікло" />
                        </div>
                        <div className="content-hospital">
                        <div className="content-header-hospital">
                            Ветеринарна амбулаторія "Біле Ікло"
                        </div>
                        <div className="content-info-hospital">
                                <ul><p className="hospital-header-ul">Широкий спектр ветеринарних послуг:<br /></p>
                                <li>Лабораторні дослідження (крові і інше) <br /></li>
                                <li>Вакцинація<br /></li>
                                <li>Чіпування <br /></li>
                                <li>Терапія та хірургія дрібних та с\г тварин<br /></li>
                                <li>Виїзд лікаря додому<br /></li>
                                </ul>
                                Номера телефоу: <strong>+38-098-414-2612 +38-067-862-4046 <br /></strong>
                                Розташування: <strong>вул.Проспект Миру 80/1, Район Виставка</strong><br />
                                Графік роботи: <strong>з 10-00 до 20-00 без вихідних</strong>
                        </div>
                        </div>
                    </div>

                    <div className="content-flex hospital-margin">
                        <div className="content-photo-hospital">
                            <img src={require("../img/apteki/ivet.jpg")} alt="Вет. амбулаторія Ivet" />
                        </div>
                        <div className="content-hospital">
                        <div className="content-header-hospital">
                            Ветеринарна аптека-клініка "Ivet"
                        </div>
                        <div className="content-info-hospital">
                                <ul><p className="hospital-header-ul">Широкий спектр ветеринарних послуг:<br /></p>
                                <li>Лабораторні дослідження (крові і інше) <br /></li>
                                <li>Вакцинація<br /></li>
                                <li>Лабораторна діагностика, УЗД <br /></li>
                                <li>Стоматологічні послуги<br /></li>
                                <li>Виїзд лікаря додому<br /></li>
                                </ul>
                                Номер телефону: <strong>+38-098-311-4562</strong><br />
                                Розташування: <strong>вул.Толстого 5а</strong><br />
                                Графік роботи: <strong>з 9-00 до 19-00 без вихідних</strong>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Hospital