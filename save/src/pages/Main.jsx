import React from 'react'
import About from '../components/About'
import Benefites from '../components/Benefites'
import Find from '../components/Find'
import Future from '../components/Future'
import FutureHouse from '../components/FutureHouse'
import Header from '../components/Header'

const Main = ({modal, setModal}) => {
    return (
        <>

            <Header modal={modal} setModal={setModal} />
            <About />
            <Find />
            <Benefites />
            <FutureHouse />
            <Future />

        </>
    )
}

export default Main