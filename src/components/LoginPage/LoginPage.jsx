import { ImFacebook2 } from "react-icons/im"
import { Link } from "react-router-dom"
import { useRef, useEffect, useState } from "react"
import Input from "@components/Input/Input"

export default function LoginPage() {
    const image = useRef()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const enable = password && username

    useEffect(() => {
        const images = image.current.querySelectorAll('img')
        let index = 0
        const slider = () => {

            images[index].classList.remove("opacity-0")
            if (index > 0) {
                images[index - 1].classList.add("opacity-0")
            }
            else {
                images[images.length - 1].classList.add("opacity-0")
            }
            if (index === images.length - 1) {
                index = 0
            }
            else {
                index++
            }
        }
        slider()
        const time = setInterval(slider, 4000)

        return () => {
            clearInterval(time)
        }
    }, [image])



    return (
        <section className="py-8">
            <div className="w-full h-full flex justify-center gap-x-8 mb-[12px]">
                <div style={{ backgroundImage: "url('https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones-2x.png?__makehaste_cache_breaker=73SVAexZgBW')" }} className="hidden md:block w-[380px] h-[581px] bg-[length:468px_634px] bg-[top_left_-46px] relative">
                    <div ref={image} className="absolute w-[250px] h-[538px] top-[26px] right-[18px]">
                        <img src="../../public/img/screenshot2.png" alt="" className="absolute top-0 right-0 opacity-0 transition-opacity duration-[2000ms]" />
                        <img src="../../public/img/screenshot1.png" alt="" className="absolute top-0 right-0 opacity-0 transition-opacity duration-[2000ms]" />
                        <img src="../../public/img/screenshot3.png" alt="" className="absolute top-0 right-0 opacity-0 transition-opacity duration-[2000ms]" />
                        <img src="../../public/img/screenshot4.png" alt="" className="absolute top-0 right-0 opacity-0 transition-opacity duration-[2000ms]" />
                    </div>
                </div>
                <div className="w-[350px] flex flex-col gap-y-[10px]">
                    <div className="border-[1px] border-gray-200 flex flex-col gap-y-[38px] py-[10px] mt-[10px] items-center">
                        <div style={{ backgroundImage: "url('https://static.cdninstagram.com/rsrc.php/v3/yM/r/8n91YnfPq0s.png')" }} className="w-[175px] h-[52px] bg-[top_-52px_left] mt-[37px]"></div>
                        <div className="w-full">
                            <form className="mx-10 flex flex-col gap-y-[6px]">
                                <Input value={username} onInput={(e) => setUsername(e.target.value)} type="text" text="Phone number, username or email" />
                                <Input value={password} onInput={(e) => setPassword(e.target.value)} type="password" text="Password" />
                                <button type="submit" disabled={!enable} className="bg-btnBg text-center disabled:opacity-70 py-[7px] text-[14px] leading-[18px] font-semibold text-white px-4 rounded-lg mt-2">Log in</button>
                            </form>
                            <div className="flex items-center mx-10 my-[22px]">
                                <span className="block w-full h-[1px] bg-[#dbdbdb]"></span>
                                <span className="mx-[18px] text-[13px] leading-[15px] font-semibold text-[#737373]">OR</span>
                                <span className="block w-full h-[1px] bg-[#dbdbdb]"></span>
                            </div>
                            <div className="mx-10 flex flex-col items-center mb-[10px]">
                                <Link to="#" className="flex gap-x-2 items-center"><span className="block"><ImFacebook2 size={16} className="text-colorFb"/></span><span className="block text-[14px] text-colorFb font-semibold leading-[18px]">Log in with Facebook</span></Link>
                                <Link to="#" className="mt-5"><span className="block text-[12px] text-[#003768] leading-[18px]">Forgot password?</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="py-[10px] border-[1px] border-gray-200 text-center">
                        <p className="text-[14px] leading-[18px] my-[11.5px]">Don't have an account? <Link to="#" className="text-[#0095f6] font-semibold">Sign up</Link></p>
                    </div>
                    <div className="text-center text-[14px] leading-[18px] my-[10px]">
                        <p>Get the app.</p>
                    </div>
                    <div className="flex gap-x-2 justify-center">
                        <Link to="#"><img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt="" className="h-10" /></Link>
                        <Link to="#"><img src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" alt="" className="h-10" /></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}