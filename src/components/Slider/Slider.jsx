import React, { useState } from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'

const dataSlider = [
    {
        id: 1,
        title: "Lorem ipsum",
        subTitle: "Lorem",
        img: "https://lh3.googleusercontent.com/jo-fRKl6ujRY5QHIRJJauUPg8Sa78NN06kniExGWfAQNmdwtCFkXl71Yo6NptUMEBEhvTRMiejypoYPC60L6BdxDNxis15sUDkQD86akpJel-LBsV8eJn5FGo5F3lEz9EeQ39oFC1v4SyQA2L9HVJFVLRADpYeOVwWUoT_UqeyygHQgq8Hd0vzqy4rvdS0_MYq38N6wJ4JeKIQUhYeZzCbKCJ2UcCujifAjFmxilA5oKRIO4x_xHQ3I-pXMGupE6s9nvaXL87GaskCNH70tRPwTJE1j4i4fWODApSkmhtV74inTeQ-9ijD0eWUQ8euRutQwTrX6147lZJe1gxqaU6PLvbn7TiT7G51UgrM24J073Ao4a3DB_nqXj0Ys4HdCuuSOWY0mtwL8pXNnMAd3u1PfbYAwfobCJvf0nXvNrF0sIWcc9WIEKwTwH6c8ckHzmjsHsLvFP3h061-7luiNC5_8PVH9FWGD6gI0RznRmG9-5sw0Pw6rV0jdU5_5glA0YTGEDS6mwu8hCIXXyA1QKmwycc0N46cC0WMBv3IDLKnhuIivY4FueWMJ_ffvZcV3FV67bya4wsS3urBPZHMj1EnzogxqnqXeqWiePuV3HmFB-6Y7ffuL7P-LncwhSS53zLVEj6oLGAQaYeNSWObqIjFDwEUlMrs4ymfZQosJ6eWf26PKnO1GC4ETAk5D77nlLNwbJRpyhT2kj8RpJ0R7tPDxKksvcB7z0rSsd7r7P-aGfUW_REucuUpd5kGHbn0poQQVZJ1HhQA8NtoyIEZVqgYzkEkcEU-MV_86mIgivuAFu5QO7RxYE3qbka-YzYrscg4Cc-NDApUEWFXVGcm7mWE_-QsrFcBKEJlo5kCuu1kc7zFOJVfvSvVQpGYb1ykcn2lSz0DSwjm3iaeu_4m8VaoQL9yX3-sCuGk_tuQT22Cod0wryOz_Xu95-wNvF5CsijqnRhUohw1uXlGRQLmHsIVCwKIU_QhaD7dRmpa5JJzjUr5WUveE=w1920-h739-no?authuser=0"
    },
    {
        id: 2,
        title: "Lorem ipsum",
        subTitle: "Lorem",
        img: "https://lh3.googleusercontent.com/belR1S0qqa02kH_2_Y77BhRa58b74qYe1-BPK1FjYDob1Rc7Q-wsfYBEpS0oDF8KlXdUP4sRDud43-pqPvCFwKVb_WN_WkhEcHBw9qJzveEqvIFxKks32G_ITwY-m96Nd_H_UU8LhgOtf5U-XnA1wHoSTcVoIFRO9B9AVEpTmxYOj5bWrBm2FAYvMyS1Wwqd951amkd3oI-yErCxgLnFXi9SiB8WxDYwNjQu48HRvRysDoUqIJpxahYyUQAsD6dhjYu9F6IhdLA514-BmxycAztfVPpekC4yfLor4AEui3VJLjydjBb4LHFcy1-OXQE5ptBAAH_iaLzhqBZYkVLaaFFZYhyG3MBwD9tY_vMoaEh0n8FPaNVxPww-vajSM3PKx21FFv_ubhxk7cVpD8YexJJ40zX_o-DJd0EROBxAeMwRSAXc8vNV08b8yWtE5cWQDbwP4VJ3p2VUqx8Yz9VvNilf0hBAGwIpiBPuT1wvtpltWW32XxJ3iU9h48Nr56jgoV4qv8oednf4U9jBzH-9XqVsWuIch6muMaA-ZNPjsdNeBcoKUuOurStqiEpRYQRCICvKm7av8c4FP1j1ulwxOnTGRH1riLCdqfQg7N1w5SzhDfAyhChimfRUFE7AOkjGHtiZXSc6YULQ4B8sN75AYe8o6E81tQnRZaXgLtB3kAlTcRy6vQR1fuhEXOrAlS-KF7LEhudGMDwdcYDYsIeB_n-dM0byJQJyoy70k1WHtpgIlzsLS5TJG-nr3-1bJcSIE84njcCk0HwE9On3lUIeYcu6hPxp8mIYSkM_m29GXDQQAgoRIBJ82k3632hZxvfc8uVm4Fe2K8er89G3XE38ks9A1_qVVHAj98Uu7OmTnQGENkrEy-8PEQwH5TciKAyjdFhuWTJucNZXHVWCHyirOKpypO9EnlOJ9ON1bXlbhfGLEYLuTLCmCKdWkC_IqaOTXiFQjvEdwMWEG5P0WfMdwawKDS6NkCMbEun1_4AK6sx5Yi-aGUo=w1920-h739-no?authuser=0"
    },
    {
        id: 3,
        title: "Lorem ipsum",
        subTitle: "Lorem",
        img: "https://lh3.googleusercontent.com/l_yamItExUyQTZLxWf7Xom5yGOeWmOG_nhYzFCAKlkdtj3kWhl75xcU5PkrLxQnAOjY9IdboctfJ05y32Gr1AY74ellAtMPqA5gObbOtGnGcnqb97YrQNPqgNQgCjIFYIQrW2vjCm8MAks4Vv8DyIbrfJy5gimkieAqq7nzmeRIym-ju_V9EMF9zvZKaZPPxaFLxE0kXuOI7MUyvTzWluOzMh_fuXAQhyPpH0nU2sCn-B_kSX-In9z1Eo8xEUSY-AtVe9EUqVmIDapMJjeoO6PZ6XRZrihKlc54eI5w-n8hkHEnNKGVU17OhKDhdYNBai4jjXOqOfnO0EYYdwz-tgrH4iTkvIGhSe8kgBa7AM7FPhHKWbZGAmj4wxpdF8uqCXpzIlp6BjnfzUVnuPToG0v1mKrkCuKw7-g5DZsUro8BePOKrfq4y5UyQUukuTxzkO92qXPLpy0jwXHuEsbAeRiiMayVkW0JjxWiBvEVaT3EPc2P3r8le1DWdSj1kqu5NoaMLxdKNk8qRTict2oXrGpgBDS61xwd0pXXHlv2mjulAC1P0DJeCND5CdTCzZlAP2iSjoYsIEA5QsEur8cI3F1z13PsS5XWaGfEo3QUXnOEdTvZ5-TEHt8DlBbNklIMuWxmQRDCtOBPBGgGbX-r7th4uuxMDI_I3rxbJAhx55QfVmA54HQzdw-veMuSHcSbZNlOcz0waCDXN2m26GQMLY5Vmao4sTOm8ES1vAaq-YSr0gfleTwqgZ-bq2leLBZ9vJjKjW-T1jUFXktx6VcqX67P-io-pzr0n7zB9zZC-qibciXGpciwNdYqJUmrAixpAzKtbqBfG-CxsC7L1CXHTsViK-udyEcnfjXeM_KhyARTzzIjcL7GEnaZ7Y2vqTtebKAK8ld5D2PtN7bAKU3WR3TGA_96afV3D_9w3FccVhHY9Tr6se4H9UcxEzHR2tv0JmisDHe7KD-7ye7tOaI8vCSlGtksndxpypVvieeuqq93-y-IeEFc=w1920-h739-no?authuser=0"
    },
    {
        id: 4,
        title: "Lorem ipsum",
        subTitle: "Lorem",
        img: "https://lh3.googleusercontent.com/ce3qV0sA7b1TXngPvojCeDz3s3zqBU2IlFtpbyZd2ttTZZEAgt8LwQqv0CmPwzKvXM4BF8MMMQuzbo8SLkqm6YF-AFBHtMi59aEGWkUnXriESVRcI-YBmqN4ABiPyruBLfhJzUSYVlq_F99jzAa1VZ0BEQC3GEHGzmJTPQ7XCPW_-egsKHRcun66S91t3I4rqCDjpC87OJKu44oXce1ov2SDQFlk87epLK-fYzQ6pzPzAS43wA8C0bnKy3EQ26wXYz-Lzdq1mTRrl5bNiqvR65p8-kTExfYO3ZuFuvk5FkKfqz3hbz8SmhthgwDzr2p0EWmmpT30imRtilXG43DBTFzJ81wXgS0Y08nSpOLsx5xka8-6AIuybH9u0tYGCWHYXLZnziVgrNbgXm0GMqiQQlcK60TnRqMugZB78sYfOouKYejY7zX9FwaFqjdY7c2mEzkHf4Glpq1B-3hksudWzjsy0DguOg2dS4JVVZGd4h4lHBe-lqbQkfDwFGCldcgtCRmh_HNg1Axgt8ZW0MJj1SBhvFzS0VsVwwbswZNdbGeH9PF9IYCI-7ep5HMgPDq7TDlrEHEyFL0xv_HBoqW5RsodvDgQY8-6s9Y5pwDxVo3yjFZeDrqjV4ty8XQ0qcQCpmR87dE6eE966roQ0AugMyZk3tZZ_8LgdL3A3t86rNTAJl0MYoHHzfz_iHgKMXUfbabszXCncnggRYZANRSwiP0-w9l3_vVSFp91iBLwHXEZxTxMu6vTJRSTvJYOzD4FbYzPO3zqacXQlfKtWwrHZwFVGa06Y0rYGFUKaguBncZgbpi0tq1Vj_sw9Uj_G40EydsQ1OAYe4VpUF95PbIQRakVleHWcX_ZVyen2i84t3y7Fims5LQW4oiNQbjbBz6Lmug2zDFaMAoBSqPvABoLgZLd-UwD9v53uu61JiJZK-Zcne_8_cdOMGPdbMJs_v5Pn1fWGq6FKgyZZA4DsNru2QtEpxxmE3x8gvAc8ZWM9t-8D9sifjg=w1920-h739-no?authuser=0"
    },
];


export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === dataSlider.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
            { dataSlider.map((obj, index) => {
                return (
                    <div
                        key={ obj.id }
                        className={ slideIndex === index + 1 ? "slide active-anim" : "slide" }
                    >
                        <img
                            src={ obj.img }
                        />
                    </div>
                )
            }) }
            <BtnSlider moveSlide={ nextSlide } direction={ "next" } />
            <BtnSlider moveSlide={ prevSlide } direction={ "prev" } />

            <div className="container-dots">
                { Array.from({ length: 4 }).map((item, index) => (
                    <div
                        key={ index }
                        onClick={ () => moveDot(index + 1) }
                        className={ slideIndex === index + 1 ? "dot active" : "dot" }
                    ></div>
                )) }
            </div>
        </div>
    )
}