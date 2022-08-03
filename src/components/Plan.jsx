import { UncontrolledCollapse, Button } from 'reactstrap';

const Plan = () => {
    return (
        <div className='Plan'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1>План и квадратура квартир</h1>
                        <div className="img">
                            <img src="/image/plan.png" alt="" />
                        </div>
                    </div>

                    {/* <div className="col-lg-12">
                        <Accordion>
                            <AccordionItem>
                                <AccordionHeader>
                                    Lorem, ipsum.
                                </AccordionHeader>
                                <AccordionBody>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem dolorem placeat minima eum? Eaque ipsa quidem, quasi asperiores animi, quas magni soluta, suscipit saepe ad qui? Adipisci ratione animi sequi.
                                </AccordionBody>
                            </AccordionItem>
                        </Accordion>
                    </div> */}

                    {/* <div className="line"></div> */}

                    <div className="col-lg-10 mx-auto myCol">
                        <div className="acc first">

                            <Button className='btn' color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
                                <span><img src="/icon/arrowBottom.svg" alt="" /></span> Квартиры на 2 этаже
                            </Button>
                            <UncontrolledCollapse className='myCollapse' toggler="#toggler">
                                <table className="table">
                                    <tbody>
                                        <tr className='myTr'>

                                            <td>Этаж</td>
                                            <td>Кол-во комнат </td>
                                            <td>Квадратура</td>
                                        </tr>

                                        <tr>
                                            <td>2 этаж</td>
                                            <td>1 комната</td>
                                            <td>49.8 м2</td>

                                        </tr>

                                        <tr>
                                            <td>2 этаж</td>
                                            <td>2 комната</td>
                                            <td>60.4 - 75.4 м2</td>
                                        </tr>

                                        <tr>
                                            <td>2 этаж</td>
                                            <td>3 комната</td>
                                            <td>81.4 - 87.3 - 93.8 - 96.3 - 125.5 м2</td>
                                        </tr>

                                        <tr>
                                            <td>2 этаж</td>
                                            <td>4 комната</td>
                                            <td>101.7 – 105 м2 </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </UncontrolledCollapse>
                        </div>

                        <div className="acc">

                            <Button className='btn' color="primary" id="toggler2" style={{ marginBottom: '1rem' }}>
                                <span><img src="/icon/arrowBottom.svg" alt="" /></span> Квартиры на 3 этаже
                            </Button>
                            <UncontrolledCollapse className='myCollapse' toggler="#toggler2">
                                <table className="table">
                                    <tbody>
                                        <tr className='myTr'>

                                            <td>Этаж</td>
                                            <td>Кол-во комнат </td>
                                            <td>Квадратура</td>
                                        </tr>

                                        <tr>
                                            <td>3 этаж</td>
                                            <td>1 комната</td>
                                            <td>49.8 м2</td>

                                        </tr>

                                        <tr>
                                            <td>3 этаж</td>
                                            <td>2 комната</td>
                                            <td>60.4 - 75.4 м2</td>
                                        </tr>

                                        <tr>
                                            <td>3 этаж</td>
                                            <td>3 комната</td>
                                            <td>81.4 - 87.3 - 93.8 - 96.3 - 125.5 м2</td>
                                        </tr>

                                        <tr>
                                            <td>3 этаж</td>
                                            <td>4 комната</td>
                                            <td>101.7 – 105 м2 </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </UncontrolledCollapse>
                        </div>

                        <div className="acc">

                            <Button className='btn' color="primary" id="toggler3" style={{ marginBottom: '1rem' }}>
                                <span><img src="/icon/arrowBottom.svg" alt="" /></span> Квартиры на 4-11 этаже
                            </Button>
                            <UncontrolledCollapse className='myCollapse' toggler="#toggler3">
                                <table className="table">
                                    <tbody>
                                        <tr className='myTr'>

                                            <td>Этаж</td>
                                            <td>Кол-во комнат </td>
                                            <td>Квадратура</td>
                                        </tr>

                                        <tr>
                                            <td>2 этаж</td>
                                            <td>1 комната</td>
                                            <td>49.8 м2</td>

                                        </tr>

                                        <tr>
                                            <td>2 этаж</td>
                                            <td>2 комната</td>
                                            <td>60.4 - 75.4 м2</td>
                                        </tr>

                                        <tr>
                                            <td>2 этаж</td>
                                            <td>3 комната</td>
                                            <td>81.4 - 87.3 - 93.8 - 96.3 - 125.5 м2</td>
                                        </tr>

                                        <tr>
                                            <td>2 этаж</td>
                                            <td>4 комната</td>
                                            <td>101.7 – 105 м2 </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </UncontrolledCollapse>
                        </div>

                        <div className="acc">

                            <Button className='btn' color="primary" id="toggler4" style={{ marginBottom: '1rem' }}>
                                <span><img src="/icon/arrowBottom.svg" alt="" /></span> Квартиры на 12 этаже
                            </Button>
                            <UncontrolledCollapse className='myCollapse' toggler="#toggler4">
                                <table className="table">
                                    <tbody>
                                        <tr className='myTr'>

                                            <td>Этаж</td>
                                            <td>Кол-во комнат </td>
                                            <td>Квадратура</td>
                                        </tr>

                                        <tr>
                                            <td>2 этаж</td>
                                            <td>1 комната</td>
                                            <td>49.8 м2</td>

                                        </tr>

                                        <tr>
                                            <td>2 этаж</td>
                                            <td>2 комната</td>
                                            <td>60.4 - 75.4 м2</td>
                                        </tr>

                                        <tr>
                                            <td>2 этаж</td>
                                            <td>3 комната</td>
                                            <td>81.4 - 87.3 - 93.8 - 96.3 - 125.5 м2</td>
                                        </tr>

                                        <tr>
                                            <td>2 этаж</td>
                                            <td>4 комната</td>
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