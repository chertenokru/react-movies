export function Pagination(props) {
    const {onPageChage, page = 1, pages = 1} = props;
    let pagesItems = [];
    for (let i = 1; i < pages+1; i++) {
        pagesItems.push(
            <li key={i} className={page === i ? "active green darken-1" : "waves-effect"} onClick={()=>onPageChage(i)}><a href="#!">{i}</a></li>
        );
    }

    return <ul className="pagination">
        {pagesItems}
    </ul>
}