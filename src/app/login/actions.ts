'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '../../../utils/supabase/server'

export async function login(formData: FormData) {
    const supabase = createClient()
    console.log("inside login")

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signInWithPassword(data)
    console.log("error" + error)

    if (error) {
        return { error: error.message }
    }

    revalidatePath('/private', 'layout')
    redirect('/private')
    return { success: true }
}

export async function signup(formData: FormData) {
    const supabase = createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signUp(data)
    console.log(error)
    if (error) {
        redirect('/error')
    }

    revalidatePath('/private', 'layout')
    redirect('/private')
}


export async function signInWithGithub() {
    const supabase = createClient()

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
    })
    console.log(error)
    if (error) {
        redirect('/error')
    }

    revalidatePath('/private', 'layout')
    redirect('/private')
}
