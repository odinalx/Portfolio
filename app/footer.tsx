export function Footer() {
  return (
    <div className="flex flex-wrap items-center justify-between w-2/3 mx-auto font-title pb-4 border-t border-solid">
      <div className="flex items-center justify-start w-1/3">
        <p>©2023</p>
      </div>
      <div className="flex items-center justify-center w-1/3">
        <a href="" className="mx-2">
          GITHUB
        </a>
        <a href="" className="mx-2">
          LINKEDIN
        </a>
        <a href="" className="mx-2">
          TWITTER
        </a>
      </div>
      <div className="flex items-center justify-end w-1/3">
        <a href="">MENTIONS LÉGALES</a>
      </div>
    </div>
  );
}
