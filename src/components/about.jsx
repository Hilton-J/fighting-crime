
const about = () => {
  return (
    <section className="min-h-screen">
      <div className="bg-blue-950 my-8 text-white p-4 ">
        <h1>About</h1>
      </div>
      <div className=" flex gap-[3rem] md:gap-[5rem] mx-[2rem] md:mx-[4rem] justify-center flex-wrap mb-[4rem]">

        <div className="bg-blue-900  shadow-lg rounded-lg w-96 h-auto p-6 text-white">
          <h1 className="text-xl md:text-2xl font-bold mb-4">
            The Vision of the South African Police Service is to:
          </h1>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              create a safe and secure environment for all the people in South
              Africa
            </li>
            <li>act with integrity</li>
            <li>respect for people&apos;s diversity and the law</li>
            <li>perform their duties according to the Code of Ethics</li>
          </ul>
        </div>

        <div className="bg-blue-900 shadow-lg rounded-lg w-96 h-auto p-6 text-white">
          <h1 className="text-xl md:text-2xl font-bold mb-4">
            The Mission of the South African Police Service is to -
          </h1>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              prevent and combat anything that may threaten the safety and
              security of any community
            </li>
            <li>
              investigate any crimes that threaten the safety and security of
              any community
            </li>
            <li>Ensure offenders are brought to justice</li>
          </ul>
        </div>

        <div className="bg-blue-900 shadow-lg rounded-lg w-96 h-auto p-6 text-white">
          <h1 className="text-xl md:text-2xl font-bold mb-4">
            The Values of the South African Police Service are to -
          </h1>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              protect everyone&apos;s rights and to be impartial, respectful, open
              and accountable to the community
            </li>
            <li>use the powers given to us in a responsible way</li>
            <li>
              provide a responsible, effective and high-quality service with
              honesty and integrity
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default about