"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Form } from "@/components/ui/form"
import { toast } from "sonner"
import FormField from "./FormField"
import { useRouter } from "next/navigation"

const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),
  })
}

const AuthForm = ({ type }: { type: FormType }) => {
  const router = useRouter()

  const formSchema = authFormSchema(type)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (type === 'sign-up') {
        toast.success("Account Created successfully, Please SignIn")
        router.push('/sign-in')
      } else {
        toast.success('SignIn Successfully')
        router.push('/')
      }
    } catch (error) {
      console.log(error)
      toast.error(`There Was an error: ${error}`)
    }
  }

  const isSignIn = type === 'sign-in'

  return (
    <div className="w-full max-w-md p-6 bg-gray-800 rounded-xl shadow-2xl">
      <div className="text-center mb-6">
        <div className="flex justify-center items-center mb-4">
          <Image src="/logo.png" alt="logo" height={32} width={38} />
          <h2 className="ml-2 text-2xl text-primary-100 font-semibold">Inverview.ai</h2>
        </div>

        <h3 className="text-lg font-medium text-gray-300">
          {isSignIn ? 'Sign In to Continue' : 'Create an Account'}
        </h3>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Conditional rendering for the Name field */}
          {!isSignIn && (
            <FormField
              control={form.control}
              name="name"
              label="Full Name"
              placeholder="Enter your full name"
            />
          )}

          <FormField
            control={form.control}
            name="email"
            label="Email Address"
            placeholder="Enter your email"
            type="email"
          />

          <FormField
            control={form.control}
            name="password"
            label="Password"
            placeholder="Enter your password"
            type="password"
          />

          <Button type="submit" className="w-full py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-md transition-all duration-300">
            {isSignIn ? 'Sign In' : 'Create Account'}
          </Button>
        </form>
      </Form>

      <div className="mt-6 text-center text-sm text-gray-400">
        <p>
          {isSignIn ? "Don't have an account?" : "Already have an account?"}
          <Link href={isSignIn ? '/sign-up' : '/sign-in'} className="font-semibold text-primary-500 hover:text-primary-600 ml-1">
            {isSignIn ? "Sign Up" : "Sign In"}
          </Link>
        </p>
      </div>
    </div>
  )
}

export default AuthForm
