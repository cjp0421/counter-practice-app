import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../src/pages/index'
import CounterDemo from '../src/pages/_counterDemo'

describe('Home', () => {
    it('renders a heading', () => {
        render(<Home />)

        const heading = screen.getByRole('heading', { level: 1 })

        expect(heading).toBeInTheDocument()
    })
})