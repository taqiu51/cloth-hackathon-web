const reviews = [
    {
      name: "Sarah M.",
      review: "I'm blown away by the quality and style of the clothes I received from ShopCo. Every piece I've bought has exceeded my expectations.",
      rating: 5,
    },
    {
      name: "Alex K.",
      review: "The range of options here is truly remarkable, catering to a variety of tastes and occasions.",
      rating: 4.5,
    },
    {
      name: "James L.",
      review: "The selection of clothes is not only diverse but also on-point with the latest trends.",
      rating: 4.5,
    },
  ];
  
  export function CustomerReviews() {
    return (
      <div className="py-12 px-4 md:px-16 lg:px-32">
        <h2 className="text-3xl font-bold mb-6">OUR HAPPY CUSTOMERS</h2>
        <div className="flex flex-col md:flex-row gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white shadow-lg p-6 rounded-lg flex-1">
              <h3 className="text-lg font-bold mb-2">{review.name}</h3>
              <p className="text-gray-700 mb-4">{review.review}</p>
              <span className="text-yellow-500">{"⭐".repeat(Math.round(review.rating))}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  