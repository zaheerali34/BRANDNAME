function Services() {
  return (
    <div className="relative h-75 md:h-87.5 w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
        }}
      >
        <div className="absolute inset-0 bg-[#0a1a2f]/70">
          <h1 className="text-white text-[3rem] max-sm:text-[2rem] max-sm:px-20 pt-40 px-40">
            Services
          </h1>
          <p className="text-white font-semibold text-[1rem] px-40">
            Our institution provides world-class educational resources and
            personalized mentorship for students and academic professionals. We
            help learners navigate complex subjects through modern teaching
            methodologies, interactive research, and specialized coaching. Our
            curriculum covers a broad range of disciplines including Advanced
            Science, Mathematics, Technology, Literature, and Global History.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
