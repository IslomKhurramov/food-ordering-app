import Image from "next/image";
import Right from "./icons/Right";

export default function Hero() {
  return (
    <section className="heroSection mt-4 ">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Everything
          <br />
          is better
          <br />
          with a&nbsp; <span className="text-primary">Pizza</span>
        </h1>
        <p className="my-6 text-gray-500">
          Pizza is the missing piece that makes every day complete, a simple yet
          delicious joy in life
        </p>

        <div className="flex gap-4 text-sm">
          <button className="flex justify-center bg-primary uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full">
            <div>Order now</div>
            <Right />
          </button>
          <button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
            <div>Learn more</div>

            <Right />
          </button>
        </div>
      </div>
      <div
        className="relative"
        style={{ maxWidth: "430px", maxHeight: "400px" }}>
        <Image
          src={"/pizza1.png"}
          layout={"fill"}
          objectFit={"conatin"}
          alt={"pizza"}
        />
      </div>
    </section>
  );
}
