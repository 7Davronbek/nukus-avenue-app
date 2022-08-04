import React from 'react'
import { Link } from 'react-router-dom'

const Find = () => {
    return (
        <>
            <div className="Find">
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-5 text-lg-start text-center">
                            <div className="find_h">
                                Подбор квартир
                            </div>
                            <div className="find_p">
                                Подберите квартиру, которая придется по душе и по потребностям.
                            </div>
                            <Link className='find_a' to="/selection-of-apartment">Подробнее</Link>
                        </div>
                        <div className="col-lg-7 mt-5 mt-lg-0">
                            <img className='w-100' src="/image/find_1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Find