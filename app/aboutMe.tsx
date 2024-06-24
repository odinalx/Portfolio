export function AboutMe() {
  return (
    <div className="flex flex-col items-center justify-center text-center w-2/3 mx-auto">
      <h2 className="font-title text-3xl font-extrabold border-b solid w-full my-6">WHO AM I</h2>
      <p className="font-text text-xl w-2/3">
        I am a second year student in <span className="text-secondary">BUT MMI</span> ( Multimedia and Internet
        Professions ) at IUT Nancy Charlemagne and I would like to specialize as a{' '}
        <span className="text-secondary">full-stack developer</span> .{' '}
      </p>
      <a href="" className="font-title border solid p-3 my-12 font-bold text-lg">
        DOWNLOAD MY RESUME
      </a>
    </div>
  );
}
