const Offers = () => {
  return (
    <div className="offerContainer bg-yellow  border-2 border-black rounded-xl font-bold">
      <h1 className="pl-2 text-2xl text-bold py-2  border-b-2 border-black">
        Summer Offer !!!{" "}
      </h1>
      <div className="offerBox border-b-2 border-black sm:flex ">
        <img
          src={"https://i.ibb.co/LrQ34BH/beach.jpg"}
          className="object-cover object-center sm:w-1/3"
        />
        <p className="p-2 text-lg sm:w-2/3">
          Discover the allure of{" "}
          <span className="bg-black text-lg text-white px-1 py-0.5">
            Cox&apos;s Bazar
          </span>{" "}
          this summer with an exclusive
          <span className="bg-black text-lg text-white px-1 py-0.5">
            40% discount offer!
          </span>{" "}
          Immerse yourself in the world&apos;s longest natural sandy beach,
          indulge in delicious seafood delights, and explore the vibrant culture
          of this coastal gem. With our unbeatable savings, experience the
          beauty of Cox&apos;s Bazar like never before. Book now and embark on a
          seaside adventure of a lifetime!
          <br />{" "}
          <span className="bg-black text-lg text-white px-1 py-0.5">
            Coupon Code: Cox40
          </span>
        </p>
      </div>
      <div className="offerBox  sm:flex">
        <img
          src={"https://i.ibb.co/HHQP9Jr/sylhet.jpg"}
          className="sm:order-2 object-cover object-center sm:rounded-br-xl sm:w-1/3 "
        />
        <p className="p-2 text-lg  sm:w-2/3">
          Escape to the enchanting landscapes of{" "}
          <span className="bg-black text-lg text-white px-1 py-0.5">
            Sylhet
          </span>
          this summer with our special{" "}
          <span className="bg-black text-lg text-white px-1 py-0.5">
            35% discount offer!
          </span>{" "}
          Explore the lush tea gardens, chase waterfalls amidst verdant forests,
          and immerse yourself in the tranquility of nature&apos;s embrace. With
          savings as breathtaking as the scenery, seize the opportunity to
          create unforgettable memories in Sylhet. <br />{" "}
          <span className="bg-black text-lg text-white px-1 py-0.5">
            Coupon Code: Sylhet35
          </span>
        </p>
      </div>
    </div>
  );
};

export default Offers;
