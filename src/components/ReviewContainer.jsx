import { useParams } from "react-router-dom";
import ReviewComments from "./ReviewComments";
import ReviewInfo from "./ReviewInfo";

function ReviewContainer() {
  const { review_id } = useParams();
  return (
    <main>
      <ReviewInfo reviewId={review_id} />
      <ReviewComments reviewId={review_id} />
    </main>
  );
}

export default ReviewContainer;
