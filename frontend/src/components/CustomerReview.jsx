import React, { useState, useEffect } from 'react';

const customerReviews = [
  {
    name: "Muhd Amien Muzaffar S.",
    date: "2 days ago",
    rating: 5,
    review: "Very satisfied with the products they're selling. All is at a reasonably price.",
    image: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" 
  },
  {
    name: "Kaizer Zreg",
    date: "11 days ago",
    rating: 4.5,
    review: "For whoever read this review, you guys should buy from this company, mine arrived quickly.",
    image: "https://thumbs.dreamstime.com/b/beauty-girl-face-side-view-beautiful-indian-woman-profile-over-white-women-chin-neck-skin-facelift-massage-nose-aesthetic-320700580.jpg"
  },
  {
    name: "Muhd Amien Muzaffar S.",
    date: "2 days ago",
    rating: 5,
    review: "Very satisfied with the products they're selling. All is at a reasonably price.",
    image: "https://media.gettyimages.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=gi&k=20&c=LsB3LmCoN69U82LEYU78IC2tNwOMjy7LJlmEj30UOSs=" 
  },
  {
    name: "Kaizer Zreg",
    date: "11 days ago",
    rating: 4.5,
    review: "For whoever read this review, you guys should buy from this company, mine arrived quickly.",
    image: "https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-after.jpg?auto=avif,webp&format=jpg&width=944"
  },
  {
    name: "Muhd Amien Muzaffar S.",
    date: "2 days ago",
    rating: 5,
    review: "Very satisfied with the products they're selling. All is at a reasonably price.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF4dkFBPpFU9QgJEvldw8OnjvKafSoZVoEk1JbpATiWpp5UszdKL5m-zUd3SZ4VJfQ-K8&usqp=CAU" 
  },
  {
    name: "Anna",
    date: "11 days ago",
    rating: 4.5,
    review: "For whoever read this review, you guys should buy from this company, mine arrived quickly.",
    image: "https://thumbs.dreamstime.com/z/headshot-cute-lovely-woman-has-broad-smile-dark-hair-keeps-hand-ear-shows-white-teeth-braces-looks-directly-ca-118493321.jpg"
  },
  {
    name: "Mary Joseph",
    date: "2 days ago",
    rating: 5,
    review: "Very satisfied with the products they're selling. All is at a reasonably price.",
    image: "https://t3.ftcdn.net/jpg/01/73/77/00/360_F_173770068_LRQyNUZQn9WtQyJoJsOEwK8qwBzypBm0.jpg" 
  },
  {
    name: "Kaizer Zreg",
    date: "11 days ago",
    rating: 4.5,
    review: "For whoever read this review, you guys should buy from this company, mine arrived quickly.",
    image: "https://media.gettyimages.com/id/1726071454/photo/woman-in-the-mirror.jpg?s=612x612&w=gi&k=20&c=dKAD-0u6GDza91lz_dibTXYl59zSK8MK8Dt_S3aA9f8="
  },
  // Add more reviews as needed...
];

// Star rating component
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;

  return (
    <div style={{marginTop:'10%'}} className="flex items-center mb-2">
      {Array.from({ length: fullStars }, (_, index) => (
        <svg key={index} className="w-4 h-4 text-green-500" viewBox="0 0 24 24">
          <path d="M12 .587l3.668 7.571L24 9.748l-6 5.847 1.417 8.259L12 19.896l-7.417 3.958L6 15.595 0 9.748l8.332-1.59L12 .587z" />
        </svg>
      ))}
      {halfStar && (
        <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24">
          <path d="M12 .587l3.668 7.571L24 9.748l-6 5.847 1.417 8.259L12 19.896l-7.417 3.958L6 15.595 0 9.748l8.332-1.59L12 .587z" />
        </svg>
      )}
    </div>
  );
};

const CustomerReview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < customerReviews.length - 3 ? prevIndex + 3 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 3 : customerReviews.length - 3
    );
  };

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(nextSlide, 2000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <section className="my-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">What Our Customers Say</h2>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${(currentIndex / customerReviews.length) * 100}%)` }}
          >
            {customerReviews.map((review, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-6 flex-shrink-0">
                <div className="bg-white rounded-lg p-5 shadow-md flex items-center space-x-4">
                  <img src={review.image} alt={review.name} className="w-20 h-20 rounded-full object-cover" />
                  <div className="text-left">
                    <p className="text-gray-800 font-semibold mb-2">{review.name}</p>
                    <p className="text-gray-500 text-sm mb-2">{review.date}</p>
                    <StarRating rating={review.rating} />
                    <p className="text-gray-600">{review.review}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-full focus:outline-none"
            onClick={prevSlide}
          >
            &#10094;
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-full focus:outline-none"
            onClick={nextSlide}
          >
            &#10095;
          </button>
        </div>

        <div className="flex justify-center mt-4">
          {Array.from({ length: Math.ceil(customerReviews.length / 3) }, (_, index) => (
            <button
              key={index}
              className={`w-3 h-3 mx-1 rounded-full ${index === currentIndex / 3 ? 'bg-green-500' : 'bg-gray-300'}`}
              onClick={() => setCurrentIndex(index * 3)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
