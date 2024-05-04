import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Footer() {
    const [data, setData] = useState(null)

    useEffect(() => {
        const dbLanguages = async () => {
            const result = await fetch("http://localhost:3000/languages")
            const data = await result.json()
            setData(data)
        }
        dbLanguages()
    }, [])



    return (
        <footer className="mt-[24px] mb-[52px]">
            <div className="flex flex-col gap-y-6 px-2 items-center text-[#737373]">
                <div className="flex flex-wrap gap-x-4 text-xs">
                    <Link to="#" className="hover:underline">Meta</Link>
                    <Link to="#" className="hover:underline">About</Link>
                    <Link to="#" className="hover:underline">Blog</Link>
                    <Link to="#" className="hover:underline">Jobs</Link>
                    <Link to="#" className="hover:underline">Help</Link>
                    <Link to="#" className="hover:underline">API</Link>
                    <Link to="#" className="hover:underline">Privace</Link>
                    <Link to="#" className="hover:underline">Terms</Link>
                    <Link to="#" className="hover:underline">Locations</Link>
                    <Link to="#" className="hover:underline">Instagram Lite</Link>
                    <Link to="#" className="hover:underline">Threads</Link>
                    <Link to="#" className="hover:underline">Contact Uploading & Non-Users</Link>
                    <Link to="#" className="hover:underline">Meta Verified</Link>
                </div>
                <div className="flex gap-x-4 flex-wrap text-xs">
                    <select name="languages" id="languages" className="outline-none ">
                        {
                            data && data.map(item => {
                                return (
                                    <option key={item.id} value={item.value}>{item.name}</option>
                                )
                            })
                        }
                    </select>
                    <span>&copy; 2024 Instagram from Meta</span>
                </div>
            </div>
        </footer>
    )
}