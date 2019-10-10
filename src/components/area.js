import React from 'react'

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
                            <img src={require("../img/area/denropark.jpg")} alt="Дендропарк" />
                        </div>
                        <div className="content-text">

                            <div className="trener-name">
                                Шевчук Андрій Іванович
                            </div>
                            <div className="">

                            </div>

                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default Area