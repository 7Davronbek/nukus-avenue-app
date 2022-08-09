
import React from 'react'
import { useTranslation } from 'react-i18next'

const Benefites = () => {
    const {t} = useTranslation();
    return (
        <>
            <div className="Benefites">
                <div className="container">
                    <div className="row">

                        <div className="ben_back">
                            <img src="/image/Back.png" alt="" />
                        </div>

                        <div className="col-12 text-center text-lg-start">
                            <div className="ben_h">
                                {t('advantages_of_the_residential_complex')}
                            </div>
                        </div>



                        <div className="col-lg-10 ms-auto">
                            <div className="row">
                                <div className="col-lg-4 col-sm-6">
                                    <div className="ben_box">
                                        <div className="ben_p">
                                            {t('overground_and_underground_parking')}
                                        </div>
                                        <img className='mt-4' src="/image/ben_1.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="ben_box">
                                        <div className="ben_p">
                                            {t('equipped_playgrounds')}
                                        </div>
                                        <img className='mt-4' src="/image/ben_2.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="ben_box_2">
                                        <div className="ben_p">
                                            {t('modern_architecture')}
                                        </div>
                                        <img className='mt-4' src="/image/ben_3.png" alt="" />
                                    </div>
                                </div>


                                <div className="col-lg-4 col-sm-6">
                                    <div className="ben_box">
                                        <div className="ben_p">
                                            {t('brick_houses')}
                                        </div>
                                        <img className='mt-4' src="/image/ben_4.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="ben_box">
                                        <div className="ben_p">
                                            {t('spacious_and_comfortable_elevator')}
                                        </div>
                                        <img className='mt-4' src="/image/ben_5.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="ben_box_2">
                                        <div className="ben_p">
                                            {t('rooms')}
                                        </div>
                                        <img className='mt-4' src="/image/ben_6.png" alt="" />
                                    </div>
                                </div>

                                <div className="col-lg-4 col-sm-6">
                                    <div className="ben_box">
                                        <div className="ben_p">
                                           {t('flats')}
                                        </div>
                                        <img className='mt-4' src="/image/ben_7.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="ben_box">
                                        <div className="ben_p">
                                            {t('separate_layout')}

                                        </div>
                                        <img className='mt-4' src="/image/ben_8.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="ben_box_2">
                                        <div className="ben_p">
                                           {t('video_surveillance')}
                                        </div>
                                        <img className='mt-4' src="/image/ben_9.png" alt="" />
                                    </div>
                                </div>


                                <div className="col-lg-4 col-sm-6">
                                    <div className="ben_box_3">
                                        <div className="ben_p">
                                            {t('ceiling_height')} <br />
                                            3,20 м
                                        </div>
                                        <img className='mt-4' src="/image/ben_10.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="ben_box_3">
                                        <div className="ben_p">
                                            {t('soundproof_windows')}
                                        </div>
                                        <img className='mt-4' src="/image/ben_11.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="ben_box_4">
                                        <div className="ben_p">
                                            {t('possibility_to_create_your_own_interior')}
                                        </div>
                                        <img className='mt-4' src="/image/ben_12.png" alt="" />
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Benefites