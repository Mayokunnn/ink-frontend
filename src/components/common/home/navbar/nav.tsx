import Actions from "./actions";
import Logo from "./logo";
import { Navbar } from "./navbar";

export default function Nav() {
  return (
    <div className="w-full border-b-main border-2">
      <div className="mx-auto lg:max-w-[80%] xl:max-w-full px-2 py-2 lg:h-24 relative flex items-center justify-between sm:px-6 lg:px-8">
          <Logo/>
          <Navbar className="top-2 hidden lg:block" />
          <Actions/>
      </div>
    </div>
  )
}
