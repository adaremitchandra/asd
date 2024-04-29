import { Button } from "@/components/ui/button"

const HomePage = () => {
  return (
    <div className="flex gap-4 p-4">
      <Button variant={"outline"}>masuk</Button>
      <Button>daftar</Button>

      <div className="size-10"></div>
    </div>
  )
}

export default HomePage