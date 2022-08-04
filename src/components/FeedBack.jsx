import React from 'react'

const FeedBack = () => {
  return (
    <div className='FeedBack'>
        <div className="cards">
            <h1>Оставить заявку</h1>
            <form>
                <input className='form-control' type="text" placeholder='Имя' />
                <input className='form-control' type="number" placeholder='Телефон' />
                <button type='submit' className="btn">Отправить</button>
            </form>
        </div>
        <div className="close"></div>
    </div>
  )
}

export default FeedBack