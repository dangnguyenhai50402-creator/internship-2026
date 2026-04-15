import Counter from '@/components/Counter'
import UserList from '@/components/UserList'

export default function Home() {
  return (
    <main>
      <h1>React Fundamentals — Next.js</h1>

      <h2>Bài 1 — Counter</h2>
      <Counter />

      <h2>Bài 2 — Danh sách UserCard</h2>
      <UserList />
    </main>
  )
}