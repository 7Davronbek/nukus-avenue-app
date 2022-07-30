import React from 'react'

const AboutHeader = () => {
  return (
    <div className='AboutHeader'>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 myCol">
                    <div className="cards">
                        <h1>Наш взгляд на жизнь</h1>
                        <p>Строительство — это не просто бизнес! Это то, как мы видим жизнь, наше отношение к жизни. Мы верим в человека и это вдохновляет нас на новые свершения. Архитектурный проект BEST HOUSE — жилой комплекс «Nukus Avenue».</p>
                    </div>
                    <div className="leftImg">
                        <img src="/image/header_b.png" alt="" />
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="img">
                        <i><img src="/icon/play.svg" alt="" /></i>
                        <img className='w-100' src="/image/headerVideo.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutHeader