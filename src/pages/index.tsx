import { type NextPage } from "next";
import Head from "next/head";
import Button from "~/components/Button";

const Home: NextPage = () => {
  const handleClick = () => {};

  return (
    <>
      <Head>
        <title>
          SimpleUI | Build Design Systems easily with React and Tailwind
        </title>
        <meta
          name="description"
          content="Simple-UI Build easily Design Systems with React and Tailwind"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <header className="border-gray w-full border-b p-2">SimpleUI</header>
      <div className="bg-green grid h-[calc(100%-41px)] grid-cols-2">
        <section className="h-half p-2 border border-gray-100 p-2">
          <Button
            className=" text-sm border border-gray-300 p-2 hover:bg-gray-300 active:bg-gray-400"
            onClick={handleClick}
          >
            Create Design System
          </Button>
        </section>
        <section className="h-half p-2 border border-gray-100">Create</section>
        <section className="h-half p-2 border border-gray-100">Preview</section>
        <section className="h-half p-2 border border-gray-100">Use</section>
        {/* <section className=" w-60">
          <Sidebar />
        </section>
        <main className="w-full">
          <Button onClick={handleClick}>Create Button</Button>
          <section>
            {components.map((component) => (
              <div key={component.id}>
                <h3>{component.name}</h3>
                <p>{component.id}</p>
                <p>{component.classes.join(" ")}</p>
                <div>
                  {constants[component.type]({
                    children: component.name,
                    onClick: () => console.log("clicked"),
                    className: component.classes.join(" "),
                  })}
                </div>
              </div>
            ))}
            <Preview />
          </section>
        </main> */}
      </div>
    </>
  );
};

export default Home;
