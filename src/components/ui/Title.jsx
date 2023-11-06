

const Title = ({children}) => {
    return (
        <div className="relative border-s-8 border-orange-400 ps-3 mt-20">
        <h1 className="text-6xl font-bold">{children}</h1>
        <p className="absolute bottom-0 -z-10 opacity-5 text-9xl">{children}</p>
    </div>
    );
};

export default Title;