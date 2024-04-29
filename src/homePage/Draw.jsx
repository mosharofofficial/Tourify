
const Draw = () => {
    return (
      <>
        <p className="mb-3 font-bold">
          Ready to soar?{" "}
          <span className="text-white bg-black px-1 py-0.5 text-lg">
            Enter our raffle draw
          </span>{" "}
          for a shot at free flight tickets to Cox&apos;s Bazar and make your
          beach dreams a reality!
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-1 "
        >
          <label className=" bg-black text-white font-bold input input-bordered flex items-center gap-2">
            Email :
            <input name="email" type="email" className=" grow " />
          </label>

          <button className="button  py-2 mt-2" type="submit">
            Submit
          </button>
        </form>
      </>
    );
};

export default Draw;