import Image from "next/image"
import { Card, CardContent } from "./ui/card"



const Header = () => {
    return (
        <Card>
            <CardContent className="flex flex-row items-center justify-between p-5">
                <Image
                    src="/olimpiada.svg"
                    alt="Logo das olimpiadas"
                    width={120}
                    height={18}
                />
                <div className="flex flex-col items-center">
                    <p className="font-bold text-2xl text-yellow-400">Paris</p>
                    <p className="font-semibold text-lg">Olimpiadas <span className="text-red-500">2024</span></p>
                </div>
            </CardContent>
        </Card>
    )
}

export default Header