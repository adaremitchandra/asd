import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <section className="pt-16">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt repellendus perferendis similique, mollitia soluta consequatur neque veniam ea corporis, dolores error, molestias placeat natus eum non omnis quasi quod consectetur.
        </p>
        <div className="flex gap-4 p-4">
          <Button variant={"outline"}>masuk</Button>
          <Button>daftar</Button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
