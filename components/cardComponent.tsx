import { Badge } from "@/components/ui/badge"
import {Zap } from "lucide-react"

export default function CardComponent() {
  return (
    <div className="m-5 h-[450px] w-[300px]  rounded-sm ">
     <div className=" h-[370px] w-[300px] bg-gray-600 rounded-sm shadow-[0_0_10px_rgba(0,0,0,0.3)] flex justify-center items-center">
     <Zap  className="text-2xl font-bold text-gray-400"/>
    </div>
    <div className="p-4 relative">
     <h2>Untitled</h2>
     <p>viewed 1 min ago</p>
     <div className="absolute bottom-7 right-2"><Badge variant="default">Free</Badge></div>
    </div>
    
    </div>
  )
}
