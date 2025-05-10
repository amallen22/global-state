import React from 'react'
import { useGlobalStore } from '@repo/state/store'
import { Button } from '@repo/ui'

export const User = () => {
  const profile = useGlobalStore((s) => s.profile)
  const setProfile = useGlobalStore((s) => s.setProfile)

  console.log('profile :: ', profile);

  return (
    <div>
      <h1>USER App</h1>
      <Button onClick={() => setProfile({ name: 'Alice', email: 'alice@example.com' })}>
        Set Profile
      </Button>
      <pre>{JSON.stringify(profile, null, 2)}</pre>
    </div>
  )
}