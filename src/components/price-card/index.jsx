function Card() {
  return (
    <div className="main">
      <div className="container">
          <div className="item-1 item">
            <h2>Join our community</h2>
            <h3>30-day,hassle-free money back guarantee</h3>
            <p>
              Gain access to our full libary of tutorials along with expert code
              review. <br />
              Perfect for any developers are serious about honing thier skills.
            </p>
          </div>
          <div className="item-2 item">
            <h3>Monthly Subscription</h3>
            <p>
              {" "}
              <span>$29</span> per month
            </p>
            <p>Full access for less than $1 a day</p>
            <button>Sign up</button>
          </div>
          <div className="item-3 item">
            <h3>Why Us</h3>
            <p>
              Tutorials by industry experts <br />
              Peer & expert code review <br />
              Codeing exercises <br />
              Access to our GitHub repos <br />
              Community forum <br />
              Flashcard deck <br />
              New videos every week
            </p>
          </div>
        </div>
      </div>
  );
}

export default Card;
