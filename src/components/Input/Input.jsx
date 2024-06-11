import { useEffect, useState, useRef } from "react"

export default function Input({ text, type = "text", ...props }) {
    const [show, setShow] = useState(false)
    const [inputType, setInputType] = useState(type)
    const inputRef = useRef()
    useEffect(() => {
        if (show) {
            setInputType("text")
            inputRef.current.focus()
        }
        else if (type === "password") {
            setInputType("password")
            inputRef.current.focus()
        }
    }, [show])
    return (
        <div className={`relative text-xs border-[1px] rounded-[3px] flex`}>
            <input ref={inputRef} type={inputType} required className="p-2 w-full h-[37.6px] focus:border-gray-400 outline-none border-[#dbdbdb] bg-zinc-50 peer valid:pt-[14px] valid:pb-[2px]" {...props} />
            <span className="absolute left-[9px] top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 peer-valid:text-[10px] peer-valid:top-1 peer-valid:translate-y-0 transition-all">{text}</span>
            {
                type === "password" && props?.value && (
                    <button type="button" onClick={() => setShow(!show)} className={`cursor-pointer pr-2 text-sm font-semibold text-neutral-800 hover:opacity-50`}>
                        {
                            show ? 'Hide' : "Show"
                        }
                    </button>
                )
            }
        </div>
    )
}