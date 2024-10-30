import { Button } from "@/components/ui/button";

export default function Actions() {
  return (
    <div className="flex gap-3">
        <Button className="rounded-full text-lg bg-foreground poppins-regular p-6 text-white border-main border-2 ">Sign Up</Button>
        <Button className="rounded-full text-lg bg-background poppins-regular p-6 text-main border-main border-2">Log in</Button>
    </div>
  )
}
