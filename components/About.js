import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function About() {
    return (
        <section className="min-h-screen">
            <div className="flex flex-col text-center mt-20">
                <h2 className="text-6xl py-3 text-indigo-700">Adrian Greksa</h2>
                <h3 className="text-left w-60 mx-auto -z-10 sm:-translate-x-14">Software Engineer</h3>
                <div className="space-y-3 py-10">
                    <p className="leading-loose text-lg">I am an enthusiatic computer science student that changed from being a machinist in manufacturing. I also like AI, Machine Learning, Space, Physics and Quantum Computing.</p>
                </div>
            </div>
            <div className="text-3xl flex justify-center gap-16 py-3">
                <AiFillLinkedin />
                <AiFillGithub />
            </div>
        </section>
    );
}
