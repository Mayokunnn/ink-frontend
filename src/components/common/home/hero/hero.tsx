import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="mx-auto grid grid-cols-2 items-center gap-6 w-full h-full max-w-full xl:max-w-[80%]">
      <div className="flex flex-col h-full justify-center gap-6">
        <h1 className="poppins-regular text-7xl tracking-wide leading-none">
          <span className="text-foreground">Note</span> taking, <br /> made
          simple
        </h1>
        <p className="text-xl">
          Passionately made by student and for student.
          <br /> Noted, the all in one note taking app.{" "}
        </p>
        <div>
          <Button className="rounded-full text-lg bg-foreground poppins-regular p-6 text-white border-main border-2 ">
            Get Started
          </Button>
        </div>
      </div>
      <div>
{        // eslint-disable-next-line @next/next/no-img-element
}        <img src={"./assets/images/hero.svg"} alt="Hero Image"/>
      </div>
    </div>
  );
}
