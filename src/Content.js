import "./Content.css"
import react from "react"
function Content() {
    return (
        <div className="Content">
            <center className="Content-center"><h1 id="content-center">Thông tin mới nhất</h1></center>

            <div className="news">
                <div id="news1"> news1</div>
                <div id="news2"> news2</div>
                <div id="news3"> news3</div>
                <div id="news4"> news5</div>
            </div>
        </div>
    );
}
export default Content;