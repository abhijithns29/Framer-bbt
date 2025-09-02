"use client";
import DashboardDropdown from "@/components/dashboard-dropdown";
import CardComponent from "@/components/cardComponent";


export default function Page() {
  return (
    <div  className=" px-25 py-10 w-full h-full ">
      <DashboardDropdown />
      <div className="w-full h-full flex flex-wrap">
          <CardComponent />
       <CardComponent />
        <CardComponent />
           <CardComponent />
       <CardComponent />
        <CardComponent />


      </div>
    
     

    </div>
  )
}
