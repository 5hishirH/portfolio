const Education = () => {
  return (
    <div className="bg-[#c0d6df] py-10 lg:py-40 rounded-xl lg:rounded-none mx-6 lg:mx-0 mt-20 lg:mt-0">
      <div className="lg:w-3/5 lg:mx-auto mx-6">
        <h2 className="text-3xl font-bold">EDUCATION</h2>
        <ul className="steps steps-vertical -mt-6 lg:mt-0">
          <li data-content="●" className="step step-info">
            <div className="text-left">
              <div className="h-12"></div>
              <h2 className="font-semibold">(Current)</h2>
              <div>
                <h3>B.Sc. in Textile Engineering</h3>
                <h3>BUTEX</h3>
              </div>
            </div>
          </li>
          <li data-content="✓" className="step step-info">
            <div className="text-left">
              <div className="h-12"></div>
              <h2>2020</h2>
              <div>
                <h3>Higher Secondary School certificate</h3>
                <h3>SCIENCE | GPA 5.0/5.0</h3>
              </div>
            </div>
          </li>
          <li data-content="✓" className="step step-info">
            <div className="text-left">
              <div className="h-12"></div>
              <h2>2018</h2>
              <div>
                <h3>Secondary School certificate</h3>
                <h3>SCIENCE | GPA 5.0/5.0</h3>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
