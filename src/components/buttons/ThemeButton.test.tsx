import { render, screen } from '@testing-library/react'
import ThemeButton from './ThemeButton'
import { GlobalProvider } from '@/contexts/GlobalProvider'

test('renders themeButton', () => { 
    render(
        <GlobalProvider>
            <ThemeButton />
        </GlobalProvider>
    )
    expect(screen.getAllByRole('button')).toHaveLength(2)
 })