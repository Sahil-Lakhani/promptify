import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Promts</span>
      </h1>
      <p className="desc text-center">
        Your AI-Powered Problem-Solving Sidekick! Tired of staring at a blank
        page? Let Promptify be your inspiration HQ. Our app generates custom AI
        prompts to supercharge your ideas and crush challenges. From writing
        woes to brainstorming blocks, Promptify is your secret weapon for
        out-of-the-box thinking. Elevate your creativity – it all starts with a
        prompt!
      </p>

      <Feed />
    </section>
  );
}

export default Home;