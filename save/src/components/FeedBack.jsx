import React, { useState } from 'react'
import axios from 'axios'

const FeedBack = ({ modal, setModal }) => {
    const [name, setName] = useState('')
    const [phone_number, setPhoneNumber] = useState('')
    const [success, setSuccess] = useState(false)

    let bot = {
        TOKEN: "5333475266:AAGBTzU1DHiqD080z1Z0un851xYtIxE6ECw",
        chatID: "1698965313"
    }

    const sendForm = (e) => {

        e.preventDefault()

        axios.get(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${'Имя: ' + name + '%0AТелефон: ' + phone_number}`)
            .then((res) => {
                setSuccess(true)
                setModal(false)
                setTimeout(() => {
                    setSuccess(false)
                    setName('')
                    setPhoneNumber('')
                }, 2000)
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <>
            <div className={`FeedBack ${modal ? 'active' : ''}`}>
                <div className="cards">
                    <h1>Оставить заявку</h1>
                    <form onSubmit={sendForm}>
                        <input required autoComplete='off' value={name} onChange={(e) => setName(e.target.value)} className='form-control' type="text" placeholder='Имя' />
                        <input required autoComplete='off' value={phone_number} onChange={e => setPhoneNumber(e.target.value)} className='form-control' type="number" placeholder='Телефон' />
                        <button type='submit' className="btn">Отправить</button>
                    </form>
                </div>
                <div onClick={() => setModal(false)} className="close"></div>
            </div>

            <div className={`Check ${success ? 'active' : ''}`}>
                <div className="cards">
                    <img src="/image/check.png" alt="" />
                    <h1>Мы с вами свяжемся</h1>
                </div>
            </div>
        </>
    )
}

export default FeedBack