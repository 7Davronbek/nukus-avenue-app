import React from 'react'

const FeedBack = ({ modal, setModal }) => {
    return (
        <div className={`FeedBack ${modal ? 'active' : ''}`}>
            <div className="cards">
                <h1>Оставить заявку</h1>
                <form>
                    <input className='form-control' type="text" placeholder='Имя' />
                    <input className='form-control' type="number" placeholder='Телефон' />
                    <button type='submit' className="btn">Отправить</button>
                </form>
            </div>
            <div onClick={() => setModal(false)} className="close"></div>
        </div>
    )
}

export default FeedBack