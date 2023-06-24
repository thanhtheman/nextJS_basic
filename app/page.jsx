import Feed from '@components/Feed';

const Home = () => {
  return (
    <sesction className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & Share
        <br className="max-md:hidden"/>
        <span className="orange_gradient text-center">
            AI-powered Prompts
        </span>
        </h1>
        <p className="desc text-center">
            Promptopia is an open-source AI Prompting toll
            for modern world to discover, create and share 
            creative prompts
        </p>
        <Feed />
    </sesction>
  )
}

export default Home