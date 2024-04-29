import SummaryCard from "@/components/SummaryCard";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const DashboardPage = () => {
  const summaryData = [
    {
      title: "Jumlah User",
      count: 150,
      unit: "User",
    },
    {
      title: "Jumlah User Aktif",
      count: 150,
      unit: "User",
    },
    {
      title: "Jumlah Produk",
      count: 150,
      unit: "Produk",
    },
    {
      title: "Jumlah Produk Aktif",
      count: 150,
      unit: "Produk",
    },
  ];

  const latestProduct = [
    {
      product: "Microsoft Surface 7",
      createdAt: "12 Mei 2023",
      price: "1000",
    },
    {
      product: "Microsoft Surface 7",
      createdAt: "12 Mei 2023",
      price: "1000",
    },
    {
      product: "Microsoft Surface 7",
      createdAt: "12 Mei 2023",
      price: "1000",
    },
  ];

  return (
    <section>
      <h1 className="pt-[30px] pb-8 text-lg">Dashboard</h1>
      <div className="flex flex-wrap gap-5">
        {summaryData.map((data, index) => (
          <SummaryCard {...data} key={index} />
        ))}
      </div>
      <div className="px-[30px] pt-[22px] pb-[45px] bg-background">
        <h2>Produk Terbaru</h2>
        <div className="">
          <Table>
            <TableHeader className="bg-primary text">
              <TableRow className="hover:bg-transparent">
                <TableHead className="text-primary-foreground">Produk</TableHead>
                <TableHead className="text-primary-foreground">Tanggal Dibuat</TableHead>
                <TableHead className="text-primary-foreground">Harga (Rp)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {latestProduct.map((p, i) => (
                <TableRow key={i} className="border-b-0">
                  <TableCell>{p.product}</TableCell>
                  <TableCell className="text-muted-foreground">{p.createdAt}</TableCell>
                  <TableCell>Rp {p.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
