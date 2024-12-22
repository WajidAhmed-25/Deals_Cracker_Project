import React from 'react';
import { Star } from 'lucide-react';

const FilterByRating = () => {
  const ratings = [
    { stars: 5, count: 124, percentage: 90 },
    { stars: 4, count: 52, percentage: 70 },
    { stars: 3, count: 12, percentage: 30 },
    { stars: 2, count: 5, percentage: 20 },
    { stars: 1, count: 2, percentage: 10 },
  ];

  const RatingRow = ({ stars, count, percentage }) => {
    return (
      <div className="flex items-center w-full gap-2">
        <input
          type="radio"
          name="rating"
          className="flex-shrink-0 w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
        />
        <div className="flex-grow min-w-0">
          <div className="h-2 bg-gray-200 rounded-full">
            <div 
              className="h-full rounded-full ThemeColor" 
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
        <div className="flex items-center flex-shrink-0 gap-1">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={14}
              className={`${
                index < stars 
                  ? 'fill-yellow-300 text-yellow-400' 
                  : 'fill-gray-200 text-gray-200'
              }`}
            />
          ))}
          <span className="ml-1 text-sm fontColor">{count}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full p-4 mt-6 bg-white rounded-lg shadow-lg">
      {/* <h2 className="mb-4 text-lg font-semibold">Filter by Rating</h2> */}
      <div className="pb-2 text-center">
        <h2 className="text-lg font-semibold fontColor">Filter by Rating</h2>
      </div>
      <div className="w-full h-px mb-4 bg-gray-200" />
      <div className="space-y-3">
        {ratings.map((rating) => (
          <RatingRow
            key={rating.stars}
            stars={rating.stars}
            count={rating.count}
            percentage={rating.percentage}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterByRating;