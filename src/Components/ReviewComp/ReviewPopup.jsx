import React, { useState } from "react";
import useReviewStore from "../../stores/reviewManagementStore";
// import useReviewStore from "../../stores/reviewStore";

export default function ReviewPopup({ productId, onClose }) {
  const { addReview, loading, error, successMessage, clearMessages } =
    useReviewStore();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reviewData = {
      product_id: productId,
      rating,
      comment,
    };

    await addReview(reviewData);

    // Clear form and close the modal if submission is successful
    if (successMessage) {
      setRating(0);
      setComment("");
      onClose();
    }
    onClose();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg p-6 w-1/3 shadow-lg"
      >
        <h2 className="text-xl font-semibold mb-4">Submit Review</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Rating</label>
            <input
              onClick={(e) => e.stopPropagation}
              type="number"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              min="1"
              max="5"
              className="w-full border border-gray-300 rounded p-2"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Comment</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows="4"
              className="w-full border border-gray-300 rounded p-2"
              placeholder="Write your comment here"
              required
            />
          </div>

          {/* {error && <p className="text-red-500 mb-2">{error}</p>} */}
          {/* {successMessage && (
            <p className="text-green-500 mb-2">{successMessage}</p>
          )} */}

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
