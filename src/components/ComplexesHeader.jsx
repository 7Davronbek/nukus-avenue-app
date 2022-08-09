import React from 'react'
import { useTranslation } from 'react-i18next'

const ComplexesHeader = () => {
    const {t} = useTranslation()
    return (
        <div className='ComplexesHeader'>
            <div className="container">
                <div className="row">
                    <div className="img">
                        <img src="/image/planHeader.png" alt="" />
                    </div>
                    <div className="col-lg-6 offset-lg-6 myCol">
                        <h1>{t('com_1')}</h1>
                        <h2>{t('com_2')}</h2>
                        <p>{t('com_3')}</p>
                        <h2>{t('com_4')}</h2>
                        <p>{t('com_5')}</p>
                        <h2>{t('com_6')}</h2>
                        <p className='last'>{t('com_7')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComplexesHeader