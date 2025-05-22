import comics from "../../data/comics"
import ComicCard from "./ComicCard"

export default function ComicsList() {
    return (
        <div className="comics-list">
            {comics.map((comic) => (
                <ComicCard key={comic.id} comic={comic} />
            ))}
        </div>
    );
}