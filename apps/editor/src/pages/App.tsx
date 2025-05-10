import React from 'react';
import { useGlobalStore } from '@repo/state/store'
import { generateAIContent } from '@repo/services/ia'
import { Button } from '@repo/ui'

export const App = () => {
  const profile = useGlobalStore((s) => s.profile)
  const content = useGlobalStore((s) => s.content)
  console.log('content :: ', content)
  console.log('profile :: ', profile)
  const setContent = useGlobalStore((s) => s.setContent)

  return (
    <div>
      <h1>EDITOR App</h1>
      <Button onClick={() => {
        if (profile) setContent({ generated: generateAIContent(profile.name) })
      }}>
        Generar Contenido
      </Button>
      
      <pre>{JSON.stringify(profile, null, 2)}</pre>
      <pre>{JSON.stringify(content, null, 2)}</pre>
    </div>
  )
}