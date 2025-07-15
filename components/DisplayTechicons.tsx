import { cn, getTechLogos } from '@/lib/utils'
import React from 'react'
import Image from 'next/image'

const DisplayTechicons = async ({ techStack }: TechIconProps) => {
    const techIcons = await getTechLogos(techStack)
  
    return (
        <div className="flex flex-row space-x-3">
            {techIcons.slice(0, 3).map(({ tech, url }, index) => (
                <div 
                    key={tech} 
                    className={cn(
                        'relative group bg-gray-800 rounded-full p-3 flex justify-center items-center shadow-lg transition-all hover:scale-110 hover:shadow-xl', 
                        index >= 1 && '-ml-3'
                    )}
                >
                    {/* Tooltip on hover */}
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-3 text-white text-xs bg-black rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-all">
                        {tech}
                    </span>
                    
                    <Image 
                        src={url} 
                        alt={tech} 
                        width={15} 
                        height={15} 
                        className="object-contain" 
                    />
                </div>
            ))}
        </div>
    )
}

export default DisplayTechicons
