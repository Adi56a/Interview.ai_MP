import React from 'react'
import dayjs from 'dayjs'
import Image from 'next/image'
import { getRandomInterviewCover } from '@/lib/utils'
import { Button } from './ui/button'
import Link from 'next/link'
import DisplayTechicons from './DisplayTechicons'

const InterviewCard = ({ interviewId, userId, role, type, techstack, createdAt }: InterviewCardProps) => {
  const feedback = null as Feedback | null
  const normalizedType = /mix/gi.test(type) ? 'Mixed' : type
  const formattedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format('MMM D, YYYY')

  return (
    <div className="bg-gray-900 text-white shadow-xl rounded-lg overflow-hidden w-[360px] max-w-full mx-auto mb-6 p-5 transition-transform transform hover:scale-105">
      <div className="relative">
        {/* Interview Type Badge */}
        <div className="absolute top-4 right-4 bg-lime-600 px-4 py-2 rounded-lg text-white text-sm font-semibold">
          {normalizedType}
        </div>

        {/* Interview Cover */}
        <div className="w-[80px] h-[80px] mx-auto overflow-hidden rounded-full border-4 border-gray-800">
          <Image
            src={getRandomInterviewCover()}
            alt="Cover Image"
            width={30}
            height={30}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Interview Role */}
        <h3 className="text-2xl font-semibold text-center">{role} Interview</h3>

        {/* Date and Rating */}
        <div className="flex justify-between mt-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Image src="/calendar.svg" alt="Calendar" width={20} height={20} />
            <p>{formattedDate}</p>
          </div>

          <div className="flex items-center gap-2">
            <Image src="/star.svg" alt="Star" width={20} height={20} />
            <p>{feedback?.totalScore || "___"} / 100</p>
          </div>
        </div>

        {/* Feedback or Placeholder Text */}
        <p className="mt-4 text-center text-sm text-gray-300 line-clamp-2">
          {feedback?.finalAssessment || "You haven't taken the interview yet. Take it now to improve your skills."}
        </p>
      </div>

      {/* Tech Stack and Button */}
      <div className="flex justify-between items-center mt-6">
        <DisplayTechicons techStack={techstack} />

        <Button className="bg-lime-600 text-white hover:bg-lime-500 text-sm transition-colors">
          <Link href={feedback ? `/interview/${interviewId}/feedback` : `/interview/${interviewId}`}>
            {feedback ? 'Check Feedback' : 'View Interview'}
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default InterviewCard
