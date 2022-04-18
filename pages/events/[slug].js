import { useRouter } from 'next/router'

export default function EventPage() {
  const router = useRouter()
  return (
    <div>
      <h2>My Event</h2>
      <h3>{router.query.slug}</h3>
      <button onClick={() => router.push('/')}>Click</button>
    </div>
  )
}
