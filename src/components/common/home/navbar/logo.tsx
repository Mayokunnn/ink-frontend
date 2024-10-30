/* eslint-disable @next/next/no-img-element */

export default function Logo({
  withLettering = true,
}: {
  withLettering?: boolean;
}) {
  return (
    <div>
      <span className="flex items-center gap-1 text-foreground text-2xl lg:text-4xl font-semibold">
        <img className="h-7 w-7 lg:w-10 lg:h-10" src={"/assets/logo/ink.png"} alt="Logo" />
        {withLettering && "Ink"}
      </span>
    </div>
  );
}
