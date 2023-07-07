export default function Navbar() {
  return (
    <nav className="sticky navbar-start h-screen top-0 max-w-1/4 self-start items-start pt-2 pl-4 pr-2 border-r-[1px]">
      <div className="flex container content-stretch px-2 border-b-[1px] py-4 h-24">
        <div className="avatar placeholder flex-1">
          <div className="bg-gray-200 text-neutral-content rounded-full h-16 w-16">
            <span className="text-3xl">N</span>
          </div>
          <div className="flex-col">
            <div className="text-xl px-2">Nick Dingus</div>
            <div className="flex flex-row divide-x">
              <div className="text-xs text-gray-500 px-1">Account</div>
              <div className="text-xs text-gray-500 px-1">Sign Out</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ul className="menu text-lg flex flex-col divide-y items-stretch gap-1 whitespace-nowrap pr-10">
          <li>
            <a>Home</a>
          </li>
          <li>
            <details open className="group">
              <summary className="group-open:bg-neutral-200 rounded-none">
                Organization
              </summary>
              <ul className="divide-y">
                <li>
                  <a>Info</a>
                </li>
                <li>
                  <a>Contacts</a>
                </li>
                <li>
                  <details open>
                    <summary>Project Management</summary>
                    <ul className="divide-y">
                      <li>
                        <a>Projects</a>
                      </li>
                      <li>
                        <a>Teams</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Dashboard</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
