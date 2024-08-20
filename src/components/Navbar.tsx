import { Button, Navbar as DaisyNavBar } from "react-daisyui";
import VTraceFullSvg from "./VTraceFullSvg";
export default function Navbar() {
  return (
    <DaisyNavBar className="shadow-2xl mb-12">
      <div className="flex flex-none w-full justify-center">
      <DaisyNavBar className="max-w-5xl w-full">
        <div className="flex-1">
          <VTraceFullSvg />
        </div>
        <div className="flex-none">
          <Button tag="a" shape="square" color="ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </Button>
        </div>
      </DaisyNavBar>
      </div>
    </DaisyNavBar>
  );
}