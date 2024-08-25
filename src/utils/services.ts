export function calculateOverallRating(reviews: any) {
  const totalRating = reviews?.reduce((sum: number, review: any) => sum + review.rating, 0);
  const overallRating = totalRating / reviews?.length;

  return overallRating;
}

export function reviewStatistics(reviews: any) {
  const totalReviews = reviews?.length;
  const results: Results = {};

  for (let rating = 5; rating >= 1; rating--) {
    const specificReviewsCount = reviews?.filter((review: any) => Math.round(review.rating) === rating).length;
    const percentage = totalReviews === 0 ? 0 : (specificReviewsCount / totalReviews) * 100;

    results[rating] = {
      totalReviewsOfSpecificRating: specificReviewsCount,
      percentage: percentage,
    };
  }
  return results;
}

type ReviewStatistics = {
  totalReviewsOfSpecificRating: number;
  percentage: number;
};

type Results = {
  [key: number]: ReviewStatistics;
};
