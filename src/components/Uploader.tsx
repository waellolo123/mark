import { IKContext, IKUpload } from "imagekitio-react";
import { IKUploadProps } from "imagekitio-react/dist/types/components/IKUpload/props";

export default function Uploader(props: IKUploadProps){
  return (
    <>
    <IKContext
     urlEndpoint={process.env.NEXT_PUBLIC_IK_ENDPOINT}
     publicKey={process.env.NEXT_PUBLIC_IK_PUBLIC_KEY}
    >
     <IKUpload {...props} />
    </IKContext>
    </>
  )
}