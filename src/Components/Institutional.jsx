function Institutional() {
  return (
    <section className="w-full bg-[#162136] py-16 ">
      <div className="max-w-5xl mx-auto bg-[#1c2a44] p-10 flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2">
          <img
            // Academic/Library reliable image link
            src="https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Academic Campus"
            className="w-full h-87.5 object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 text-white">
          <h3 className="text-3xl font-serif mb-4">
            Student Mentorship & Faculty Development
          </h3>
          <div className="w-full h-px bg-[#7fb5f5]/50 mb-8"></div>
          <ul className="space-y-4 text-sm font-light leading-relaxed list-disc pl-5 opacity-90">
            <li>
              Exclusive, high-touch academic support customized to individual
              student learning paths and goals.
            </li>
            <li>
              Counsel for senior faculty and board members on critical 
              educational leadership and policy matters.
            </li>
            <li>
              Forecast educational and global research trends to inform 
              campus growth and curriculum strategies.
            </li>
            <li>
              Workshops and seminars with world-renowned experts in 
              pedagogy, science, and emerging technology.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Institutional;