import { useState, useEffect } from 'react'
import './MainScreen.css'

const MENU_ITEMS = ['게임 시작', '게임 종료'] as const
const MENU_COUNT = MENU_ITEMS.length

function MainScreen() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'ArrowDown') {
        setSelectedIndex((prev) => (prev + 1) % MENU_COUNT)
      } else if (e.key === 'ArrowUp') {
        setSelectedIndex((prev) => (prev - 1 + MENU_COUNT) % MENU_COUNT)
      } else if (e.key === 'Enter') {
        executeMenu(selectedIndex)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedIndex])

  function executeMenu(index: number) {
    if (index === 0) {
      alert('게임 시작!')
    } else if (index === 1) {
      const confirmed = confirm('게임을 종료하시겠습니까?')
      if (confirmed) {
        window.close()
        alert('브라우저 탭을 직접 닫아주세요.')
      }
    }
  }

  return (
    <div className="main-screen">
      <h1 className="main-title">PANG</h1>
      <ul className="main-menu">
        {MENU_ITEMS.map((item, index) => (
          <li
            key={item}
            className={`main-menu-item ${index === selectedIndex ? 'selected' : ''}`}
            onClick={() => executeMenu(index)}
            onMouseEnter={() => setSelectedIndex(index)}
          >
            <span className="marker">{index === selectedIndex ? '▶' : '  '}</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MainScreen
