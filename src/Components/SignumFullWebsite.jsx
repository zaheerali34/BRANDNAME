
function SignumFullWebsite() {
  return (
    <section className="w-full pt-24 flex flex-col md:flex-row items-start gap-12 text-white">
      <div className="md:w-1/2">
        <h2 className="text-3xl font-serif mb-2">Our Educational Edge</h2>
        <div className="w-full h-px bg-blue-400/50 mb-8"></div>
        <ul className="space-y-4 text-sm font-light leading-relaxed list-disc pl-5 opacity-90">
          <li>
            Rigorous academic standards: our faculty has extensive 
            experience in specialized research and modern pedagogy...
          </li>
          <li>
            Unique mentorship sessions and interactive symposiums with 
            leading scholars and industry practitioners...
          </li>
          <li>
            As an independent educational institution, our campus fosters 
            diversity across various intellectual and cultural spectrums.
          </li>
          <li>
            Our curriculum offers specialized courses only in disciplines where 
            we can ensure students gain a competitive global edge...
          </li>
        </ul>
        <div className="mt-12 pt-8 border-l-2 border-blue-400 pl-6 italic text-xl font-light">
          With our institution's guidance, students are better prepared to 
          achieve academic excellence and lead future innovations...
        </div>
      </div>
      <div className="md:w-1/2">
        <img 
          // University/Campus building reliable image
          src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="University Campus" 
          className="w-full shadow-2xl h-[400px] object-cover" 
        />
      </div>
    </section>
  );
}

export default SignumFullWebsite;