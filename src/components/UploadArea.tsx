import { HiPhoto } from "react-icons/hi2";
import Uploader from "./Uploader";
import { UploadResponse } from "imagekit/dist/libs/interfaces";
import { Dispatch, SetStateAction, useState } from "react";


type Props = {
  files: UploadResponse[];
  setFiles: Dispatch<SetStateAction<UploadResponse[]>>
}

export default function UploadArea({files, setFiles}: Props){



  return (
    <div className="bg-gray-50 p-4 rounded">
         <h2 className="text-slate-400 text-center text-xl font-semibold">Add photos of your product</h2>
         <div className="flex flex-col items-center gap-4 mt-4">
         <HiPhoto className="text-gray-200" size={100} />
         <label 
         onClick={()=>console.log()}
         className="upload-btn w-full bg-blue-500 text-white px-4 py-2 rounded">
         <Uploader onSuccess={(file) => {setFiles(prev => [...prev, file])}} />
          Add photos
         </label>
         {files.map(file => (
          <div className="text-xs" key={file.url}>{file.url}</div>
         ))}
         </div>
        </div>
  )
}