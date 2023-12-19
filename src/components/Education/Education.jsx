const Education = () => {
  return (
    <div className="bg-[#c0d6df] py-10 lg:py-40 rounded-xl lg:rounded-none mx-6 lg:mx-0 mt-20 lg:mt-0">
      <div className="lg:w-3/5 lg:mx-auto mx-6">
        <h2 className="text-3xl font-bold">EDUCATION</h2>
        <div className="relative -mt-8">
          <ul className="steps steps-vertical">
            <li data-content="●" className="step step-info">
              <div className="h-40 flex items-center">(Current)</div>
            </li>
            <li data-content="✓" className="step step-info">
              <div className="h-40 flex items-center">2020</div>
            </li>
            <li data-content="✓" className="step step-info">
              <div className="h-40 flex items-center">2018</div>
            </li>
          </ul>
          <div className="absolute top-[5.68rem] left-[3.13rem]">
            <h2>B.Sc. in Textile Engineering</h2>
            <p>Department of Textile Engineering Management</p>
            <p>BUTEX</p>
          </div>
          <div className="absolute top-[15.6rem] left-[3.13rem]">
            <h2>Higher Secondary School Certificate</h2>
            <p>Science | GPA: 5.0/5.0</p>
            <p>B.A.F. Shaheen College, Tejgaon</p>
          </div>
          <div className="absolute top-[25.6rem] left-[3.13rem]">
            <h2>Secondary School Certificate</h2>
            <p>Science | GPA: 5.0/5.0</p>
            <p>Mirpur Bangla School and College</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
