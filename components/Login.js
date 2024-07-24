"use client"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FcGoogle } from "react-icons/fc";

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    
    console.log("Form submitted successfully!")
    console.log("Email:", email)
    console.log("Password:", password)
    // You can now use the email and password states to submit to the database
    // For example, using a fetch API or Axios to make a POST request
    // fetch('/api/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email, password }),
    // })
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.error(error))
  }

  return (
    <>
    <Card className="mx-auto max-w-sm shadow-xl z-10 bg-gray-200 bg-opacity-50 backdrop-blur-sm rounded-xl text-black">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="m@example.com"
              required
              className="border-2 border-black focus:border-3"
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              className="border-2 border-black focus:border-3 "
            />
          </div>
          <Button type="submit" className="w-full bg-black text-white rounded-xl hover:translate-y-0.5 hover:bg-black shadow-xl hover:shadow-lg">
            Login
          </Button>
          <div className="text-left text-sm">
          Don&apos;t have an account?{" "}
          <Link href="#" className="underline">
            Sign up
          </Link>
          
        </div>
          <div className="text-sm text-gray-500 text-center">----- OR -----</div>
          <Button variant="outline" className="w-full flex justify-center items-center gap-5 rounded-xl hover:translate-y-0.5 hover:bg-transparent shadow-xl hover:shadow-lg">
           <FcGoogle size={30}/> Continue with Google
          </Button>
        </div>
        </form>
       
      </CardContent>
    </Card>
    </>
  )
}
