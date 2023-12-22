import Image from "next/image";

const ProjectCards = ({ data }) => {
  return (
    <div>
      <div className="w-full h-48 lg:h-72 bg-accent lg:bg-secondary px-8 pt-8 lg:px-12 lg:pt-12 rounded-lg lg:rounded-md overflow-hidden">
        <Image src={data?.img} alt="test" height={640} width={640} />
      </div>
      <div className="mt-4">
        <h2 className="text-2xl">{data?.name}</h2>
        <p className="font-extralight">{data?.info}</p>
        <div className="mt-1">
          <span>Technologies: </span>
          <span className="mt-1 flex flex-wrap gap-2">
            {data?.tech?.map((e, i) => (
              <span
                key={i}
                className="bg-secondary rounded-sm px-1 text-sm font-extralight"
              >
                {e}
              </span>
            ))}
          </span>
        </div>
        <div className="flex mt-4">
          <div className="grid grid-cols-2 gap-2">
            <a
              href={data?.githubLInk}
              className="btn btn-primary btn-sm btn-outline"
              target="_blank"
            >
              Source
            </a>
            <a
              href={data?.liveLink}
              className="btn btn-primary btn-sm btn-outline"
              target="_blank"
            >
              Live link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
