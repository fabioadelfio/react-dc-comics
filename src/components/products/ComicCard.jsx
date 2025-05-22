export default function ComicCard ({ comic }) {
    return (
        <div className="comic-card col-1-6">
            <img src={comic.thumb} alt={comic.title} />
            <div className="comic-title">{comic.title}</div>
        </div>
    );
}