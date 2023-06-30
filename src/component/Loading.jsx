import React, { useEffect, useRef } from 'react'
import Lottie from "lottie-react"
import loadingLottie from "../assets/Comp 1.json"
import "./Loading.css"


const Loading = () => {


    const lottieRef = useRef()

    useEffect(() => {
        lottieRef.current.setSpeed(1.7)
    }, [])

    return (
        <>
            {/* <section className="d-flex justify-content-center align-items-center m-5 min-vh-100">

                <div className="text-center">
                    <strong className="text-light d-block m-2">Loading</strong>
                    <div className="spinner-grow text-info ms-auto" role="status" aria-hidden="true">
                    </div>
                </div>

            </section> */}

            <section className="d-flex justify-content-center align-items-center m-5">

                <div className="text-center cont-animation">
                    <Lottie lottieRef={lottieRef} animationData={loadingLottie} />
                </div>

            </section>
        </>
    )
}

export default Loading
