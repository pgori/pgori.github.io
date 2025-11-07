import { render, screen } from "@testing-library/react"
import BlogPage from "./BlogPage"
import { GlobalProvider } from "@/contexts/GlobalProvider"

test('render blog page', async () => {
    //ARRANGE
    render(
        <GlobalProvider>
            <BlogPage />
        </GlobalProvider>
    )

    //ACT

    //ASSERT
    expect(screen.getByText('Loading...')).toBeInTheDocument()

})