const TalkToUs = () => {
  return (
    <>
      <div className="bg-blue-950 my-8 text-white p-4">
        <h1>Talk To Us</h1>
      </div>
      <section className="ml-4 px-[5rem]">
        <p>
          The South African Police Service is committed to creating a safe and
          secure environment for all the people in South Africa. Your feedback
          is welcome and important to us. You can contribute towards the
          enhancement and development of the South African Police Service.
        </p>
        <p className="font-bold my-4">
          This TALK TO US page is not for emergencies and you cannot report a
          crime on the SAPS website.
        </p>
        <p className="my-4">
          The following contact numbers can be used for the purposes of
          emergencies, to report a crime, or to register a complaint:
        </p>
        <ul className="ml-8 list-disc mb-[3rem]">
          <li>
            For emergencies or to report a crime, call <strong>10111</strong> or
            contact your nearest Police Station.
          </li>
          <li>
            If you know of any criminal activities or want to report a crime
            anonymously, you can contact Crime Stop –{" "}
            <strong>08600 10111</strong>.
          </li>
          <li>
            You can contact the SAPS Service Complaints Centre to register a
            complaint on SAPS service delivery by calling{" "}
            <strong>0800 333 177</strong>, faxing to
            <strong>012 393 5452</strong>, or emailing: Service Complaints.
          </li>
          <li>
            You can also view our Frequently Asked Questions to answer some of
            the queries that you might have.
          </li>
          <li>
            For any general inquiries, suggestions, and/or compliments, feel
            free to contact us at SAPS Corporate Communications.
          </li>
        </ul>
      </section>
    </>
  );
};

export default TalkToUs;
