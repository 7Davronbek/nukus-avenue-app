import { useTranslation } from 'react-i18next';
import { UncontrolledCollapse, Button } from 'reactstrap';

const Plan = () => {
    const { t } = useTranslation()
    return (
        <div className='Plan'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1>{t('plan_1')}</h1>
                        <div className="img">
                            <img className='w-100' src="/image/plan.png" alt="" />
                        </div>
                    </div>

                    <div className="col-lg-10 mx-auto myCol">
                        <div className="acc first">

                            <Button className='btn' color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
                                <span><img src="/icon/arrowBottom.svg" alt="" /></span> {t('plan_2')} {"("}2 - {t('plan_3')}
                            </Button>
                            <UncontrolledCollapse className='myCollapse' toggler="#toggler">
                                <table className="table table-responsive-md">
                                    <tbody>
                                        <tr className='myTr'>

                                            <td>{t('plan_4')}</td>
                                            <td>{t('plan_5')} </td>
                                            <td>{t('plan_6')}</td>
                                        </tr>

                                        <tr>
                                            <td>2-{t('plan_4')}</td>
                                            <td>1-{t('plan_7')}</td>
                                            <td>49.8 м2</td>

                                        </tr>

                                        <tr>
                                            <td>2-{t('plan_4')}</td>
                                            <td>2-{t('plan_7')}</td>
                                            <td>60.4 - 75.4 м2</td>
                                        </tr>

                                        <tr>
                                            <td>2-{t('plan_4')}</td>
                                            <td>3-{t('plan_7')}</td>
                                            <td>81.4 - 87.3 - 93.8 - 96.3 - 125.5 м2</td>
                                        </tr>

                                        <tr>
                                            <td>2-{t('plan_4')}</td>
                                            <td>4-{t('plan_7')}</td>
                                            <td>101.7 – 105 м2 </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </UncontrolledCollapse>
                        </div>

                        <div className="acc">

                            <Button className='btn' color="primary" id="toggler2" style={{ marginBottom: '1rem' }}>
                                <span><img src="/icon/arrowBottom.svg" alt="" /></span> {t('plan_2')} {"("}3 {t('plan_3')}
                            </Button>
                            <UncontrolledCollapse className='myCollapse' toggler="#toggler2">
                                <table className="table">
                                    <tbody>
                                        <tr className='myTr'>

                                            <td>{t('plan_4')}</td>
                                            <td>{t('plan_5')} </td>
                                            <td>{t('plan_6')}</td>
                                        </tr>

                                        <tr>
                                            <td>3-{t('plan_4')}</td>
                                            <td>1-{t('plan_7')}</td>
                                            <td>49.8 м2</td>

                                        </tr>

                                        <tr>
                                            <td>3-{t('plan_4')}</td>
                                            <td>2-{t('plan_7')}</td>
                                            <td>60.4 - 75.4 м2</td>
                                        </tr>

                                        <tr>
                                            <td>3-{t('plan_4')}</td>
                                            <td>3-{t('plan_7')}</td>
                                            <td>81.4 - 87.3 - 93.8 - 96.3 - 125.5 м2</td>
                                        </tr>

                                        <tr>
                                            <td>3-{t('plan_4')}</td>
                                            <td>4-{t('plan_7')}</td>
                                            <td>101.7 – 105 м2 </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </UncontrolledCollapse>
                        </div>

                        <div className="acc">

                            <Button className='btn' color="primary" id="toggler3" style={{ marginBottom: '1rem' }}>
                                <span><img src="/icon/arrowBottom.svg" alt="" /></span> {t('plan_2')} {"("}4-11 {t('plan_3')}
                            </Button>
                            <UncontrolledCollapse className='myCollapse' toggler="#toggler3">
                                <table className="table">
                                    <tbody>
                                        <tr className='myTr'>

                                            <td>{t('plan_4')}</td>
                                            <td>{t('plan_5')} </td>
                                            <td>{t('plan_6')}</td>
                                        </tr>

                                        <tr>
                                            <td>2-{t('plan_4')}</td>
                                            <td>1-{t('plan_7')}</td>
                                            <td>49.8 м2</td>

                                        </tr>

                                        <tr>
                                            <td>2-{t('plan_4')}</td>
                                            <td>2-{t('plan_7')}</td>
                                            <td>60.4 - 75.4 м2</td>
                                        </tr>

                                        <tr>
                                            <td>2-{t('plan_4')}</td>
                                            <td>3-{t('plan_7')}</td>
                                            <td>81.4 - 87.3 - 93.8 - 96.3 - 125.5 м2</td>
                                        </tr>

                                        <tr>
                                            <td>2-{t('plan_4')}</td>
                                            <td>4-{t('plan_7')}</td>
                                            <td>101.7 – 105 м2 </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </UncontrolledCollapse>
                        </div>

                        <div className="acc">
                            <Button className='btn' color="primary" id="toggler4" style={{ marginBottom: '1rem' }}>
                                <span><img src="/icon/arrowBottom.svg" alt="" /></span> {t('plan_2')}{" ("}12 {t('plan_3')}
                            </Button>
                            <UncontrolledCollapse className='myCollapse' toggler="#toggler4">
                                <table className="table">
                                    <tbody>
                                        <tr className='myTr'>

                                            <td>{t('plan_4')}</td>
                                            <td>{t('plan_5')}</td>
                                            <td>{t('plan_6')}</td>
                                        </tr>

                                        <tr>
                                            <td>2-{t('plan_4')}</td>
                                            <td>1-{t('plan_7')}</td>
                                            <td>49.8 м2</td>

                                        </tr>

                                        <tr>
                                            <td>2-{t('plan_4')}</td>
                                            <td>2-{t('plan_7')}</td>
                                            <td>60.4 - 75.4 м2</td>
                                        </tr>

                                        <tr>
                                            <td>2-{t('plan_4')}</td>
                                            <td>3-{t('plan_7')}</td>
                                            <td>81.4 - 87.3 - 93.8 - 96.3 - 125.5 м2</td>
                                        </tr>

                                        <tr>
                                            <td>2-{t('plan_4')}</td>
                                            <td>4-{t('plan_7')}</td>
                                            <td>101.7 – 105 м2 </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </UncontrolledCollapse>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Plan