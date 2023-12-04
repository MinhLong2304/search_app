import React from 'react'
async function addUser(formData:FormData) {
    "use server";
    await prisma?.users.create({
        
    })    
}
export default function SignUpPage() {
  return (
    <div>
        <h1>Add user</h1>
        <form action={addUser}>
            <input
            required
            name='name'
            placeholder='Name'
            />
            <input
            required
            name='password'
            placeholder='Password'
            />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
