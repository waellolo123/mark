"use client";
import UploadArea from "@/components/UploadArea";
import { UploadResponse } from "imagekit/dist/libs/interfaces";
import { useState } from "react";
import { TbCurrentLocation } from "react-icons/tb";

export default function NewAdPage(){

  const [files, setFiles] = useState<UploadResponse[]>([])

  return (
    <form className="max-w-[80%] mx-auto flex flex-col md:flex-row gap-8 ">

      <div className="grow pt-8">

        <UploadArea files={files} setFiles={setFiles} />
        
        <div className="mt-8">
          <label htmlFor="" className="text-xl font-medium">Where is your product located?</label>
          <button className="flex items-center gap-2 py-2 border border-blue-500 px-4 mt-3 mb-6 rounded  text-blue-500 font-semibold">
            <TbCurrentLocation className="text-blue-500" size={30} />
            <span className="">Your Current Location</span>
          </button>
          <div className="bg-gray-50 p-4 min-h-12 rounded text-slate-400 text-center">google maps</div>
        </div>
      </div>

      <div className="grow">
      <label htmlFor="titleIn">Title</label>
      <input id="titleIn" type="text" placeholder="title" />
      <label htmlFor="priceIn">Price</label>
      <input id="priceIn" type="number" placeholder="price" />
      <label htmlFor="categoryIn">Category</label>
      <select name="" id="categoryIn">
        <option selected disabled value="">Select a Category</option>
        <option value="Electronics">Electronics</option>
        <option value="sport">Sport</option>
        <option value="real-estate">Real Estate</option>
        <option value="vehicles">Vehicles</option>
      </select>
      <label htmlFor="descriptionIn">Category</label>
      <textarea name="" id="descriptionIn" placeholder="description"></textarea>
      <label htmlFor="phoneIn">Phone Number</label>
      <textarea name="" id="phoneIn" placeholder="mobile +21622000000"></textarea>
      <button className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded">Publish</button>
      </div>
    </form>
  )
}