"use client"
// React Hook Form
import { useForm } from "react-hook-form"
// Zod
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
// Shadcnui
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
// React
import { useState } from "react"
// Next
// import { useRouter } from "next/navigation"
// import Link from "next/link"

const formSchema = z.object({
    name: z.string().min(1, {
        message: "name cannot be empty",
    }),
    phone: z.string({
        required_error: "phone is required",
        invalid_type_error: "phone must be a string",
    }).min(7, {
        message: "phone must be at least 7 characters.",
    }).max(14, {
        message: "phone must be at most 14 characters.",
    }).regex(/^\d+$/, {
        message: "phone number can only contain digits.",
    }),
    email: z.string().email({
        message: "please use a valid email",
    }),
    message: z.string(),
})

const FrontEndForm = ({ label = true, button = "Submit" }) => {
    const [loading, setLoading] = useState(false)
    // const router = useRouter()
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            message: ""
        }
    })
    const handleSubmit = async (values) => {
        setLoading(true)
        const filteredValues = Object.entries(values).reduce((acc, [key, value]) => {
            if (value !== '' && value !== false) {
                acc[key] = value
            }
            return acc
        }, {})

        console.log(filteredValues)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="grid grid-cols-1 gap-5">
                <div className="grid grid-cols-2 gap-5">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                {label && <FormLabel>Full Name <span className="text-primary">*</span></FormLabel>}
                                <FormControl>
                                    <Input placeholder="Type Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                {label && <FormLabel>Email Address <span className="text-primary">*</span></FormLabel>}
                                <FormControl>
                                    <Input placeholder="Type Email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            {label && <FormLabel>Phone <span className="text-primary">*</span></FormLabel>}
                            <FormControl>
                                <Input placeholder="(000) 000-0000" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            {label && <FormLabel>Message</FormLabel>}
                            <FormControl>
                                <Textarea placeholder="Tell us about your project..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <button type="submit" className="  bg-secondary    h-[50px] inline-flex justify-center items-center text-[16px] font-medium text-white rounded-md transition-all duration-300 hover:bg-black hover:text-white">
                    {loading ? "Loading..." : button}
                </button>
            </form>
        </Form>
    )
}

export default FrontEndForm