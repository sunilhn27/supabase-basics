'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
    const supabase = createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }
    console.log("login" + data)

    const { error } = await supabase.auth.signInWithPassword(data)
    console.log(error)
    if (error) {
        redirect('/login')
    }

    revalidatePath('/homepage', 'layout')
    redirect('/homepage')
}

export async function signup(formData: FormData) {
    const supabase = createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }
    console.log("signUp" + data.email)
    const { error } = await supabase.auth.signUp(data)

    console.log(error)
    if (error || null!) {
        console.log("not signed Up")
        redirect('/login')
    }

    revalidatePath('/homepage', 'layout')
    redirect('/homepage')
}