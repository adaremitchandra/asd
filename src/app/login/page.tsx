import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const page = () => {
  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
      <div className="hidden bg-primary lg:flex lg:flex-col lg:justify-center lg:items-center lg:text-center gap-4 relative overflow-hidden">
        <div className="size-[800px] bg-white/15 rounded-full absolute right-0 top-[339px]" />
        <div className="size-[500px] bg-white/15 rounded-full absolute left-[-258px] top-[-17px]" />
        <h2 className="font-semibold text-5xl uppercase tracking-tight">Nama aplikasi</h2>
        <p className="max-w-[430px] text-sm font-normal">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
          type specimen book.
        </p>
      </div>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-8">
          <div className="grid gap-2">
            <h1 className="text-2xl font-normal">Selemat Datang Admin</h1>
            <p className="text-xs text-muted-foreground">Silahkan masukkan email atau nomor telepon dan password Anda untuk mulai menggunakan aplikasi</p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Contoh: admin@gmail.com" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Masukan Password" required />
            </div>
          </div>
          <Button type="submit" className="w-full uppercase">
            Masuk
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
