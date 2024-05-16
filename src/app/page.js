import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";
import Header from "@/components/layout/header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader={"Our Story"} mainHeader={"About us"} />
        <div className="text-center  max-w-2xl mx-auto mt-4 flex-col gap-4">
          <p>
            Extension Disabled or Uninstalled: Sometimes, extensions providing
            this functionality might be disabled or uninstalled. You can check
            your installed extensions in VSCode by going to the Extensions view
            (Ctrl+Shift+X or Cmd+Shift+X), searching for "Lorem ipsum", and
            ensuring that it's installed and enabled
          </p>
          <p>
            Extension Disabled or Uninstalled: Sometimes, extensions providing
            this functionality might be disabled or uninstalled. You can check
            your installed extensions in VSCode by going to the Extensions view
            (Ctrl+Shift+X or Cmd+Shift+X), searching for "Lorem ipsum", and
            ensuring that it's installed and enabled
          </p>
          <p>
            Extension Disabled or Uninstalled: Sometimes, extensions providing
            this functionality might be disabled or uninstalled. ensuring that
            it's installed and enabled
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8">
          <a
            className="text-4xl underline text-gray-500"
            href="tel:+8210-1234-4567">
            +8210-1234-4567
          </a>
        </div>
      </section>
      <footer className="border-t p-8 text-center text-gray-500 mt-8">
        &copy; 2024 All rights reserved
      </footer>
    </>
  );
}
