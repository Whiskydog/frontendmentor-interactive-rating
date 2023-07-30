import { useState } from "react";
import iconStar from "../assets/icon-star.svg";
import illustrationThankYou from "../assets/illustration-thank-you.svg";

export default function Rating() {
  const [selectedRating, setSelectedRating] = useState(null);
  const [rated, setRated] = useState(false);
  const ratings = [1, 2, 3, 4, 5];

  function handleSubmit(e) {
    e.preventDefault();
    setRated(true);
  }

  if (rated)
    return (
      <section className="card card-rated">
        <img
          src={illustrationThankYou}
          alt="Thank you"
          className="img-thank-you"
        />
        <div className="rating-label">
          <span>
            You selected {selectedRating} out of {ratings.length}
          </span>
        </div>
        <h1>Thank you!</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don&apos;t hesitate to get in touch!
        </p>
      </section>
    );

  return (
    <section className="card">
      <img src={iconStar} alt="Star icon" className="round icon-star" />
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <form>
        <ul className="flex-ratings">
          {ratings.map((rating) => (
            <li key={rating}>
              <input
                type="radio"
                name="rating"
                id={`radio${rating}`}
                value={rating}
                checked={selectedRating === rating}
                onChange={() => setSelectedRating(rating)}
              />
              <label className="round" htmlFor={`radio${rating}`}>
                {rating}
              </label>
            </li>
          ))}
        </ul>
        <button className="btn-submit" onClick={handleSubmit} disabled={!selectedRating}>
          SUBMIT
        </button>
      </form>
    </section>
  );
}
