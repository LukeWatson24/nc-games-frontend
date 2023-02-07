import { useParams } from "react-router-dom";
import ReviewComments from "./ReviewComments";
import ReviewInfo from "./ReviewInfo";

function ReviewContainer() {
  const { review_id } = useParams();
  return (
    <main>
      {review_id}
      <ReviewInfo />
      <ReviewComments />
    </main>
  );
}

export default ReviewContainer;
