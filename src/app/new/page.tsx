"use client";
import LocationPicker from "@/components/LocationPicker";
import TextInputs from "@/components/TextInputs";
import UploadArea from "@/components/UploadArea";
import { UploadResponse } from "imagekit/dist/libs/interfaces";
import { useState } from "react";
import { TbCurrentLocation } from "react-icons/tb";

export default function NewAdPage(){

  const [files, setFiles] = useState<UploadResponse[]>([]);


  return (
    <form className="max-w-[80%] mx-auto flex flex-col md:flex-row gap-8 ">

      <div className="grow pt-8">

        <UploadArea files={files} setFiles={setFiles} />

        <div className="mt-8">
          <label htmlFor="" className="text-base font-medium">Where is your product located?</label>
          <button className="flex items-center gap-2 py-2 border border-blue-500 px-4 mt-3 mb-6 rounded  text-blue-500 font-semibold">
            <TbCurrentLocation className="text-blue-500" size={30} />
            <span className="">Your Current Location</span>
          </button>
          <div className="bg-gray-50 p-4 min-h-12 rounded text-slate-400 text-center">
            
              <LocationPicker />
            
          </div>
        </div>
      </div>

      <div className="grow">
      <TextInputs />
      <button className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded">Publish</button>
      </div>
    </form>
  )
}