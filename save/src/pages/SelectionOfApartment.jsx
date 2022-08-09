import React from 'react'
import ApartmentHeader from '../components/apartment/ApartmentHeader'
import FirstApartment from '../components/apartment/FirstApartment'
import FourthApartment from '../components/apartment/FourthApartment'
import SecondApartment from '../components/apartment/SecondApartment'
import ThirdApartment from '../components/apartment/ThirdApartment'

const SelectionOfApartment = ({ setModal }) => {
    return (
        <>
            <ApartmentHeader />
            <FirstApartment setModal={setModal} />
            <SecondApartment setModal={setModal} />
            <ThirdApartment setModal={setModal} />
            <FourthApartment setModal={setModal} />
        </>
    )
}

export default SelectionOfApartment