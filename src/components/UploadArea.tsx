"use client";
import { HiPhoto } from "react-icons/hi2";
import Uploader from "./Uploader";
import { UploadResponse } from "imagekit/dist/libs/interfaces";
import { Dispatch, SetStateAction, useState } from "react";
import { BiPlus } from "react-icons/bi";
import UploadThumbnail from "./UploadThumbnail";

type Props = {
  files: UploadResponse[];
  setFiles: Dispatch<SetStateAction<UploadResponse[]>>
}

export default function UploadArea({files, setFiles}: Props){

  const [isUploading, setIsUploading] = useState(false);

  return (
    <div className="bg-gray-50 p-4 rounded">
         <h2 className="text-slate-400 text-center text-xl font-semibold">Add photos of your product</h2>
         <div className="flex flex-col items-center gap-4 mt-4">
           <HiPhoto className="text-gray-200" size={100} />
         <label 
         className={
          isUploading ? 
          "text-gray-400 cursor-not-allowed" : 
          "upload-btn w-full bg-blue-500 text-white px-4 py-2 rounded cursor-pointer flex items-center gap-3"
          }>
         {isUploading ? (
           <span className="text-base">Uploading...</span>
          ) : (
            <>
            <Uploader
            onUploadStart={()=>setIsUploading(true)}
            onSuccess={(file) => {setFiles(prev => [...prev, file])
            setIsUploading(false) 
            }}
            />
           <BiPlus size={30}/>
            <span className="text-base">Add Images</span>
          </>
         )}
         </label>
         <div className="flex gap-2 items-center justify-center flex-wrap ">
         {files.map(file => (
          <div key={file.url} className="rounded overflow-hidden">
           <UploadThumbnail   file={file}/>
          </div>
          ))}
          </div>
         </div>
        </div>
  )
}