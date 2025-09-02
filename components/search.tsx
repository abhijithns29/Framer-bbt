import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import React, { useRef, useState } from "react"
import clsx from "clsx"


export function SearchBar() {
  const inputRef = useRef(null)
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="flex w-full   items-center space-x-2 relative">
      <Input type="text" placeholder="Search" className={clsx("flex-1 w-98 h-7 px-0 py-0 " ,isFocused ? "px-9" : "text-center" )}  ref={inputRef}  onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}/>
        <Search className={clsx("h-4 w-4 mr-2 absolute ",isFocused ? "ml-2" : "ml-37" )} />
    </div>
  )
}

