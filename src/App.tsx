import { Button } from './components/Button'
import './styles/global.css'

export function App() {
  return (
    <div className="w-screen h-screen bg-zinc-900 flex items-center justify-center">
      <Button>Create account</Button>

      {/* Polymorphic button */}
      <Button asChild>
        <a href="#">Create account</a>
      </Button>
    </div>
  )
}
