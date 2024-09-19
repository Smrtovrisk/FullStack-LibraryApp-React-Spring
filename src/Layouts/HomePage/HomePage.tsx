import { Carousel } from "./Components/Carousel"
import { ExportTopBooks } from "./Components/ExploreNewBooks"
import { Heros } from "./Components/Heros"
import { LibraryServices } from "./Components/LibraryServices"

export const HomePage = () => {
    return (
        <>
            <ExportTopBooks />
            <Carousel />
            <Heros />
            <LibraryServices />
        </>
    )
}