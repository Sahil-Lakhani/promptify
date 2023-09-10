import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        Inspire and engage with prompts that ignite creativity, with the power
        of AI. Craft prompts effortlessly and share them globally. Join a
        community of creators, educators, and thinkers. Unleash creativity, one
        AI-powered prompt at a time.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post , prompt: e.target.value})}
            placeholder="Write your Prompt here ..."
            required
            className="form_textarea"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag
            <span className="font-normal">(#product, #webdev , #idea)</span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post,tag:e.target.value})}
            placeholder="#TAG"
            required
            className="form_input"
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancle
          </Link>
          <button type="submit"
            disabled={submitting}
          className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white">
            {submitting? `${type}...`: type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
