"use client"
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
const BackButton = () => {
    const router = useRouter();
  return (
     <button
                onClick={() => router.back()}
                className="flex items-center text-[#5dfeca]  hover:text-[#008e6a]"
              >
                <FaArrowLeft className="mr-2" />
                Back to Portfolio
              </button>
  )
}

export default BackButton