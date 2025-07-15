import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { dummyInterviews } from '@/constants';
import InterviewCard from '@/components/InterviewCard';

const Page = () => {
  return (
    <>
      {/* Section 1: Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 text-white py-16 px-8 flex flex-col md:flex-row justify-between items-center rounded-lg shadow-xl mb-12">
        {/* Left Column */}
        <div className="flex flex-col gap-6 max-w-lg text-center md:text-left">
          <h2 className="text-4xl font-bold leading-snug text-shadow-lg">
            Get Interview-Ready with AI-Powered Practice & Feedback
          </h2>
          <p className="text-lg md:text-xl opacity-90">
            Practice on real Interview Questions & get instant feedback.
          </p>

          <Button asChild className="mt-6 max-sm:w-full bg-lime-500 hover:bg-lime-400 transition-colors rounded-md py-2 px-6 text-xl font-semibold">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>

        {/* Right Column (Image) */}
        <div className="max-w-sm w-full mt-8 md:mt-0">
          <Image src="/robot.png" alt="AI Robot" width={400} height={400} className="mx-auto rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Section 2: Your Interviews */}
      <section className="px-6 mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Your Interviews
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
        </div>
      </section>

      {/* Section 3: Take an Interview */}
      <section className="bg-gray-800 text-white py-12 px-6 mt-12 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-6">
          Take an Interview
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
        </div>
        <p className="mt-6 text-center text-gray-400">
          You haven't taken any interview yet. Take one now to boost your skills!
        </p>
      </section>
    </>
  );
};

export default Page;



