import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Profile = {
  name: string
  email: string
}

type Content = {
  generated: string
}

type Store = {
  profile: Profile | null
  content: Content | null
  setProfile: (profile: Profile) => void
  setContent: (content: Content) => void
}

const bc = new BroadcastChannel('global-state')

console.log('bc :: ', bc)

export const useGlobalStore = create<Store>()(
  persist(
    (set) => ({
      profile: null,
      content: null,
      setProfile: (profile) => {
        set({ profile })
        bc.postMessage({ type: 'setProfile', payload: profile })
      },
      setContent: (content) => {
        set({ content })
        bc.postMessage({ type: 'setContent', payload: content })
      },
    }),
    { name: 'zustand-global-store' }
  )
)

bc.onmessage = (event) => {
  const { type, payload } = event.data
  if (type === 'setProfile') useGlobalStore.setState({ profile: payload })
  if (type === 'setContent') useGlobalStore.setState({ content: payload })
}
