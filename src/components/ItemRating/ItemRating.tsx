import { Star, StarHalf } from "lucide-react";

type ItemRatingProps = {
  count: number;
  rate: number;
};

export default function ItemRating({ count, rate }: ItemRatingProps) {
  const fullStars = Math.floor(rate);
  const hasHalfStar = rate % 1 >= 0.3;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div style={{ display: "flex", gap: "4px" }}>
      {Array(fullStars)
        .fill(null)
        .map((_, i) => (
          <Star key={`full-${i}`} fill="gold" />
        ))}
      {hasHalfStar && <StarHalf fill="gold" />}
      {Array(emptyStars)
        .fill(null)
        .map((_, i) => (
          <Star key={`empty-${i}`} fill="none" />
        ))}
      <div style={{ marginLeft: "6px" }}>{count}</div>
    </div>
  );
}
