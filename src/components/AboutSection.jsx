

const description = "I am a Software Developer with a degree in Informatics Engineering and hands-on experience building reliable, scalable software solutions. Skilled in Java, Python, and modern frameworks, I have worked on projects ranging from smart home systems to large-scale device management platforms in the telecommunications sector. My expertise includes backend development, microservices architecture, REST and gRPC APIs, event-driven systems (Kafka), and cloud deployment (AWS EKS, Docker, Kubernetes). I have strong experience with relational and NoSQL databases (PostgreSQL, MySQL, MongoDB) and CI/CD practices, complemented by monitoring and observability tools such as Prometheus, Grafana, and Datadog. I am passionate about delivering highquality, maintainable software that drives real impact.";

export default function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {description}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <img
            src={"./profile.jpg"}
            width={280}
            height={280}
            alt="Nuno Cunha"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
