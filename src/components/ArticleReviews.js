import { Components } from ".";
import { Hooks } from "../hooks";

export function ArticleReviews(props) {
    const useReview = Hooks.useReviews();
    
    const handleReviewSubmit = e => {
        e.preventDefault();

        console.log("submit handle review submit");
    }

    return (
        <>
        <Components.ReviewsForm useReviews={useReview}/>
        <div className="reviews">
            <h3>Avis (2)</h3>
            <div className="review">
                <div className="row no-gutters">
                    <div className="col-auto">
                        <h4><a href="/">Samanta J.</a></h4>
                        <div className="ratings-container">
                            <div className="ratings">
                                <div className="ratings-val"></div>
                            </div>
                        </div>
                        <span className="review-date">6 days ago</span>
                    </div>
                    <div className="col">
                        <h4>Good, perfect size</h4>

                        <div className="review-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!</p>
                        </div>

                        <div className="review-action">
                            <a href="/"><i className="icon-thumbs-up"></i>Helpful (2)</a>
                            <a href="/"><i className="icon-thumbs-down"></i>Unhelpful (0)</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}